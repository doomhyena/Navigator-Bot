const Discord = require(`discord.js`);

module.exports = {
    name: "lock",
    aliases: [""],
    categories: "Moderátori",
    permissions: "Csatornák kezelése",
    description: "Csatornákat tudsz lezárlni azaz egy adott rangú emnber nem tud  majd odaírni",
    cooldown: "",
    usage: "<#csatorna> <rang ID>",
    run: async(bot, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply({content: "Nincs megfelelő jogsultságod a használatához!"})
        const channel = message.mentions.channels.first()
        if(!channel) return message.reply({content: "Helytelen használat! Használat: =lock <#csatorna>  <rang ID>."})
        const roletofind = args.slice(1).join(" ")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if(!role) return message.reply({content: "Helytelen használat! Használat: =lock <#csatorna>  <rang ID>."})


        let embed = new Discord.MessageEmbed()
        .setTitle(`Csatorna lezárva!`)
        .setColor(`RED`)
        .setDescription(`Ez a csatorna le lett zárolva ${message.author.tag} által`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp()
        
        channel.updateOverwrite(role, {
            SEND_MESSAGES: false
        })        
        await channel.send({embeds: [embed]})
    }
}