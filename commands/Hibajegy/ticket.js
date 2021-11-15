const Discord = require(`discord.js`);
const fs = require("fs");

module.exports = {
    name: "ticket",
    aliases: [""],
    categories: "Hibajegy",
    permissions: "",
    description: "Ezzel a parancsal tudsz hibajegyet nyitni!",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        const ch = message.guild.channels.cache.find(ch => ch.name === message.author.id)
        if(ch) return message.channel.send({content: 'Te már nyitottál Ticketet!'})
        message.guild.channels.create(`${message.author.id}`, {
            type : 'text',
            parent : '896027210039820338',
            permissionOverwrites : [
                {
                    id : message.guild.id,
                    deny : ['VIEW_CHANNEL']
                },
                {
                    id : message.author.id,
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES']
                }
            ]
        }).then(async channel=> {
            message.reply({content: `<#${channel.id}>, itt a hibajegyed, kérlek gondjaidat, itt írd le!`})
            channel.send({content: `${message.author}, Üdv a saját hibajegyed!\nNemsokára válaszol az egyik Staff.`})
        })
    }
}