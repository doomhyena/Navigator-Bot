const Discord = require(`discord.js`);

module.exports = {
    name: "házasság",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "összetudsz házasodni valakivel",
    cooldown: "",
    usage: "<@felhasználó>",
    run: async(bot, message, args) => {
        let xd = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        if (!xd)
        return message.channel.send({content: ":x: Helytelen használat! Helyes használat: =házasság <@felhasználó>"});

        let embed = new Discord.MessageEmbed()
        .setTitle(`💍 Házasságkötés 💍`)
        .setColor(`RANDOM`)
        .addField(`Összeházasodtál a boldog pároddal:`, `${xd}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({embeds: [embed]})

    }
}