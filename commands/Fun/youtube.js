const Discord = require(`discord.js`);

module.exports = {
    name: "youtube",
    aliases: ["ytsearch", "youtubesearch", "yt"],
    categories: "Fun",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "<keresendő dolog>",
    run: async(bot, message, args) => {

        link = 'https://www.youtube.com/results?search_query='
        keres = args.join(" ")

        if(!keres) {
            return message.channel.send({content: "Nem írtad le, hogy mire szeretnél keresni!"})
          } else {
            message.reply({content: `${link}${keres}`})
          }
    }
}