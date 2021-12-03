const Discord = require("discord.js");
const bot = require("../index");
const db = require('../models/globalchat');


bot.on("messageCreate", async (message) => {
    if(message.author.bot) return;
    db.findOne({ Channel: message.channel.id, Activated: true }, async(err, data) => {
        if(data) {
            db.find({ Activated: true }, async(err, data) => {
                data.map(({ Channel }) => {
                    if(Channel === message.channel.id){
                        message.delete();
                        
                    let xd = new Discord.MessageEmbed()
                    .setAuthor(
                        message.author.tag, 
                        message.author.displayAvatarURL({ dynamic: true })
                        )
                    .setColor('#00FF00')
                    .setDescription(message.content)
                    .setFooter(
                        message.guild.name, 
                        message.guild.iconURL({ dynamic: true })
                        )
                    .setTimestamp();

                    bot.channels.cache.get(Channel).send({embeds: [xd]})
                    } else {
                        let xd = new Discord.MessageEmbed()
                        .setAuthor(
                            message.author.tag, 
                            message.author.displayAvatarURL({ dynamic: true })
                            )
                        .setColor('#00FF00')
                        .setDescription(message.content)
                        .setFooter(
                            message.guild.name, 
                            message.guild.iconURL({ dynamic: true })
                            )
                        .setTimestamp();
    
                        bot.channels.cache.get(Channel).send({embeds: [xd]})
                    }
                })
            })
        }
    })
});
