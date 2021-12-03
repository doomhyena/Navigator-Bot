const Discord = require(`discord.js`);
const Fs = require('fs');

module.exports = {
    name: "balance",
    aliases: ["bal", "egyenleg"],
    categories: "Pénz rendszer",
    permissions: "",
    description: "Megtudod nézni a pénztárcádat",
    cooldown: "",
    usage: "<@felhasználó>",
    run: async (bot, message, args) => {
        const member = message.mentions.members.first() || message.member;
        const bal = await bot.bal(member.id);

        let embed = new Discord.MessageEmbed()
        .setTitle(`Pénz:`)
        .setColor(`RANDOM`)
        .addField(`Pénztárcád`, `${bal}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({embeds: [embed]})
    }
}