const Discord = require(`discord.js`);

module.exports = {
    name: "feedback",
    aliases: ["visszajelzes", "visszajelzés", "vj", "fb"],
    categories: "Általános",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "<szöveg>",
    run: async(bot, message, args) => {
        const senpai = bot.users.cache.get("864583234158460938")
        const feedback = args.join(" ")

        if (!feedback) {
            message.channel.send({content: `Nem írtad le, hogy mit üzensz a fejlesztőnek!`})
        }
        let feedbackembed = new Discord.MessageEmbed()
        .setTitle(`Új visszajelzés!`)
        .setColor("RED")
        .setAuthor(message.author.tag)
        .setThumbnail(message.author.displayAvatarURL())
        .addFields(
            {name: 'Üzenet küldő:', value: `${message.author.tag}`},
            {name: 'ID:', value: `${message.author.id}`},
            {name: 'Szerver:', value: `${message.guild.name}`},
            {name: 'Visszajelzés:', value: `${feedback}`}
        )
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();

        senpai.send({ embeds: [feedbackembed] })

        message.author.send({ content: `Szia ${message.author.tag}! Visszajelzésedet elküldtük.  Köszönöm a visszajelzésedet!` });
    }
}