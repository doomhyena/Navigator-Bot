const Discord = require('discord.js');

module.exports = {
    name: "dobókocka",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Random dobókockás játék",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
        let sum = Math.floor(Math.random() * 6 ) + 1;
    
              message.channel.send({embeds: `Az eredmény: **${sum}**`});
    }
}