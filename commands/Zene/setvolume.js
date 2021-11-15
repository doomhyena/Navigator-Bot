const Discord = require(`discord.js`);
const { RepeatMode } = require('discord-music-player');

module.exports = {
    name: "setvolume",
    aliases: ["sv"],
    categories: "Zene",
    permissions: "",
    description: "Be tudod állítani a hangerőt.",
    cooldown: "",
    usage: "<hangerő>",
    run: async(bot, message, args) => {
        guildQueue.setVolume(parseInt(args[0]));
    }
}