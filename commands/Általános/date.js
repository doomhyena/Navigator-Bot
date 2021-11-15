const Discord = require(`discord.js`);
const moment = require("moment")

module.exports = {
    name: "date",
    aliases: [""],
    categories: "Általános",
    permissions: "",
    description: "Meg tudod nézni, hogy mennyi az idő és a dátumot",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let timeembed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle('Idő és Dátum')
        .addField('Mai idő:', moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
        .setFooter(`Parancsot lekérte: ${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp();

        message.channel.send({ embeds: [timeembed] })
    }
}