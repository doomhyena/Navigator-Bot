const Discord = require(`discord.js`);

module.exports = {
    name: "unlock",
    aliases: [""],
    categories: "Moderátori",
    permissions: "Csatornák kezeláse",
    description: "Ezzel a parancsal tudod feloldani a lezárást az adott rangnál. Ha feloldottad akkor a ranggal rendelkezőek tudnak írni a csatornába!",
    cooldown: "",
    usage: "<#csatorna> <rang ID>",
    run: async(bot, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply({content: "Nincs megfelelő jogsultságod a használatához!"})
        const channel = message.mentions.channels.first()
        if(!channel) return message.reply({content: "Helytelen használat! Használat: =unlock <#csatorna>  <rang ID>."})
        const roletofind = args.slice(1).join(" ")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if(!role) return message.reply({content: "Helytelen használat! Használat: =unlock <#csatorna>  <rang ID>."})


        let embed = new Discord.MessageEmbed()
        .setTitle(`Csatorna feloldva!`)
        .setColor(`RED`)
        .setDescription(`Ez a csatorna fel lett oldva ${message.author.tag} által`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp()
        
        channel.updateOverwrite(role, {
            SEND_MESSAGES: true
        })        
        await channel.send({embeds: [embed]})
    }
}