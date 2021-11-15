const Discord = require(`discord.js`);

module.exports = {
    name: "jóslás",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Magdi a jósnő visszatért.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let replies = [`Megkapod a jobb jegyet az iskolában`,`A gyerekeid egészségesek lesznek`, 
        `Az egyik családtagodra rossz jövő vár`, `Befolyásos ember leszel`, 
        `Rövid időn belül meggazdaogsz`, `Sikeres életed lesz`]
        let result = Math.floor((Math.random() * replies.length));

        let jósoltmbed = new Discord.MessageEmbed()
        .setTitle(`Jóslás`)
        .setColor(`RANDOM`)
        .addField(`Jóslat`, `${replies[result]}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        
        message.channel.send({embeds: [jósoltmbed]})
    }
}