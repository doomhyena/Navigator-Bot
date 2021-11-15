const Discord = require(`discord.js`);
const Fs = require('fs');

module.exports = {
    name: "howgay",
    aliases: ["melegmérő", "radiátormérő", "búzamérő", "gayrate"],
    categories: "Fun",
    permissions: "",
    description: "Megmondja, hogy valaki mennyire meleg",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
        let sum = Math.floor(Math.random() * 100 ) + 1;
        
        let ballembed = new Discord.MessageEmbed()
          .setAuthor(message.author.tag)
          .setColor(`PURPLE`)
          .addField(`Ennyire vagy meleg:`, `${sum}%`)
          .setFooter(bot.user.username, bot.user.displayAvatarURL())
          .setTimestamp();
          
        message.channel.send({embeds: [ballembed]});
    }
}