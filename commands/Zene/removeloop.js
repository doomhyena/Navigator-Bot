const Discord = require(`discord.js`);
const { RepeatMode } = require('discord-music-player');

module.exports = {
    name: "removeloop",
    aliases: ["rl"],
    categories: "Zene",
    permissions: "",
    description: "Leállítja a folyamatos lejátszást.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        guildQueue.setRepeatMode(RepeatMode.DISABLED);
    }
}