const Discord = require(`discord.js`);
const mongoose = require('mongoose');
const Schema = require('../../models/globalchat');
const { MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "globalchatremove",
    aliases: ["global-chat-remove", "removeglobalchat", "rmvgc", "gcrmv"],
    categories: "Beállítások",
    permissions: "Adminisztrátori",
    description: "A GlobalChat-et törli ki.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        if (!message.member.permissions.has("ADMINISTRATOR")) 
        return message.reply({content: "Nincs jogod ezt a parancsot használni!"})
 
            let ellenorzes = new Discord.MessageEmbed()
            .setTitle(`Ellenőrzés`)
            .setColor("#000080")
            .setDescription(`Biztos, hogy ki kapcsolod az **Globalchat** funkciót?`)
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
                      .setDescription(`A(z) **Globalchat** funkció sikeresen ki lett kapcsolva!`)
                      .setFooter(bot.user.username, bot.user.displayAvatarURL())
                      .setTimestamp();
                      await i.update({ embeds: [embed] });
                      await Schema.findOneAndDelete({ Guild : message.guild.id })
                    }
                  if (i.customId === 'danger') {
      
                    let embed = new Discord.MessageEmbed()
                    .setTitle(`Sikertelen beállítás!`)
                    .setColor("#FF0000")
                    .setDescription('A(z) **Globalchat** funkció nem lett kikapcsolva!')
                    .setFooter(bot.user.username, bot.user.displayAvatarURL())
                    .setTimestamp();
      
                    await i.update({ embeds: [embed] });
                  }
        });
    }
}