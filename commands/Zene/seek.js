const Discord = require(`discord.js`);
const { RepeatMode } = require('discord-music-player');

module.exports = {
    name: "seek",
    aliases: ["s"],
    categories: "Zene",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        guildQueue.seek(parseInt(args[0]) * 1000);
    }
}