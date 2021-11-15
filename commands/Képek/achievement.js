const Discord = require(`discord.js`);

module.exports = {
    name: "achievement",
    aliases: ["ach"],
    categories: "Képek",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "<szöveg>",
    run: async(bot, message, args) => {
        const text = args.join("+");
        if(!text) return message.channel.send("**Légy szíves írj szöveget!**")
        let embed = new Discord.MessageEmbed()

        .setTitle(`MineCraft achievement!`)
        .setColor(`RANDOm`)
        .setImage(`https://minecraftskinstealer.com/achievement/12/Achievement%20Get!/${text}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({embeds: [embed]})
    }
}