const Discord = require("discord.js");
const LeaveSchema = require('../models/leave');
const bot = require('../index');

bot.on("guildMemberRemove", async (member) => {
    LeaveSchema.findOne({ Guild: member.guild.id }, async (e, data) => {
        if (!data) return;
        const olduser = member.user.tag;
        const ch = member.guild.channels.cache.get(data.Channel);

        let embed = new Discord.MessageEmbed()
        .setTitle("Újabb tag hagyta el a szervert!")
        .setColor("#FF0000")
        .setDescription(`Viszlát ${olduser}, reméljük jól érezted magad! :(`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        ch.send({ embeds: [embed] });
    })
})
