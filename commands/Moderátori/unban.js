const Discord = require(`discord.js`);
const Fs = require('fs');

module.exports = {
    name: "unban",
    aliases: ["ub"],
    categories: "Moderátori",
    permissions: "Emberek kitiltása",
    description: "Feloldja a kitiltást",
    cooldown: "",
    usage: "<Felhasználó ID> <indok>",
    run: async (bot, message, args) => {
        if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send({content: 'Nincs hozzá a megfelelő jogod!'}).then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send({content: 'Légyszives add meg, hogy kinek a kitiltását akarod feloldani!'}).then(m => m.delete({ timeout: 5000 }));
    
        let member;
    
        try {
            member = await bot.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send({content: 'Nem találom a felhasználót!'}).then(m => m.delete({ timeout: 5000 }));
        }
    
        const reason = args[1] ? args.slice(1).join(' ') : 'Nincs indok';
    
        let embed = new Discord.MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));
    
        message.guild.fetchBans().then( bans => {
    
            const user = bans.find(ban => ban.user.id === member.id );
    
            if (user) {
                embed.setTitle(`Feloldottuk a kitiltását ${user.user.tag}-nak/nek!`)
                    .setColor('#00ff00')
                    .addField('Felhasználó ID:', user.user.id, true)
                    .addField('Felhasználó Tag:', user.user.tag, true)
                    .addField('A ban indoka:', user.reason != null ? user.reason : 'no reason')
                    .addField('A ban feloldásának indoka:', reason)
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`${member.tag} nincsen bannolva!`)
                    .setColor('#ff0000')
                message.channel.send({embeds: [embed]})
            }
    
        }).catch(e => {
            console.log(e)
            message.channel.send({content: 'Valami nincsn rendben. :/'})
        });
    }
}