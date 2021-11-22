const Discord = require(`discord.js`);

module.exports = {
    name: "yourping",
    aliases: [""],
    categories: "Általános",
    permissions: "",
    description: "Megtudod nézni a pingedet",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let yourping = new Date().getTime() - message.createdTimestamp
        let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag} pingje`)
        .setColor(`RED`)
        .addField(`${message.author.username} pingje:`, `${yourping}ms`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();

        message.channel.send({ embeds: [embed] })
    }
}