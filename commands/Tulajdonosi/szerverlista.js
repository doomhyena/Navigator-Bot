const Discord = require(`discord.js`);

module.exports = {
    name: "szerverlista",
    aliases: ["xsd"],
    categories: "Tulajdonosi",
    permissions: "",
    description: "Kiírja a szervereket",
    cooldown: "",
    usage: "",
    ownerOnly: true,
    run: async(bot, message, args) => {
        bot.guilds.cache.forEach((guild) => {
            message.channel.send({content: `\n**Szervernév:** ${guild.name}\n **Tagszám:** ${guild.memberCount}\n **Tulajdonos:** ${guild.owner}`})
        })
    }
}