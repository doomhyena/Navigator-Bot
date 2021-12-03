const Discord = require(`discord.js`);
const db = require('../../models/warns')

module.exports = {
    name: "warn",
    aliases: ["warning"],
    categories: "Moderátroi",
    permissions: "Tagok kirúgása",
    description: "Ezzel a paranccsal tudsz figyelmeztetni bárkit is.",
    cooldown: "",
    usage: "<@felhasználó> <indok>",
    run: async(bot, message, args) => {
        if(!message.member.permission.has('KICK_MEMBERS')) return message.channel.send({content: 'Nincs jogod használni ezt a parancsot!'})
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send({content: "A felhasználó nem található!"})
        const reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send({content: "Nem adtál meg indokot!"})
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    guildid: message.guild.id,
                    user : user.user.id,
                    content : [
                        {
                            moderator : message.author.id,
                            reason : reason
                        }
                    ]
                })
            } else {
                const obj = {
                    moderator: message.author.id,
                    reason : reason
                }
                data.content.push(obj)
            }
            data.save()
        });
        let embed = new Discord.MessageEmbed()
        .setTitle("Figyelmeztetve lettél!")
        .setColor("#FF0000")
        .addFields(
            {
            name: '**Figyelmeztetés:**',
            value: `Figyelmeztetve lettél ${message.author.tag} által`,
            inline: true
          },
          {
            name: '**Indok:**',
            value: `**${reason}**, indokkal`,
            inline: true
          },
          {
            name: '**Szerver:**',
            value: `${message.guild.name}, szerveren`,
            inline: true
          },
          )
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        user.send({ embeds: [embed] });

        let embed2 = new Discord.MessageEmbed()
        .setTitle("Újabb figyelmeztetés!")
        .setColor("#FF0000")
        .setDescription(`**${user}** figyelmeztetve lett, **${reason}** indokkal.`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({ embeds: [embed2] });
    }
}