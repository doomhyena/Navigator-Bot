const Discord = require(`discord.js`);

module.exports = {
    name: "gay",
    category: "Képek",
    usage: "",
    description: "Szívárványos effektet rak a profilképedre",
    aliases: [""],

    name: "gay",
    aliases: [""],
    categories: "Képek",
    permissions: "",
    description: "Szívárványos effektet rak a profilképedre",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let link = `https://some-random-api.ml/canvas/gay/?avatar=${message.author.avatarURL({ format: 'png' })}`
        let attachment = new Discord.MessageAttachment(link, 'gay.png');
        let embed = new Discord.MessageEmbed()
        .setTitle(`Profilkép`)
        .setColor(`RANDOM`)
        .attachFiles(attachment)
        .setImage('attachment://gay.png')
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({embeds: [embed]})
    }
}