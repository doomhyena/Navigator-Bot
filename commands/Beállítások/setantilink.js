const Discord = require(`discord.js`);
const Schema = require('../../models/antilink');
const { MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "setantilink",
    aliases: ["set-antilink","set-anti-link"],
    categories: "Beállítások",
    permissions: "Üzenetek kezelése",
    description: "Be tudod állítani, hogy a szerverre senki ne tudjon linkeket küldeni.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
      
      if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send({content: 'Ehhez a parancshoz nincs jogod!'})

      let ellenorzes = new Discord.MessageEmbed()
      .setTitle(`Ellenőrzés`)
      .setColor("#000080")
      .setDescription(`Biztos vagy benne, hogy be akarod állítani az **antilink**et? Hogyha bekapcsolod akkor onnantól csak az tud linkeket küldeni akinek joga van, az üzenetek kezelésére!`)
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
                .setDescription(`A(z) **antilink** sikeresen bekapcsolva!`)
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
              .setDescription('Végül nem állítottad be az **antilink**-et!')
              .setFooter(bot.user.username, bot.user.displayAvatarURL())
              .setTimestamp();

              await i.update({ embeds: [embed] });
            }
            });
    }
}