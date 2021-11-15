const Discord = require(`discord.js`);

module.exports = {
    name: "invite",
    aliases: [""],
    categories: "Általános",
    permissions: "",
    description: "Elküldi a botmeghívót privátban!",
    cooldown: "",
    usage: "<parancs neve>",
    run: async(bot, message, args) => {
        let helpembed = new Discord.MessageEmbed()
		.setColor("RANDOM")
		.setAuthor(message.author.tag)
		.addField("Invite link", `[Hamarosan]`, true)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
    message.author.send({ embeds: [helpembed] })
    }
}