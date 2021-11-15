const Discord = require("discord.js");
const randomPuppy = require('random-puppy');
module.exports = {
    name: "slap",
    catgory: "Fun",
    description: "Megtudsz valakit pofozni",
    usage: "<@felhasználó>",
    run: async (bot, message, args) => {

        let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

          if (!hugUser)
               return message.channel.send("Jelölj meg valakit, hogy meg tudd pofozni!");
          if (hugUser.id === message.author.id)
              return  message.channel.send("Magadat nem tudod megpofozni. :/");
            const embed = new Discord.MessageEmbed()
    
           .setColor("fc0303")
           .setFooter(bot.user.username, bot.user.displayAvatarURL())
           .setTimestamp()
           .setDescription(`**${message.author.username}** megpofozta **${message.mentions.users.first().username}**-t!`);
        message.channel.send({embeds: [embed]})
    }
}