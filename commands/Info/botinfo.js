const Discord = require(`discord.js`);
const os = require('os')
const ms = require("ms");
const { stat } = require('fs');
const moment = require("moment");
const cpuStat = require("cpu-stat")
const version = "6.3.1"
const prefix = '='

module.exports = {
    name: "botinfo",
    aliases: ["bi"],
    categories: "Info",
    permissions: "",
    description: "A botnak az információit írja ki",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
        let cpuLol;
        cpuStat.usagePercent(async function (err, percent, seconds) {
     let botinfo = new Discord.MessageEmbed()
     .setTitle(`__**${bot.user.username} Statisztikája:**__`)
     .setColor("RED")
     .addField("🤖Bot Név:", `${bot.user.tag}`)
     .addField("🤖Bot Prefixe:", `${prefix}`)
     .addField("**💻 Tulajdonos/Fejlesztő:**", `FLUK3#3172`)
     .addField("**⏳ Ram Használat:**", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
     .addField("**👾 Bot Programnyelv:**", `Discord.js V13`, true)
     .addField("**🤖 Node:**", `${process.version}`, true)
     .addField("**🤖 CPU:**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
     .addField("**🤖 CPU Használat:**", `\`${percent.toFixed(2)}%\``, true)
     .addField("**🤖 Arch:**", `\`${os.arch()}\``, true)
     .addField("**💻 Platform:**", `\`\`${os.platform()}\`\``, true)
     .addField("**🤖API válaszidő:**", `${(bot.ws.ping)}ms`)
     .setFooter(bot.user.username, bot.user.displayAvatarURL())
     .setTimestamp()
     
     message.channel.send({embeds: [botinfo]});
     if (err) {
        return console.log(err);
    }
        });
    }
}