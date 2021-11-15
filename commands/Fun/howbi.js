const Discord = require(`discord.js`);

module.exports = {
    name: "howbi",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Megmondja, hogy valaki mennyire biszexuális",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let sum = Math.floor(Math.random() * 100 ) + 1;
        
        let ballembed = new Discord.MessageEmbed()
          .setAuthor(message.author.tag)
          .setColor(`PURPLE`)
          .addField(`Ennyire vagy biszexuális:`, `${sum}%`)
          .setFooter(bot.user.username, bot.user.displayAvatarURL())
          .setTimestamp();
          
        message.channel.send({embeds: [ballembed]});
    }
}