const Discord = require(`discord.js`);
const Schema = require('../../models/autorole');
const { MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "autorole",
    aliases: ["auto-role", "setautorole", "set-autorole", "set-auto-role"],
    categories: "Beállítások",
    permissions: "Rangok kezelése",
    description: "Be tudod állítani, hogy mikor belép egy felhasználó milyen rangot adjon neki automatikusan.",
    cooldown: "",
    usage: "<@rang>",
    run: async(bot, message, args) => {
      
      if (!message.member.permissions.has("MANAGE_ROLES"))
      return message.channel.send({content: 'Ehhez a parancshoz nincs jogod!'})

      const r = message.mentions.roles.first();
      if (!r)
      return message.channel.send({content: "Érvénytelen rang, kérlek adj meg egy érvényes rangot!!"});

      let ellenorzes = new Discord.MessageEmbed()
      .setTitle(`Ellenőrzés`)
      .setColor("#000080")
      .setDescription(`Biztos vagy benne, hogy ezt a rangot akarod beállítani? **${r}**`)
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
                .setDescription(`A rang  sikeresen beállítva: ${r}! Mától minden új tangak ezt a rangot fogom odaadni!`)
                .setFooter(bot.user.username, bot.user.displayAvatarURL())
                .setTimestamp();
                await i.update({ embeds: [embed] });

                Schema.findOne({ Guild: message.guild.id }, async (err, data) => {
                  if (data) {
                    data.Role = r.id;
                    data.save();
                  } else {
                    new Schema ({
                      Guild: message.guild.id,
                      Role: r.id,
                    }).save();
                  }
                })
              }
            if (i.customId === 'danger') {

              let embed = new Discord.MessageEmbed()
              .setTitle(`Sikertelen beállítás!`)
              .setColor("#FF0000")
              .setDescription('Végül nem állítottál be semmilyen rangot!' )
              .setFooter(bot.user.username, bot.user.displayAvatarURL())
              .setTimestamp();

              await i.update({ embeds: [embed] });
            }
            });
    }
}