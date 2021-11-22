const Discord = require(`discord.js`);

module.exports = {
    name: "üzenet",
    aliases: [""],
    categories: "Általános",
    permissions: "",
    description: "Üzenetet küld a fejlesztőnek!",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        const senpai = bot.users.cache.get("864583234158460938")
        const bug = args.join(" ")

        if (!bug) {
            message.channel.send(`Nem írtad le az üzenetet!`)
        }
        let bugembed = new Discord.MessageEmbed()
        .setTitle(`Új Üzenet!`)
        .setColor("RED")
        .setAuthor(message.author.tag)
        .addField(`Az üzenet:`, `${bug}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();

        senpai.send({ embeds: [bugembed] })

        message.author.send({ content: `Szia ${message.author.tag}! Az üzenetedet elküldtük! Hamarosan választ kapsz az esetleges kérdésedre!` })
    }
}