const Discord = require(`discord.js`);

module.exports = {
    name: "notification",
    aliases: ["bejelentés", "bejelentes"],
    categories: "Moderátori",
    permissions: "Adminisztrátor",
    description: "Bejelentéseket tudsz tenni",
    cooldown: "",
    usage: "<Szöveg>",
    run: async(bot, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send({content: 'Nincs meg a megfelelő jogosultságod ehhez a parancsot!'});
        let msgxd = message.content.split(' ').slice(1).join(' ')
        let bejelentesembed = new Discord.MessageEmbed()

            .setTitle("Bejelentés")
            .setAuthor(message.author.tag)
            .setDescription(`${msgxd}`)
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
            .setTimestamp();

                message.channel.send({content: "@everyone"})
            const mittomen = message.channel.send({embeds: [bejelentesembed]})
    }
}