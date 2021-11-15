const Discord = require(`discord.js`);

module.exports = {
    name: "kor",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Megmondja hány éves vagy.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let sum = Math.floor(Math.random() * 100) + 0;

        let korEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(`A te életkorod:`, `${sum}!`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp(); 
    
        message.channel.send(korEmbed);
    }
}