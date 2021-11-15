const Discord = require(`discord.js`);
const Fs = require('fs');

module.exports = {
    name: "embedsay",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Kiírja embedben amit te írsz",
    cooldown: "",
    usage: "<szöveg>",
    run: async (bot, message, args) => {
        message.delete()
    
        if (!args[0]) return message.channel.send({content: "Te semmit nem írtál!"})
        let embed = new Discord.MessageEmbed();
        embed.setTitle(`EmbedSay`);
        embed.setColor("BLUE")
        embed.setDescription(args.join(" "));
        embed.setFooter(bot.user.username, bot.user.displayAvatarURL())
        embed.setTimestamp();
        message.channel.send({embeds: [embed]});
    }
}