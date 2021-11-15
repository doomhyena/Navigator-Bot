const Discord = require(`discord.js`);

module.exports = {
    name: "válá",
    category: "",
    usage: "<@felhasználó>",
    description: "El tudsz válni azzal akivel összeházasodtál",
    aliases: [""],
    run: async(bot, message, args) => {
        let xd = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        if (!xd)
        return message.channel.send({conent: ":x: Helytelen használat! Helyes használat: =házasság <@felhasználó>"});

        let embed = new Discord.MessageEmbed()
        .setTitle(`💍Házasságtörés💍`)
        .setColor(`RANDOM`)
        .addField(`A boldog pár elvált, ez mind: `, `${xd} hibája!`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({embeds: [embed]})

    }
}