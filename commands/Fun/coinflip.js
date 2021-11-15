const Discord = require('discord.js');

module.exports = {
    name: "coinflip",
    catgory: "fun",
    description: "Random fej vagy írás játék",
    usage: "<Amiről képet szeretnél>",

    name: "coinflip",
    aliases: ["pénzdobás"],
    categories: "Fun",
    permissions: "",
    description: "Íres, fej játék",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {

              let replies = [`Fej`, `Írás`]
              let result = Math.floor((Math.random() * replies.length));
    
              message.channel.send({ content: `Az eredmény: **${replies[result]}**`});
    }
}