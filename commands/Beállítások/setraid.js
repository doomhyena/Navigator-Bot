const Discord = require(`discord.js`);
const Schema = require('../../models/antilink');
const { MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "setraid",
    aliases: ["set-raid","sr"],
    categories: "Beállítások",
    permissions: "Emberek kidobása",
    description: "Ezzel a paranccsal meg tudod állítani a raid-eket",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
      
      if (!message.member.permissions.has("KICK_MEMBERS"))
      return message.channel.send({content: 'Ehhez a parancshoz nincs jogod!'})

      let ellenorzes = new Discord.MessageEmbed()
      .setTitle(`Ellenőrzés`)
      .setColor("#000080")
      .setDescription(`Biztos vagy benne, hogy be akarod állítani az **raid**et? Minden szerverre belépőt új felhasználót ki fog rúgni!`)
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
                .setDescription(`A(z) **raid** sikeresen bekapcsolva!`)
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
              .setDescription('Végül nem állítottad be az **raid**-et!')
              .setFooter(bot.user.username, bot.user.displayAvatarURL())
              .setTimestamp();

              await i.update({ embeds: [embed] });
            }
            });
    }
}