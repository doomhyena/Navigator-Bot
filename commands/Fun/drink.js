const Discord = require(`discord.js`);

module.exports = {
    name: "drink",
    aliases: ["ivás", "ivászat"],
    categories: "",
    permissions: "",
    description: "Igyál amennyit szeretnél!",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {

        let drinkembed = new Discord.MessageEmbed()
        .setTitle(`Alkoholos ital`)
        .setColor(`RANDOM`)
        .setDescription(`**${message.author.username}** megcsókolta **${message.mentions.users.first().username}**-t!`)
        .setImage(`https://images-ext-1.discordapp.net/external/A7UiRNZWUMTt0aqRJoBnHlf76-PpD2dRLRWukCr4a7w/https/media.giphy.com/media/3osxYfo1Y0NtKdYJi0/giphy.gif`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        
        message.channel.send({embeds: [drinkembed]})
    }
}