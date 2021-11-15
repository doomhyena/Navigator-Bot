const Discord = require(`discord.js`);

module.exports = {
    name: "szerverlista",
    category: "Bot",
    description: "Kiírja a szervereket",
    usage: "",
    run: async(bot, message, args) => {
        if(message.author.id !== "864583234158460938")  return message.channel.send({content: 'Nem te vagy a tulajdonos -_-'})
        bot.guilds.cache.forEach((guild) => {
            message.channel.send ({content: `\n**${guild.name}**\n |Tagok: ${guild.memberCount}\n |Tulajdonos: ${guild.owner}`})

        })
    }
}