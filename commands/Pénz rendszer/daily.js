const Discord = require(`discord.js`);
const Fs = require('fs');

module.exports = {
    name: "daily",
    aliases: [""],
    categories: "Pénz rendszer",
    permissions: "",
    description: "Napi pénz jutattás",
    cooldown: 1000 * 60 * 60 * 24,
    usage: "",
    run: async (bot, message, args) => {
        const coins = Math.floor(Math.random() * 2000) + 1;

        message.channel.send({content: `A napi juttatásodat megkaptad! **${coins}** Botérmét kaptál!`})
        bot.add(message.author.id, coins)
    }
}