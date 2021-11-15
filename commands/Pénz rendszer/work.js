const Discord = require(`discord.js`);
const Fs = require('fs');

module.exports = {
    name: "work",
    aliases: ["rmv"],
    categories: "Pénz rendszer",
    permissions: "",
    description: "Ezzel a paranccsal tudsz dolgozni",
    cooldown: 1000 * 60 * 60 * 2,
    usage:"",
    run: async (bot, message, args) => {

        const munka =['Programozó', 'Videós', 'Animátor', 'Doktor']
        const munkaindex = Math.floor(Math.random() * munka.length)
        const coins = Math.floor(Math.random() * 200) + 1;

        message.channel.send({content: `Te **${munka[munkaindex]}ként** dolgoztál és  **${coins}** botérmét kaptál!`})
        bot.add(message.author.id, coins);
    }
}