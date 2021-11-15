const Discord = require("discord.js");

module.exports = {
    name: "say",
    catgory: "Fun",
    description: "Leírja azt amit te",
    usage: "<Szöveg>",
    run: async (bot, message, args) => {
        message.delete()
    
        if (!args[0]) return message.channel.send("Te semmit nem írtál!")
        message.channel.send({content: args.join(" ")})
    }   
}