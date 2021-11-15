const Discord = require(`discord.js`);

module.exports = {
    name: "credit",
    aliases: ["botkeszito", "botkészítő"],
    categories: "Általános",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        message.reply({content: 'A bot eredeti fejlesztője és tulajdonosa/Credit: FLUK3#3172'})
    }
}