const Discord = require(`discord.js`);

module.exports = {
    name: "botping",
    aliases: [""],
    categories: "Általános",
    permissions: "",
    description: "A bot ping-, és api pingjét mutatja meg.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {

        let botping = Math.round(bot.ws.ping)
        let embed = new Discord.MessageEmbed()
        .setTitle(`A bot pingje`)
        .setColor(`RED`)
        .addField(`Bot ping:`, `${Math.round(bot.ws.ping)}ms`)
        .addField(`API ping:`, `${(bot.ws.ping)}ms`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();

        message.channel.send({ embeds: [embed] });

    }
}