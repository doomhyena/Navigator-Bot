const Discord = require(`discord.js`);

module.exports = {
    name: "comrade",
    aliases: [""],
    categories:"Képek",
    permissions: "",
    description: "Szovjet zászlós képet csinál a profilképedből",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let link = `https://some-random-api.ml/canvas/comrade/?avatar=${message.author.avatarURL({ format: 'png' })}`
        let attachment = new Discord.MessageAttachment(link, 'comrade.png');
        let embed = new Discord.MessageEmbed()
        .setTitle(`Profilkép`)
        .setColor(`RANDOM`)
        .attachFiles(attachment)
        .setImage('attachment://comrade.png')
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({embeds: [embed]})
    }
}