const Discord = require(`discord.js`);

module.exports = {
    name: "length",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Megmondja hány betűből áll a mondatod",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        const alma = args.join(" ");
        if(!alma) return message.reply({content: "Te nem írtál semmit!"})

        message.channel.send({content: `Az üzeneted ilyen hosszú: **${alma.length}**`})
    }
}