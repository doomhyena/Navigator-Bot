const Discord = require(`discord.js`);

module.exports = {
    name: "magasság",
    aliases: ["magassag","height"],
    categories: "",
    permissions: "",
    description: "Xitus mindent is tud. Még azt, hogy milyen magas vagy!",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let sum = Math.floor(Math.random() * 190 ) + 100;

        let iqembed = new Discord.MessageEmbed()
        .setTitle(`Magasság mérő`)
        .setColor(`RANDOM`)
        .addField(`Magasságod`, `${sum}cm vagy!`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        
        message.channel.send({embeds: [iqembed]})
    }
}