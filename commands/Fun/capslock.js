const Discord = require(`discord.js`);

module.exports = {
    name: "capslock",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Nagy betűkkel írja ki azt amit te",
    cooldown: "",
    usage: "<szöveg>",
    run: async(bot, message, args) => {
        message.delete();
        const alma = args.join(" ");
        const upped = alma.toUpperCase();
        message.channel.send({content: `${message.author.username} ideges, és csak annyit szeretne mondani, hogy: ${upped}`})
    }
}