const Discord = require(`discord.js`);
const { RepeatMode } = require('discord-music-player');

module.exports = {
    name: "resume",
    aliases: ["r"],
    categories: "Zene",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        guildQueue.setPaused(false);
    }
}