const Discord = require(`discord.js`);
const { RepeatMode } = require('discord-music-player');

module.exports = {
    name: "skip",
    aliases: ["sk"],
    categories: "Zene",
    permissions: "",
    description: "Tovább lépteti a jelenlegi zenét",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        guildQueue.skip();
    }
}