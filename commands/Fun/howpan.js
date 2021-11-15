const Discord = require(`discord.js`);

module.exports = {
    name: "howpan",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Megmutatja, hogy mennyire vagy pán",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let sum = Math.floor(Math.random() * 100 ) + 1;
        
        let ballembed = new Discord.MessageEmbed()
          .setAuthor(message.author.tag)
          .setColor(`PURPLE`)
          .addField(`Ennyire vagy pánszexuális:`, `${sum}%`)
          .setFooter(bot.user.username, bot.user.displayAvatarURL())
          .setTimestamp();
          
        message.channel.send({embeds: [ballembed]});
    }
}