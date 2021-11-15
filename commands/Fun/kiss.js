const Discord = require("discord.js");

module.exports = {
    name: "kiss",
    aliases: ["csók"],
    categories: "Fin",
    permissions: "",
    description: "Megtudsz valakit csókolni",
    cooldown: "",
    usage: "<@felhasználó>",
    run: async (bot, message, args) => {

        let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        let kissgif = [
            'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif',
            'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
            'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
            'https://media.giphy.com/media/oHZPerDaubltu/giphy.gif',
            'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
            'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
            'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
            'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif']
        let random_kissgif = Math.floor(Math.random()*kissgif.length)

          if (!hugUser)
               return message.channel.send("Jelölj meg valakit, hogy meg tudd csókolni!");
          if (hugUser.id === message.author.id)
              return  message.channel.send("Magadat nem tudod megcsókolni. :/");

           let embed = new Discord.MessageEmbed()
           .setTitle(`Csók`)
           .setColor(`RANDOM`)
           .setDescription(`**${message.author.username}** megcsókolta **${message.mentions.users.first().username}**-t!`)
           .setImage(`${kissgif[random_kissgif]}`)
           .setFooter(bot.user.username, bot.user.displayAvatarURL())
           .setTimestamp();

           message.channel.send({embeds: {embed}})
    }
}