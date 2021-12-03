const Discord = require(`discord.js`);
const Schema = require('../../models/notification');

module.exports = {
    name: "notification",
    aliases: ["bejelentés", "bejelentes"],
    categories: "Moderátori",
    permissions: "Adminisztrátor",
    description: "Bejelentéseket tudsz tenni",
    cooldown: "",
    usage: "<Szöveg>",
    run: async(bot, message, args) => {
        Schema.findOne({ Guild: message.guild.id }, async (e, data) => {
            if (!data) return;
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send({content: 'Nincs meg a megfelelő jogosultságod ehhez a parancsot!'});
        let msgxd = message.content.split(' ').slice(1).join(' ')
        const ch = message.guild.channels.cache.get(data.Channel);
        let bejelentesembed = new Discord.MessageEmbed()

            .setTitle("Bejelentés")
            .setAuthor(message.author.tag)
            .setDescription(`${msgxd}`)
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
            .setTimestamp();

                ch.send({content: "@everyone"})
            const mittomen = ch.send({embeds: [bejelentesembed]})
        })
    }
}