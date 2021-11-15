const Discord = require(`discord.js`);

module.exports = {
    name: "jail",
    category: "Képek",
    usage: "",
    description: "Börtönös képet csinál a profilképedből",
    aliases: [""],
    run: async(bot, message, args) => {
        let link = `https://some-random-api.ml/canvas/jail/?avatar=${message.author.avatarURL({ format: 'png' })}`
        let attachment = new Discord.MessageAttachment(link, 'jail.png');
        let embed = new Discord.MessageEmbed()
        .setTitle(`Profilkép`)
        .setColor(`RANDOM`)
        .attachFiles(attachment)
        .setImage('attachment://jail.png')
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send(embed)
    }
}