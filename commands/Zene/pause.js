const Discord = require(`discord.js`);
const { RepeatMode } = require('discord-music-player');

module.exports = {
    name: "pause",
    aliases: ["ps"],
    categories: "Zene",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        guildQueue.setPaused(true);
    }
}