const Discord = require(`discord.js`);
const Schema = require('../../models/antispam');
const { MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "setantispam",
    aliases: ["set-antispam","set-anti-spam","sas"],
    categories: "Beállítások",
    permissions: "Üzentetek kezelése",
    description: "Ezzel a paranccsal meg tudod állítani a raid-eket",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
      
      if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send({content: 'Ehhez a parancshoz nincs jogod!'})

      let ellenorzes = new Discord.MessageEmbed()
      .setTitle(`Ellenőrzés`)
      .setColor("#000080")
      .setDescription(`Biztos vagy benne, hogy be akarod állítani az **antispam**et? Így  az üzenetküldési sebbeség korlátozva lesz!`)
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
                .setDescription(`A(z) **antispam** sikeresen bekapcsolva!`)
                .setFooter(bot.user.username, bot.user.displayAvatarURL())
                .setTimestamp();
                await i.update({ embeds: [embed] });

                Schema.findOne({ Guild: message.guild.id }, async (err, data) => {
                  if (data) {
                    data.Guild = message.guild.id;
                    data.save();
                  } else {
                    new Schema ({
                      Guild: message.guild.id,
                    }).save();
                  }
                })
              }
            if (i.customId === 'danger') {

              let embed = new Discord.MessageEmbed()
              .setTitle(`Sikertelen beállítás!`)
              .setColor("#FF0000")
              .setDescription('Végül nem állítottad be a(z) **antispam**-et!')
              .setFooter(bot.user.username, bot.user.displayAvatarURL())
              .setTimestamp();

              await i.update({ embeds: [embed] });
            }
            });
    }
}