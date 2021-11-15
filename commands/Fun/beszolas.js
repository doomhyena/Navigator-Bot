const Discord = require(`discord.js`);

module.exports = {
    name: "beszolas",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Be tudsz szólni valakinek.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        message.channel.send({content: 'hehe'})
    }
}