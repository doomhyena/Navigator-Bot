const Discord = require(`discord.js`);

module.exports = {
    name: "support",
    aliases: [""],
    categories: "Általános",
    permissions: "",
    description: "Elküldi a support szerver meghívóját",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let helpembed = new Discord.MessageEmbed()
		.setColor("RANDOM")
		.setAuthor(message.author.tag)
		.addField("Support Szerver", `[Hamarosan]`, true)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
    message.author.send({ embeds: [helpembed]})
    }
}