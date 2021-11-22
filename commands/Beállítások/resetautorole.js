const Discord = require(`discord.js`);
const mongoose = require('mongoose');
const AutoRoleSchema = require('../../models/autorole');
const { MessageButton, MessageActionRow } = require("discord.js");


module.exports = {
    name: "resetautorole",
    aliases: ["reset-auto-role", "reset-autorole", "rar"],
    categories: "Beállítások",
    permissions: "Rangok kezelése",
    description: "Az automatikus rangadást kapcsolja ki.",
    cooldown: "",
    usage: "<@rang>",
    run: async(bot, message, args) => {
        if(!message.member.permissions.has("MANAGE_ROLES")) 
        return message.reply({content: "Nincs jogod ezt a parancsot használni!"})

        let ellenorzes = new Discord.MessageEmbed()
        .setTitle(`Ellenőrzés`)
        .setColor("#000080")
        .setDescription(`Biztos, hogy ki akarod kapcsolni az autorole funkciót?`)
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
                  .setDescription(`Az autorole funkció sikeresen kikapcsolva!`)
                  .setFooter(bot.user.username, bot.user.displayAvatarURL())
                  .setTimestamp();
                  await i.update({ embeds: [embed] });
                  await AutoRoleSchema.findOneAndDelete({ Guild : message.guild.id })
                }
              if (i.customId === 'danger') {
  
                let embed = new Discord.MessageEmbed()
                .setTitle(`Sikertelen beállítás!`)
                .setColor("#FF0000")
                .setDescription('Az autorole funkció nem lett kikapcsolva!' )
                .setFooter(bot.user.username, bot.user.displayAvatarURL())
                .setTimestamp();
  
                await i.update({ embeds: [embed] });
              }
              });
    }
}