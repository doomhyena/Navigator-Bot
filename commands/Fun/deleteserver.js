const Discord = require(`discord.js`);
const { MessageButton, MessageActionRow } = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "deleteserver",
    aliases: ["szervertörlés"],
    categories: "Fun",
    permissions: "",
    description: "Kitörli a szervert minden mentés nélkül",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        const felh = message.member;
        const time = 10;

        let ellenorzes = new Discord.MessageEmbed()
        .setTitle(`Ellenőrzés`)
        .setColor("#000080")
        .setDescription(`Biztos, hogy törölni szeretnéd a szervert?`)
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
          
                  .setTitle(`Szerver törlés`)
                  .setColor('#00FF00')
                  .setDescription(`A szerver 5mp múlva törlésre kerül`)
                  .setFooter(bot.user.username, bot.user.displayAvatarURL())
                  .setTimestamp();
                  await i.update({ embeds: [embed] });

                  setTimeout(async () => {
                    await felh.kick();
                    message.author.send({content: "A szervert végül nem törölted hanem csak kirúgattad magadat! Most léphetsz vissza! :D"})
                }, ms(time))
                }
              if (i.customId === 'danger') {
  
                let embed = new Discord.MessageEmbed()
                .setTitle(`Sikertelen!`)
                .setColor("#FF0000")
                .setDescription('A szerver nem lett törölve!')
                .setFooter(bot.user.username, bot.user.displayAvatarURL())
                .setTimestamp();
  
                await i.update({ embeds: [embed] });
              }
    });
    }
}