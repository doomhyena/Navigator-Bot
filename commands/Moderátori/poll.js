const Discord = require(`discord.js`);

module.exports = {
    name: "poll",
    aliases: [""],
    categories: "Moderátori",
    permissions: "Üzenetek kezelése",
    description: "Szavazást tudsz indítani",
    cooldown: "",
    usage: "<Ide azt írod amit meg akarsz szavaztatni>",
    run: async(bot, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send({content: `Nincs jogod ezt a parancsot használni!`});

        let msgxd = message.content.split(' ').slice(1).join(' ')
        let channel = "884025935899271211"
        let pollembed = new Discord.MessageEmbed()

        .setTitle("Szavazás")
        .setAuthor(message.author.tag)
        .setDescription(`${msgxd}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();

        const mittomen = channel.send({embeds: [pollembed]})
                ;(await mittomen).react("✅")
                ;(await mittomen).react("❌")
        channel.send({content: '@everyone'})
    }
}