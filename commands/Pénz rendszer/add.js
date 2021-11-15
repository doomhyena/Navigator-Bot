const Discord = require(`discord.js`);

module.exports = {
    name: "add",
    aliases: [""],
    categories: "Pénz rendszer",
    permissions: "",
    description: "Hozzá tudsz adni pénzt a pénztárcádhoz.",
    cooldown: 10,
    usage: "<összeg>",
    run: async(bot, message, args) => {
        const member = message.mentions.members.first() || message.member;

        bot.add(member.id, parseInt(args[0]));

        message.channel.send({content:'Az összeget sikeresen hozzáadtuk az egyenlegedhez!'})
    }
}