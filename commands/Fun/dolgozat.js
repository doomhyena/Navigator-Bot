const Discord = require(`discord.js`);

module.exports = {
    name: "dolgozat",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Megmutatja hányas dolgozatot írsz",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let sum = Math.floor(Math.random() * 6 ) + 0;

        let embed = new Discord.MessageEmbed()
        .setTitle(`Dolgozat`)
        .setColor(`RANDOM`)
        .addField(`A dolgozatod jegye:`, `${sum}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({embeds: [embed]})
    }
}