const Discord = require(`discord.js`);

module.exports = {
    name: "luck",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Megmutatja, hogy mennyire vagy szerencsés",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let sum = Math.floor(Math.random() * 100 ) + 1;
        
        let luckembed = new Discord.MessageEmbed()
          .setAuthor(message.author.tag)
          .setColor(`PURPLE`)
          .addField(`Szerencseremérő:`, `${sum}%-ban van szerencséd!`)
          .setFooter(bot.user.username, bot.user.displayAvatarURL())
          .setTimestamp();
          
        message.channel.send({embeds: [luckembed]})
    }
}