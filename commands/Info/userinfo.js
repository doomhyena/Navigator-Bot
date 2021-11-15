const Discord = require(`discord.js`);
const moment = require('moment');

module.exports = {
    name: "userinfo",
    aliases: ["ui", "whois", "who"],
    categories: "Info",
    permissions: "",
    description: "Megadja egy bizonyos felhasználó információit",
    cooldown: "",
    usage: "<@felhasználó>",
    run: async(bot, message, args) => {
        
                const felh = message.mentions.members.first() || message.member;
                let embed = new Discord.MessageEmbed()
                .setTitle('Felhasználó Adatai:')
                .setThumbnail(felh.displayAvatarURL())
                .setColor('BLUE')
                .addFields(
                    {
                        name: `**❯ Fióknév:**`,
                        value: `${felh.user.username}`,
                        inline: true
                    },
                    {
                        name: `**❯ Tag:**`,
                        value: `${felh.user.discriminator}`,
                        inline: true
                    },
                    {
                        name: `**❯ ID:**`,
                        value: `${felh.user.id}`,
                        inline: true
                    },
                    {
                        name: `**❯ Játékban:**`,
                        value: `${felh.presence.game  || 'Nem játszik semmivel.'}`,
                        inline: true
                    },
                    {
                        name: `**❯ Állapot:**`,
                        value: `${felh.presence.status}`,
                        inline: true
                    },
                    {
                        name: `**❯ Fiók létrejötte:**`,
                        value: `${moment(felh.user.createdTimestamp).format('LT')} ${moment(felh.user.createdTimestamp).format('LL')} ${moment(felh.user.createdTimestamp).fromNow()}`,
                        inline: true
                    },
                    {
                        name: `**❯ Csatlakozott a szerverhez:**`,
                        value: `${felh.joinedAt.toDateString()}`,
                        inline: true
                    },
                )
                .setFooter(bot.user.username, bot.user.displayAvatarURL())
                .setTimestamp();
                
                message.channel.send({ embeds: [embed] });
            
    }
}