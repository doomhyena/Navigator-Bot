const Discord = require(`discord.js`);

module.exports = {
    name: "missionpassed",
    aliases: ["mission-passed"],
    categories: "Képek",
    permissions: "",
    description: "GTA:SA-s Mission Passed feliratú képet csinál a profilképedből",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let link = `https://some-random-api.ml/canvas/passed/?avatar=${message.author.avatarURL({ format: 'png' })}`
        let attachment = new Discord.MessageAttachment(link, 'passed.png');
        
        let embed = new Discord.MessageEmbed()
        .setTitle(`Profilkép`)
        .setColor(`RANDOM`)
        .attachFiles(attachment)
        .setImage('attachment://passed.png')
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({embeds: [embed]});
    }
}