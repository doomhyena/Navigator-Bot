const Discord = require(`discord.js`);
const db = require('../../models/warns')

module.exports = {
    name: "warns",
    aliases: ["warninhs"],
    categories: "Egyéb",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "<@felhasználó>",
    run: async(bot, message, args) => {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
                let embed = new Discord.MessageEmbed()
                .setTitle(`${user.user.tag}'s warns`)
                .setColor("#FF0000")
                .setDescription(
                    data.content.map(
                        (w, i) => 
                        `\`${i + 1}\` | Moderator : ${message.guild.members.cache.get(w.moderator).user.tag}\nReason : ${w.reason}`
                    )
                )
                .setFooter(bot.user.username, bot.user.displayAvatarURL())
                .setTimestamp();
                
                message.channel.send({ embeds: [embed] });
            } else {
                message.channel.send('A felhasználóról nincs semmilyen adat!')
            }

        })
    }
}