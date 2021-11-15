const Discord = require(`discord.js`);
const inventory = require("../../models/inventory");

module.exports = {
    name: "inventory",
    aliases: ["inv"],
    categories: "Pénz rendszer",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        inventory.findOne(
            { Guild: message.guild.id, User: message.author.id },
            async (err, data) => {
                if (!data) return message.channel.send("A te hátizsákod üres!");
                const mappedData = Object.keys(data.Inventory)
                .map((key) => {
                    return `${key}(${data.Inventory[key]})`;
                })
                .join(", ");
                message.channel.send({content: mappedData});
            }
        )
    }
}