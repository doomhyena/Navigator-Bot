const Discord = require(`discord.js`);

module.exports = {
    name: "wasted",
    aliases: [""],
    categories: "Képek",
    permissions: "",
    description: "GTA:SA-s Wasted feliratú képet csinál a profilképedből",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let link = `https://some-random-api.ml/canvas/wasted/?avatar=${message.author.avatarURL({ format: 'png' })}`
        let attachment = new Discord.MessageAttachment(link, 'wasted.png');
        let embed = new Discord.MessageEmbed()
        .setTitle(`Profilkép`)
        .setColor(`RANDOM`)
        .attachFiles(attachment)
        .setImage('attachment://wasted.png')
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({embeds: [embed]})
    }
}