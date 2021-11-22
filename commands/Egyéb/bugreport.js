const Discord = require(`discord.js`);

module.exports = {
    name: "bugreport",
    aliases: ["bug", "hiba", "hibajelentés", "hibajelentes"],
    categories: "Általános",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "<Hiba amit a botban találtál>",
    run: async(bot, message, args) => {
        const senpai = bot.users.cache.get("864583234158460938")
        const bug = args.join(" ")

        if (!bug) {
            message.channel.send({content: `Nem írtad le, hogy melyik parancs működik hibásan!`})
        }
        let bugembed = new Discord.MessageEmbed()
        .setTitle(`Új bug jelentés!`)
        .setColor("RED")
        .setAuthor(message.author.tag)
        .setThumbnail(message.author.displayAvatarURL())
        .addFields(
            {name: 'Üzenet küldő:', value: `${message.author.tag}`},
            {name: 'ID:', value: `${message.author.id}`},
            {name: 'Szerver:', value: `${message.guild.name}`},
            {name: 'Bug:', value: `${bug}`}
        )
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();

        senpai.send({ embeds: [bugembed] })

        message.author.send({ content: `Szia ${message.author.tag}! Bug jelentésedet elküldtük. Nemsokára javításra kerül így türelmedet kérem! Köszönöm a visszajelzésedet!` });
    }
}