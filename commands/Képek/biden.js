const Discord = require(`discord.js`);

module.exports = {
    name: "biden",
    aliases: [""],
    categories: "Képek",
    permissions: "",
    description: "Biden Tweet",
    cooldown: "",
    usage: "<szöveg>",
    options: [
        {
            name: 'text',
            description: 'The Text To Tweet',
            type: 'STRING',
            required: true
        }
    ],
    run: async(bot, message, args) => {
        const text = args.join(" ")
        let kep = `https://api.popcat.xyz/biden/?text=${encodeURIComponent(text)}`
        let attachment = new Discord.MessageAttachment(kep, 'biden.png');

        let uwu = new Discord.MessageEmbed()
        .setTitle(`Biden éppen Twitterezik!`)
        .setColor(`RANDOM`)
        .attachFiles(attachment)
        .setImage('attachment://biden.png')
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({embeds: [uwu]})
    }
}