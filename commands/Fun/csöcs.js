const Discord = require(`discord.js`);

module.exports = {
    name: "csöcs",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Megmutatja az E-csöcsöd",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let replies = [`(.)(.)`,`(‏‏‎ ‎ . ‏‏‎ ‎) (‏‏‎ ‎ . ‏‏‎ ‎)`, `( . )( . )`, `( . ‏‏‎ ‎)(‏‏‎ ‎ . )`, `Deszka vagy!`, `Túl nagy, hogy megmutassam!`]
        let result = Math.floor((Math.random() * replies.length));

        let csecsembed = new Discord.MessageEmbed()
        .setTitle(`Méret`)
        .setColor(`RANDOM`)
        .addField(`E-Csöcsöd mérete:`, `${replies[result]}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        
        message.channel.send({embeds: [csecsembed]})
    }
}