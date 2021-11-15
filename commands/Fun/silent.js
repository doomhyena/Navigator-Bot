const Discord = require(`discord.js`);
const mongoose = require('mongoose');

module.exports = {
    name: "silent",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Tudsz suttogni, mert miért ne.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        message.delete();
        const alma = args.join(" ");
        const upped = alma.toLowerCase();
        message.channel.send({content: `${message.author.username} nem tud beszélni, elment a hangja, ezért ezt suttogja: ${upped}`})
    }
}