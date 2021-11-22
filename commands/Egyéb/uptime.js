const Discord = require(`discord.js`);
const Fs = require('fs');

module.exports = {
    name: "uptime",
    aliases: [""],
    categories: "Általános",
    permissions: "",
    description: "Itt tudod megnézni, hogy a bot mennyi ideje fut",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
        let uptime = ``;
        let totalSeconds = (bot.uptime / 1000);
        let week = Math.floor(totalSeconds / 604800);
        totalSeconds %= 604800;
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
      
        if(hours > 23){
            days = days + 1;
            hours = 0;
        }
      
        if(days == 7){
            days = 0;
            week = week + 1;
        }
      
        if(week > 0){
            uptime += `${week} hét, `;
        }
      
        if(minutes > 60){
            minutes = 0;
        }
      
        uptime += `${days} nap, ${hours} óra, ${minutes} perc és ${seconds} másoderc`;
      
        let embed = new Discord.MessageEmbed()
            .setColor("#228B22")
            .addField('A bot üzemelési ideje', uptime)
            .addField("Utolsó újraindítás", `${bot.readyAt}`)
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    }
}