const Discord = require(`discord.js`);
const { RepeatMode } = require('discord-music-player');

module.exports = {
    name: "playlist",
    aliases: ["pl"],
    categories: "Zene",
    permissions: "",
    description: "Kiírja a lejátszási listát",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.playlist(args.join(' ')).catch(_ => {
            if(!guildQueue)
                queue.stop();
        });
    }
}