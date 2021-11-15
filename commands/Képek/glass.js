const Discord = require(`discord.js`);

module.exports = {
    name: "glass",
    aliases: [""],
    categories: "Képek",
    permissions: "",
    description: "Üveg effektet rak a profilképedre",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let link = `https://some-random-api.ml/canvas/glass/?avatar=${message.author.avatarURL({ format: 'png' })}`
        let attachment = new Discord.MessageAttachment(link, 'glass.png');
        let embed = new Discord.MessageEmbed()
        .setTitle(`Profilkép`)
        .setColor(`RANDOM`)
        .attachFiles(attachment)
        .setImage('attachment://glass.png')
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({embeds: [embed]})
    }
}