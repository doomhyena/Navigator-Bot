const Discord = require(`discord.js`);
const { CommandInteraction, Client, MessageEmbed} = require('discord.js');

module.exports = {
    name: "teszt",
    aliases: ["xsd"],
    categories: "Tulajdonosi",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "",
    run: async(bot, message, args, ) => {
        const ch = message.guild.channels.cache.find(ch => ch.id=== '884025935899271211');

              let embed = new Discord.MessageEmbed()
              .setTitle(`Teszt`)
              .setColor("BLUE")
              .addField('Teszt', 'Ha kiírja az embedet nagyszerű munkát végeztél! :D')
              .setFooter(bot.user.username, bot.user.displayAvatarURL())
              .setTimestamp();
              
              ch.send({ embeds: [embed] });
    }
}