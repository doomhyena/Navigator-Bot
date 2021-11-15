const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ["av"],
    categories: "Képek",
    permissions: "",
    description: "Lekréi a profilképet",
    cooldown: "",
    usage: "<@felhasználó>",
    run: async (bot, message, args) => {
        let mentionedUser = message.mentions.users.first() || message.author
        

        let aEmbed = new Discord.MessageEmbed()
        aEmbed.setImage(mentionedUser.displayAvatarURL())
        aEmbed.setColor("GREEN")
        aEmbed.setTitle(`${mentionedUser.username} avatárja`)
        aEmbed.setDescription(`[Link](${mentionedUser.displayAvatarURL()})`)
        aEmbed.setFooter(`${bot.user.username}`, bot.user.displayAvatarURL({ dynamic: true }));
        aEmbed.setTimestamp()

        message.channel.send({embeds: [aEmbed]});

    }
}