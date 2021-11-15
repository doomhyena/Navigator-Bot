const Discord = require('discord.js');

module.exports = {
    name: "8ball",
    aliases: ["8b"],
    categories: "Fun",
    permissions: "",
    description: "Te kérdezeé a bot válaszol",
    cooldown: "",
    usage: "<Kérdés>",
    run: async (bot, message, args) => {
        let kerdes = args.slice(0).join(" ")

        if(!kerdes) {
            return message.channel.send({content: "Írd le a kérdésedet!"})
          } else {
              let replies = [`Igen`, `Nem`, `Talán`, `Nem mondom meg`, `Kérdezd meg másoktól`, `Ne zaklass! >;(`]
              let result = Math.floor((Math.random() * replies.length));
    
              message.channel.send({ content: `Kérdésed: ${kerdes}\n A bot válasza: ${replies[result]}`});
          }
    }
}