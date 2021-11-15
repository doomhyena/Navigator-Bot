const Discord = require(`discord.js`);
const Fs = require('fs');

module.exports = {
    name: "penis",
    aliases: ["pp", "pénisz", "e-pénisu"],
    categories: "Fun",
    permissions: "",
    description: "Megmérheted az E-pöcsöd!",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
        let replies = [`8D`,`8=D`, `8==D`, `8===D`, `8====D`, `8=====D`, `8======D`, `8=======D`, `8========D`, `Nem látom, hogy mekkora`, `Túl nagy, hogy megmutassam!`]
        let result = Math.floor((Math.random() * replies.length));
    
        message.channel.send({content: `Neked ekkora péniszed van: \n${replies[result]}`})
    }
}