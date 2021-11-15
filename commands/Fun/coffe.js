const Discord = require(`discord.js`);

module.exports = {
    name: "coffe",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Kávézni tudsz valakivel.",
    cooldown: "",
    usage: "<@felhasználó>",
    run: async(bot, message, args) => {
        let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        if (!hugUser)
         return message.channel.send({content: "Jelölj meg valakit, hogy elhívd egy kávéra!"});
        if (hugUser.id === message.author.id)
         return  message.channel.send({content: "Magadat nem tudod elhívni egy kávéra! :/"});

        let embed = new Discord.MessageEmbed()
        .setTitle(`Kávé`)
        .setColor(`RANDOM`)
        .setDescription(`**${message.author.username}** elhívta **${message.mentions.users.first().username}**-t egy kávéra!`)
        .setImage(`https://media.tenor.co/videos/22f0781e52a35e5eb9e3b507f1579477/mp4`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();

        message.channel.send({embeds: [embed]})
    }
}