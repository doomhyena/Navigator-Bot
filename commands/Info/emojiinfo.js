const Discord = require(`discord.js`);
const moment = require("moment");

module.exports = {
    name: "emojiinfo",
    aliases: ["ei"],
    categories: "Info",
    permissions: "",
    description: "Kiírja a megadott emoji információit",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
      try {
        let hasEmoteRegex = /<a?:.+:\d+>/gm
        let emoteRegex = /<:.+:(\d+)>/gm
        let animatedEmoteRegex = /<a:.+:(\d+)>/gm
  
        if(!message.content.match(hasEmoteRegex))
          return message.reply("❌ Az üzenetedben nincs egy létező emoji, Kérlek próbáld meg úgy, hogy a szerveren lévő emojit (:emojineve:)-al adod meg!")
        
        if (emoji1 = emoteRegex.exec(message)) {
          let url = "https://cdn.discordapp.com/emojis/" + emoji1[1] + ".png?v=1"
          const emoji = message.guild.emojis.cache.find((emj) => emj.name === emoji1[1] || emj.id == emoji1[1])
          if(!emoji) return message.reply("Kérlek adj meg egy egyedi emojit **erről a szerverről**")
        
          const authorFetch = await emoji.fetchAuthor();
          const checkOrCross = (bool) => bool ? "✅" : "❌" ;

          const embed = new Discord.MessageEmbed()
          .setTitle(`**Információk erről az emojiról: __\`${emoji.name.toLowerCase()}\`__**`)
          .setColor("RANDOM")
          .addField("**Alap:**", [
            `**ID:** \`${emoji.id}\``,
            `**Link:** [\`LINK\`](${emoji.url})`,
           `**Készítő:** ${authorFetch} (\`${authorFetch.id}\`)`,
            `**Elkészítve:** \`${moment(emoji.createdTimestamp).format("YYYY/MM/DD") + " | " +  moment(emoji.createdTimestamp).format("hh:mm:ss")}\``
          ])
          .addField("**Egyebek:**", [
            `**Szükséges kettőspontok:** \`${checkOrCross(emoji.requireColons)}\``,
            `**Animált:** \`${checkOrCross(emoji.animated)}\``,
            `**Törölhető:** \`${checkOrCross(emoji.deleteable)}\``,
            `**Menedzselhető:** \`${checkOrCross(emoji.managed)}\``,
          ]).setFooter(bot.user.username, bot.user.displayAvatarURL())
          message.reply({embeds: [embed]})
        }
        else if (emoji1 = animatedEmoteRegex.exec(message)) {
          let url2 = "https://cdn.discordapp.com/emojis/" + emoji1[1] + ".gif?v=1"
          let attachment2 = new Discord.MessageAttachment(url2, "emoji.gif")
          const emoji = message.guild.emojis.cache.find((emj) => emj.name === emoji1[1] || emj.id == emoji1[1])
          if(!emoji) return message.reply("Kérlek adj meg egy egyedi emojit **erről a szerverről**")
        
          const authorFetch = await emoji.fetchAuthor();
          const checkOrCross = (bool) => bool ? ":white_check_mark:" : ":x:" ;
        
          const embed = new Discord.MessageEmbed()
          .setTitle(`**Emoji Infók: __\`${emoji.name.toLowerCase()}\`__**`)
          .setColor("RANDOM")
          .addField("**Alap:**", [
            `**Id:** \`${emoji.id}\``,
            `**Link:** [\`LINK\`](${emoji.url})`,
            `**Készítő:** ${authorFetch} (\`${authorFetch.id}\`)`,
            `**Elkészítve:** \`${moment(emoji.createdTimestamp).format("YYYY/MM/DD") + " | " +  moment(emoji.createdTimestamp).format("hh:mm:ss")}\``
          ])
          .addField("**Egyebek:**", [
            `**Szükséges kettőspontok:** \`${checkOrCross(emoji.requireColons)}\``,
            `**Animált:** \`${checkOrCross(emoji.animated)}\``,
            `**Törölhető:** \`${checkOrCross(emoji.deleteable)}\``,
            `**Menedzselhető:** \`${checkOrCross(emoji.managed)}\``,
          ]).setFooter(bot.user.username, bot.user.displayAvatarURL())
          message.reply({embeds: [embed]})
        }
        else {
          message.reply("Nem található emoji! Ha ez egy alap emoji (amelyt a discord tett be) akkor nem lehet megjeleníteni ezt.")
        }
      } catch (e) {
        return message.reply({embeds: [new Discord.MessageEmbed()
            .setColor("RED")
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
            .setTitle(`❌ ERROR | Hiba lépett fel`)
            .setDescription(`\`\`\`${e.message ? String(e.message).substr(0, 2000) : String(e).substr(0, 2000)}\`\`\``)
        ]});
      }
    }
}