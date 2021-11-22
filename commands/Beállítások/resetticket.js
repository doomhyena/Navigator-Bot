const Discord = require(`discord.js`);
const TicketSchema = require('../../models/ticket');
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
        return message.reply({content: "Nincs jogod ezt a parancsot használni!"})


        let ellenorzes = new Discord.MessageEmbed()
        .setTitle(`Ellenőrzés`)
        .setColor("#000080")
        .setDescription(`Biztos, hogy ki akarod törölni az üdvözlő csatornát?`)
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
                  .setDescription(`A ticket kategória sikeresen törölve lett!`)
                  .setFooter(bot.user.username, bot.user.displayAvatarURL())
                  .setTimestamp();
                  await i.update({ embeds: [embed] });
                  await TicketSchema.findOneAndDelete({ Guild : message.guild.id })
                }
              if (i.customId === 'danger') {
  
                let embed = new Discord.MessageEmbed()
                .setTitle(`Sikertelen beállítás!`)
                .setColor("#FF0000")
                .setDescription('A ticket kategória nem lett törölve!')
                .setFooter(bot.user.username, bot.user.displayAvatarURL())
                .setTimestamp();
  
                await i.update({ embeds: [embed] });
              }
    });
    }
}