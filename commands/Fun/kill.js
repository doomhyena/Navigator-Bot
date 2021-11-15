const Discord = require(`discord.js`);
const Fs = require('fs');

module.exports = {
    name: "kill",
    aliases: ["ölés"],
    categories: "Fun",
    permissions: "",
    description: "Lölj le valakit vagy magadat!",
    cooldown: "",
    usage: "<@felhasználó>",
    run: async (bot, message, args) => {
        let love = Math.round(Math.random() * 100);
        let hugUser = message.guild.member(
         message.mentions.users.first() || message.guild.members.cache.get(args[0])
            );
          if (!hugUser)
               return message.channel.send(
                "Jelölj meg valakit, hogy fejbelődd!"
            );
          if (hugUser.id === message.author.id)
              return  message.channel.send(
                "Öngyilkos lettél. :/"
            );
            const embed = new Discord.MessageEmbed()
    
           .setColor("fc0303")
           .setFooter(bot.user.username, bot.user.displayAvatarURL())
           .setTimestamp()
           .setDescription(
             `**${message.author.username}** megharagudott **${message.mentions.users.first().username}**-ra/re és fejbelőtte.`
             );
        message.channel.send({embeds: [embed]})
    }
}