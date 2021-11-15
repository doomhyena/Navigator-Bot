const Discord = require(`discord.js`);

module.exports = {
    name: "howhetero",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Megmutatja, hogy mennyire vagy hetero",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let sum = Math.floor(Math.random() * 100 ) + 1;
        
        let ballembed = new Discord.MessageEmbed()
          .setAuthor(message.author.tag)
          .setColor(`PURPLE`)
          .addField(`Ennyire vagy heteroszexuális:`, `${sum}%`)
          .setFooter(bot.user.username, bot.user.displayAvatarURL())
          .setTimestamp();
          
        message.channel.send({embeds: [ballembed]});
    }
}