const Discord = require(`discord.js`);
const { RepeatMode } = require('discord-music-player');

module.exports = {
    name: "stop",
    aliases: ["st"],
    categories: "Zene",
    permissions: "",
    description: "Leállítja a zenét.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        guildQueue.stop();
    }
}