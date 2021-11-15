const Discord = require(`discord.js`);

module.exports = {
    name: "ping",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        message.reply({ content: "🏓 Pong!" }); 
    }
}