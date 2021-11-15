const Discord = require("discord.js");
prefix = '='

module.exports = {
    name: "ship",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Just simping",
    cooldown: "",
    usage: "<@felhasználó 1> <@felhasználó 2>",
    run: async (bot, message, args) => {
        if (!args[0]) return message.channel.send({content: `Helytelen használat! Használat: ${prefix}ship <@név1> <@név2>`})
        if (!args[1]) return message.channel.send({content: `Helytelen használat! Használat: ${prefix}ship <@név1> <@név2>`})
        
        if (args[0] || args[1]) {
            let FirstUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            let SecondUser = message.mentions.members.first(-1) || message.guild.members.cache.get(args[1])
            let sum = Math.floor(Math.random() * 100 ) + 1;
        
            if (!FirstUser) return message.channel.send(`Nem találok ilyen nevű felhasználót! **${args[0]}**!`)
            if (!SecondUser) return message.channel.send(`Nem találok ilyen nevű felhasználót!**${args[1]}**!`)
            if (FirstUser || SecondUser) {
                const FirstUserSliced = FirstUser.user.username.slice(0, FirstUser.user.username.length / 2)
                const SecondUserSliced = SecondUser.map(user => { return user.user.username.slice(user.user.username.length / 2) })
                const SecondUserName = SecondUser.map(user => { return user.user.username })
        
                message.channel.send({content: `${sum}%-ban vagytok belezúgva egymásba! Gyereketek neve: **${FirstUserSliced}${SecondUserSliced}**`})
            }
          }
    } 
}