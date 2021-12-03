const Discord = require(`discord.js`);
const prefix = require('../../cfg.json').prefix
const mongoose = require('mongoose');
const prefixSchema = require('../../models/prefix');
const { MessageButton, MessageActionRow } = require("discord.js");


module.exports = {
    name: "resetprefix",
    category: "Beállítások",
    usage: "",
    description: "Kitörölöheted a beállított prefixet!",
    aliases: [""],
    run: async(bot, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send({content: "Nincs jogod ezt a parancsot használni!"})

        let ellenorzes = new Discord.MessageEmbed()
        .setTitle(`Ellenőrzés`)
        .setColor("#000080")
        .setDescription(`Biztos, hogy törölni szeretnét a prefixet?`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
  
        const gombok = new MessageActionRow()
              .addComponents(
                  new MessageButton()
                      .setCustomId('success')
                      .setLabel('Igen')
                      .setStyle('SUCCESS'),
                  new MessageButton()
                      .setCustomId('danger')
                      .setLabel('Nem')
                      .setStyle('DANGER'),
              );
              message.reply({ embeds: [ellenorzes], components: [gombok] });
  
              const filter = i => i.user.id === message.author.id;
  
              const collector = message.channel.createMessageComponentCollector({ 
                filter, 
                max: 1,
                time: 1000 * 15 
              });
  
              collector.on('collect', async i => {
                if (i.customId === 'success') {
                  const embed = new Discord.MessageEmbed()
          
                  .setTitle(`Sikeres beállítás!`)
                  .setColor('#00FF00')
                  .setDescription(`A(z) prefix újra bot alap prefixe! Prefix: \n**${prefix}**`)
                  .setFooter(bot.user.username, bot.user.displayAvatarURL())
                  .setTimestamp();
                  await i.update({ embeds: [embed] });
                  await prefixSchema.findOneAndDelete({ Guild : message.guild.id })
                }
              if (i.customId === 'danger') {
  
                let embed = new Discord.MessageEmbed()
                .setTitle(`Sikertelen beállítás!`)
                .setColor("#FF0000")
                .setDescription('A(z) prefix törlés sikertelen volt!' )
                .setFooter(bot.user.username, bot.user.displayAvatarURL())
                .setTimestamp();
  
                await i.update({ embeds: [embed] });
              }
              });
    }
}