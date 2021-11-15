const Discord = require(`discord.js`);

module.exports = {
    name: "triggered",
    aliases: ["trig"],
    categories: "Képek",
    permissions: "",
    description: "Triggeleri a képet",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {

        let link = `https://some-random-api.ml/canvas/triggered/?avatar=${message.author.avatarURL({ format: 'png' })}`
        let attachment = new Discord.MessageAttachment(link, 'triggered.gif');
        
        let embed = new Discord.MessageEmbed()
        .setTitle(`Profilkép`)
        .setColor(`RANDOM`)
        .attachFiles(attachment)
        .setImage('attachment://triggered.gif')
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({embeds: [embed]})
    }
}