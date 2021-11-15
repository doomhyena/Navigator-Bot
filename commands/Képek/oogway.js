const Discord = require(`discord.js`);

module.exports = {
    name: "oogway",
    category: "Képek",
    usage: "<szöveg>",
    description: "",
    aliases: [""],

    name: "oogway",
    aliases: [""],
    categories: "Képek",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "<szöveg>",
    run: async(bot, message, args) => {
        let text = args.slice(0).join(" ");

        if (!text)
        return message.channel.send("Írj egy szöveget amit megtudod jeleníteni!");

        let final = "https://luminabot.xyz/api/image/oogway?text=" + encodeURIComponent(text)
        const attach = new Discord.MessageAttachment(final, 'oogway.png', null)

        message.channel.send({content: attach})
    }
}