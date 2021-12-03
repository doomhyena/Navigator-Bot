const Discord = require(`discord.js`);
const PollSchema = require('../../models/poll');

module.exports = {
    name: "poll",
    aliases: ["szavazas"],
    categories: "Moderátori",
    permissions: "Üzenetek kezelése",
    description: "Szavazást tudsz indítani",
    cooldown: "",
    usage: "<szöveg>",
    run: async(bot, message, args) => {
        PollSchema.findOne({ Guild: message.guild.id }, async (e, data) => {
            if (!data) return;
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply({content:"Ehhez nincs jogod!"})

        const alma = args.join(" ");
        if(!alma) return message.reply({content: "Nem mondtad meg, hogy ,iről indítsak szavazást!"})
        const ch = message.guild.channels.cache.get(data.Channel);

        let embed = new Discord.MessageEmbed()
        .setTitle(`**Szavazás**`)
        .setColor("#00FF00")
        .addField(`${message.author.tag} szavazást indított!`, `${alma}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();

        ch.send({content: "@everyone"})
        ch.send({ embeds: [embed] }).then(async msg => {
            await msg.react('✔️')
            await msg.react('❌')
            });
        })
    }
}