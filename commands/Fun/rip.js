const Discord = require(`discord.js`);
const Fs = require('fs');

module.exports = {
    name: "rip",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Küld egy képet amin az van, hogy RIP",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
        message.channel.send({content: "https://i.imgur.com/w3duR07.png"})
    }
}