const Discord = require(`discord.js`);

module.exports = {
    name: "changemymind",
    category: "Képek",
    usage: "<szöveg>",
    description: "",
    aliases: [""],
    run: async(bot, message, args) => {
        const text = args.slice(0).join(" ");

        if (!text)
        return message.channel.send("Írj egy szöveget amit megtudod jeleníteni!");

        const finalLink = `https://api.leoapi.xyz/image/changemymind?text=${text}`
        const attach = new Discord.MessageAttachment(finalLink, 'mind.png', null)

        message.channel.send({content: attach})
    }
}