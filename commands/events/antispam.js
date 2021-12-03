const Discord = require("discord.js");
const Schema = require('../models/antispam');
const bot = require('../index');
const usersMap = new Map();
const LIMIT = 5;
const TIME = 7000;
const DIFF = 3000;

bot.on("messageCreate", async (message) => {
    Schema.findOne({ Guild: message.guild.id }, async (e, data) => {
        if(message.author.bot) return;
        if(usersMap.has(message.author.id)) {
            const userData = usersMap.get(message.author.id);
            const { lastMessage, timer } = userData;
            const difference = message.createdTimestamp - lastMessage.createdTimestamp;
            let msgCount = userData.msgCount;
    
            if(difference > DIFF) {
                clearTimeout(timer);
                userData.msgCount = 1;
                userData.lastMessage = message;
                userData.timer = setTimeout(() => {
                    usersMap.delete(message.author.id);
                }, TIME);
                usersMap.set(message.author.id, userData)
            }
            else {
                ++msgCount;
                if(parseInt(msgCount) === LIMIT) {
                    let muterole = message.guild.roles.cache.find(role => role.name === '🤐 | Némított');
                    if(!muterole) {
                        try{
                            muterole = await message.guild.roles.create({
                                name : "🤐 | Némított",
                                permissions: []
                            })
                            message.guild.channels.cache.forEach(async (channel, id) => {
                                await channel.createOverwrite(muterole, {
                                    SEND_MESSAGES: false,
                                    ADD_REACTIONS : false
                                })
                            })
                        }catch (e) {
                            console.log(e)
                        }
                    }
                    message.member.roles.add(muterole);
                    message.author.send({content: 'Le lettél némítva, ugyanis spam-eltél!'});
                    setTimeout(() => {
                        message.member.roles.remove(muterole);
                        message.author.send({content: 'A némításod feloldodott! Kérlek máskor ne spam-elj!'})
                    }, TIME);
                } else {
                    userData.msgCount = msgCount;
                    usersMap.set(message.author.id, userData);
                }
            }
        }
        else {
            let fn = setTimeout(() => {
                usersMap.delete(message.author.id);
            }, TIME);
            usersMap.set(message.author.id, {
                msgCount: 1,
                lastMessage : message,
                timer : fn
            });
        }
    });
})