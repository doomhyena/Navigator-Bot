const Discord = require(`discord.js`);
const Schema = require('../../models/ticket');
const { MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "setticket",
    aliases: ["st"],
    categories: "Beállítások",
    permissions: "Csatornák kezelése",
    description: "",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        if (!message.member.permissions.has("MANAGE_CHANNELS"))
        return message.channel.send({content: 'Ehhez a parancshoz nincs jogod!'})

        const ca = args[0]
        if (!ca)
        return message.channel.send({content: "Érvénytelen kategória ID, kérlek adj meg egy érvényes kategória ID!!"});

        if (isNaN(ca))
        return message.channel.send({content: "Kérlek a kategória ID-jét add meg és ne mást!"})


        let ellenorzes = new Discord.MessageEmbed()
        .setTitle(`Ellenőrzés`)
        .setColor("#000080")
        .setDescription(`Biztos vagy benne, hogy ezt a kategóriát akarod beállítani? **${ca}**`)
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
                  .setDescription(`A hibajegy kategóriája sikeresen beállítva ide: **${ca}**`)
                  .setFooter(bot.user.username, bot.user.displayAvatarURL())
                  .setTimestamp();
                  await i.update({ embeds: [embed] });
  
                  Schema.findOne({ Guild: message.guild.id }, async (err, data) => {
                    if (data) {
                      data.Category = ca;
                      data.save();
                    } else {
                      new Schema ({
                        Guild: message.guild.id,
                        Category: ca,
                      }).save();
                    }
                  })
                }
              if (i.customId === 'danger') {
  
                let embed = new Discord.MessageEmbed()
                .setTitle(`Sikertelen beállítás!`)
                .setColor("#FF0000")
                .setDescription('Végül nem állítottad be egyik kategóriát sem a hibajegynek!' )
                .setFooter(bot.user.username, bot.user.displayAvatarURL())
                .setTimestamp();
  
                await i.update({ embeds: [embed] });
              }
              });
    }
}