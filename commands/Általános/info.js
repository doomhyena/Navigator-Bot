const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = "="

module.exports = {
    name: "info",
    aliases: [""],
    categories: "Általános",
    permissions: "",
    description: "Kiírja a parancs infókat.",
    cooldown: "",
    usage: "<parancs neve>",
    run: async(bot, message, args) => {
        const command =
          bot.commands.get(args[0].toLowerCase()) ||
          bot.commands.find(
            (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
          );
  
        if (!command) {
          const embed = new MessageEmbed()
            .setTitle(`Helytelen használat! Használd: \`${prefix}help\` az összes parancsomhoz!`)
            .setColor("FF0000");
          return message.channel.send(embed);
        }
  
        const embed = new MessageEmbed()
          .setTitle("Parancs részletek:")
          .addField("Prefix:", `\`${prefix}\``)
          .addField(
            "Parancs:",
            command.name ? `\`${command.name}\`` : "Nincs neve ennek a parancsnak!"
          )
          .addField(
            "Kategória:",
            command.categories
              ? command.categories
              : "Nem tartozik egyik kategóriába sem a parancs sem."
          )
          .addField(
            "Jogok:",
            command.permissions
              ? command.permissions
              : "Nem kell a parancshoz semmilyen jog sem, hogy használhasd."
          )
          .addField(
            'Becenevek:',
            command.aliases
              ? `\`${command.aliases.join("` `")}\``
              : "Nincs beceneve ennek a parancsnak."
          )
          .addField(
            "Használat:",
            command.usage
              ? `\`${prefix}${command.name} ${command.usage}\``
              : `\`${prefix}${command.name}\``
          )
          .addField(
            "Leírás:",
            command.description
              ? command.description
              : "Nincs leírása ennek a parancsnak."
          )
          .setFooter(
            `Kérte: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
          .setColor("RANDOM");
          return message.channel.send({ embeds: [embed] })
  }
}