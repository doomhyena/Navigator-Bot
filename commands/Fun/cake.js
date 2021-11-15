const Discord = require(`discord.js`);

module.exports = {
    name: "cake",
    aliases: ["torta"],
    categories: "Fun",
    permissions: "",
    description: "Tortát kapsz az arcodba",
    cooldown: "",
    usage: "<@felhasználó>",
    run: async(bot, message, args) => {
        let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        if (!hugUser)
         return message.channel.send({content: "Jelölj meg valakit, hogy arcon tudd dobni egy tortával!"});
        if (hugUser.id === message.author.id)
         return  message.channel.send({content: "Magadat nem tudod megdobni tortával!. :/"});

        let embed = new Discord.MessageEmbed()
        .setTitle(`Torta`)
        .setColor(`RANDOM`)
        .setDescription(`**${message.author.username}** tortát nyomott **${message.mentions.users.first().username}** arcába!`)
        .setImage(`https://tenor.com/view/noah-sacompany-sa-happy-birthday-gif-15023920`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send({embeds: [embed]})
    }
}