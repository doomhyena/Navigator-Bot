const Discord = require(`discord.js`);

module.exports = {
    name: "howles",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Megmondja, hogy valaki mennyire leszbikus",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let sum = Math.floor(Math.random() * 100 ) + 1;
        
        let ballembed = new Discord.MessageEmbed()
          .setAuthor(message.author.tag)
          .setColor(`PURPLE`)
          .addField(`Ennyire vagy leszbikus:`, `${sum}%`)
          .setFooter(bot.user.username, bot.user.displayAvatarURL())
          .setTimestamp();
          
        message.channel.send({embeds: [ballembed]});
    }
}