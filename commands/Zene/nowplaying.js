const Discord = require(`discord.js`);
const { RepeatMode } = require('discord-music-player');

module.exports = {
    name: "nowplaying",
    aliases: ["np"],
    categories: "Zene",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        messsage.channel.send({content: `Now playing: ${guildQueue.nowPlaying}`});
    }
}