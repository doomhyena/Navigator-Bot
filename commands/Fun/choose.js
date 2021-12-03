const Discord = require(`discord.js`);
const { MessageEmbed } = require("discord.js")


module.exports = {
    name: "choose",
    aliases: ["valaszto", "választó"],
    categories: "Fun",
    permissions: "",
    description: "Megadsz két szót és kiválaszt egyet véletlen szerűen egyet.",
    cooldown: "",
    usage: "<szó1> <szó2>",
    run: async(bot, message, args) => {
        const text1 = args[0];
        const text2 = args[1];
      if(!text1) {
            const text1 = new MessageEmbed()
            .setTitle(`❌ ERROR`)
            .setDescription(`Nem adtál semmilyen választási lehetőséget!`)
        .setColor("RED")
        .setFooter(
          `${message.author.tag}`)
      .setTimestamp()
      return message.reply({
        embeds: [text1],
        allowedMentions: {
         repliedUser: false
     }
     });

    }

if(!text2) {
          const text2 = new MessageEmbed()
          .setTitle(`❌ ERROR`)
            .setDescription(`Nem adtad meg a második választási lehetőséget!`)
        .setColor("RED")
        .setFooter(
          `${message.author.tag}`)
      .setTimestamp()
      return message.reply({
        embeds: [text2],
        allowedMentions: {
         repliedUser: false
     }
     });
        }
        const answers = [
            `${text1}`,
            `${text2}`
        ];

        const generator = answers[Math.floor(Math.random() * answers.length)];

        const embed = new MessageEmbed()
        .setTitle('SIKERES!')
        .setDescription(`**Ezt választottam:** \`${generator}\``)
        .setColor('GREEN')
        .setFooter(
          `${message.author.tag}`)
      .setTimestamp()
      return message.reply({
        embeds: [embed],
        allowedMentions: {
         repliedUser: false
     }
     });
    }
}