const Discord = require(`discord.js`);
const Fs = require('fs');
const items = require('../../bruh/shopitem')

module.exports = {
    name: "shop",
    aliases: ["bolt"],
    categories: "Pénz rendszer",
    permissions: "",
    description: "Ez itt a bolt.",
    cooldown: "",
    usage:"",
    run: async (bot, message, args) => {
        if (items.length === 0) return message.reply('A bolt átmenetileg zárva! Gyere vissza később!');

        const shoplist = items.map((value, index) =>{
            return `**${index + 1})** ${value.item} -> ${value.érték} botérme`
        })
        let embed = new Discord.MessageEmbed()
        .setTitle(`Bolt`)
        .setColor(`RANDOM`)
        .setDescription(`${shoplist}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({ embeds: [embed] });
    }
}