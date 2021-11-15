const Discord = require(`discord.js`);

module.exports = {
    name: "icon",
    category: "Képek",
    description: "Lekéri a szerver képét",
    usage: "",
    run: async(bot, message, args) => {
        message.channel.send({content: message.guild.iconURL()})
    }
}