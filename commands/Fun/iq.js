const Discord = require(`discord.js`);

module.exports = {
    name: "iq",
    aliases: ["IQ", "IQ-mérő", "iq-mérő"],
    categories: "Fun",
    permissions: "",
    description: "Megmutatja milyen magas az IQ-d",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let sum = Math.floor(Math.random() * 300 ) + 1;

        let iqembed = new Discord.MessageEmbed()
        .setTitle(`IQ mérő`)
        .setColor(`RANDOM`)
        .addField(`Az IQ-d szinted`, `${sum}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        
        message.channel.send({embeds: [iqembed]})
    }
}