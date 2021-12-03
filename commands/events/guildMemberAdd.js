const Discord = require("discord.js");
const WelcomeSchema = require('../models/welcome');
const bot = require('../index');

bot.on("guildMemberAdd", async (member) => {
    WelcomeSchema.findOne({ Guild: member.guild.id }, async (e, data) => {
        if (!data) return;
        const newuser = member.user;
        const ch = member.guild.channels.cache.get(data.Channel);

        let embed = new Discord.MessageEmbed()
        .setTitle("Új tag lépett be!")
        .setColor("#00FF00")
        .setDescription(`Szia ${newuser}, üdvözöllek a(z) **${member.guild.name}** szerveren! Nézz körbe a szerveren, mielőtt bármit is csinálsz! Jó szórakozást! :)`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        ch.send({ embeds: [embed] });
    })
})