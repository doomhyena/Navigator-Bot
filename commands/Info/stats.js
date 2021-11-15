const Discord = require(`discord.js`);

module.exports = {
    name: "stats",
    aliases: ["státusz", "status"],
    categories: "Info",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`**📁 Statisztika:**`)
        .setColor(`RANDOM`)
        .addField("**👥 Felhasználók:**", `${bot.users.cache.size}`, true)
        .addField("**📁 Csatornák:**", `${bot.channels.cache.size}`, true)
        .addField("**📁 Szerverek:**", `${bot.guilds.cache.size}`, true)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({ embeds: [embed] });
    }
}