const Discord = require(`discord.js`);

module.exports = {
    name: "szerverek",
    aliases: [""],
    categories: "Általános",
    permissions: "",
    description: "Kiírja, hogy a bot hány  szerveren van fent",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        message.reply({ content: `${bot.guilds.cache.size} szerveren van fent a bot!` })
    }
}