const Discord = require(`discord.js`);
const { RepeatMode } = require('discord-music-player');

module.exports = {
    name: "play",
    aliases: ["p"],
    categories: "Zene",
    permissions: "",
    description: "Zene lejátszó parancs.",
    cooldown: "",
    usage: "<zenecím>",
    run: async(bot, message, args) => {
        let queue = bot.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.play(args.join(' ')).catch(_ => {
            if(!guildQueue)
                queue.stop();
        });
    }
}