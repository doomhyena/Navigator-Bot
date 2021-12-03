const Discord = require("discord.js");
const Schema = require('../models/raid');
const bot = require('../index');

bot.on("guildMemberAdd", async (member) => {
    Schema.findOne({ Guild: member.guild.id }, async (e, data) => {
        if (!data) return;
        member.kick();
    })
})