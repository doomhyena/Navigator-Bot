const Discord = require(`discord.js`);
const db = require("../../models/globalchat");

module.exports = {
    name: "globalchat",
    aliases: ["gc"],
    categories: "GlobalChat",
    permissions: "",
    description: "Ezzel a parancsal tudod, hozzáadni a Globalchat szobádat a többihez!",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return;
        db.findOne(
            { Guild: message.guild.id, Channel: message.channel.id, Activated: true },
            async (err, data) => {
                if (data)
                return message.channel.send({
                    content: "A csatorna már hozzá lett adva a GlobalChat-hez!"
                });

                data = new db({
                    Guild: message.guild.id,
                    Channel: message.channel.id,
                    Author: message.author.id,
                    Activated: true,
                });

                data.save();
                message.channel.send({content: `${message.channel} hozzá lett adva a GlobalChat-hez!`})
            }
        )
    }
}