const Discord = require("discord.js");

module.exports = {
    name: "hug",
    aliases: ["ölelés"],
    categories: "Fun",
    permissions: "",
    description: "Megtudsz valakit ölelni",
    cooldown: "",
    usage: "<@felhasználó>",
    run: async (bot, message, args) => {

        let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

          if (!hugUser)
               return message.channel.send({content: "Jelölj meg valakit, hogy meg tudd ölelni!"});
          if (hugUser.id === message.author.id)
              return  message.channel.send({content: "Magadat nem tudod megölelni. :/"});
            const embed = new Discord.MessageEmbed()
    
           .setColor("fc0303")
           .setFooter(bot.user.username, bot.user.displayAvatarURL())
           .setTimestamp()
           .setDescription(`**${message.author.username}** megölelte **${message.mentions.users.first().username}**-t!`);
        message.channel.send({embeds: [embed]})
    }
}