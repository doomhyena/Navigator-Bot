const Discord = require(`discord.js`);

module.exports = {
    name: "remove",
    aliases: ["rmv"],
    categories: "Pénz rendszer",
    permissions: "",
    description: "Hozzá tudsz adni pénzt a pénztárcádhoz.",
    cooldown: "",
    usage:"<összeg>",
    run: async(bot, message, args) => {
        const member = message.mentions.members.first() || message.member;

        bot.remove(member.id, parseInt(args[0]));

        message.channel.send({content: 'Az összeget sikeresen levontuk az egyenlegedből!'});
    }
}