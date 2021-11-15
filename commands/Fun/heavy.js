const Discord = require(`discord.js`);

module.exports = {
    name: "heavy",
    aliases: ["súly", "súlymérő"],
    categories: "Fun",
    permissions: "",
    description: "Megtudhatod, hogy a bot szerint hány kilogram vagy",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let sum = Math.floor(Math.random() * 230) + 1;

        let dogEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(`A te súlyod:`, `${sum}kg!`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp(); 
    
        message.channel.send({embeds: [dogEmbed]});
    }
}