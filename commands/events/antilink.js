const Discord = require("discord.js");
const bot = require("../index");
const Schema = require("../models/antilink")


bot.on("messageCreate", async (message) => {
    if(!message.guild) return;
    Schema.findOne({ Guild: message.guild.id }, async (e, data) => {
        if (!data) return;
        if(message.member.permissions.has("MANAGE_MESSAGES")) return;
        function deleteMessage() {
            message.delete();
            message.channel.send({ content: "A hirdetések nem enegedélyezettek!" })
        }
        const links = ["discord.gg/", "discord.com/invite/", " vm.tiktok.com", "https://"]
        const forbiddenLinks = ["discord.io", "youtube.com/"]
        forbiddenLinks.forEach((link) => {
            if(message.content.includes(link)) return deleteMessage();
        });

        for (const link of links) {

            if(!message.content.includes(link)) return;

            const code = message.content.split(link)[1].split(" ")[0]
            const isGuildInvite = message.guild.invites.cache.has(code);

            if(!isGuildInvite) {
                try {
                    const vanity = await message.guild.fetchVanityData();
                    if(code !== vanity?.code) return deleteMessage();
                } catch (err) {
                    deleteMessage(); 
                }
            }
        }
    });
});