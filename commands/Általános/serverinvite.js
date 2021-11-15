const Discord = require("discord.js");

module.exports = {
    name: "serverinvite",
    aliases: ["serverinv"],
    categories: "Általános",
    permissions: "",
    description: "Meghívót tudsz létrehozni",
    cooldown: "",
    usage: "<parancs neve>",
    run: async (client, message, args) => {
        let a = message.channel.createInvite({ maxAge: 0, maxUses: 0 });

        message.author.send({ content: `Meghívó link: ${a}` })
    }
}