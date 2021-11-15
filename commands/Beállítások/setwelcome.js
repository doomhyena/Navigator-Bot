const Discord = require(`discord.js`);
const Schema = require('../../models/welcome');
const { MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "setwelcome",
    aliases: ["set-welcome"],
    categories: "Beállítások",
    permissions: "Csatornák kezelése",
    description: "Be tudod állítani, az üdvözlő csatornát ezzel a panccsal.",
    cooldown: "",
    usage: "<#csatorna>",
    run: async(bot, message, args) => {
      
      if (!message.member.permissions.has("MANAGE_CHANNELS"))
      return message.channel.send({content: 'Ehhez a parancshoz nincs jogod!'})

      const ch = message.mentions.channels.first();
      if (!ch)
      return message.channel.send({content: "Érvénytelen csatorna, kérlek adj meg egy csatornát!!"});

      let ellenorzes = new Discord.MessageEmbed()
      .setTitle(`Ellenőrzés`)
      .setColor("#000080")
      .setDescription(`Biztos vagy benne, hogy ezt a csatornát akarod beállítani? **${ch}**`)
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
                .setDescription(`Az üdvözlő csatorna sikeresen beállítva ide: ${ch}`)
                .setFooter(bot.user.username, bot.user.displayAvatarURL())
                .setTimestamp();
                await i.update({ embeds: [embed] });

                Schema.findOne({ Guild: message.guild.id }, async (err, data) => {
                  if (data) {
                    data.Channel = ch.id;
                    data.save();
                  } else {
                    new Schema ({
                      Guild: message.guild.id,
                      Channel: ch.id,
                    }).save();
                  }
                })
              }
            if (i.customId === 'danger') {

              let embed = new Discord.MessageEmbed()
              .setTitle(`Sikertelen beállítás!`)
              .setColor("#FF0000")
              .setDescription('Végül nem állítottál be semmilyen üdvözlő csatornát!' )
              .setFooter(bot.user.username, bot.user.displayAvatarURL())
              .setTimestamp();

              await i.update({ embeds: [embed] });
            }
            });
    }
}