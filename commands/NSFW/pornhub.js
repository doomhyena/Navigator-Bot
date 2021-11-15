const Discord = require(`discord.js`);

module.exports = {
    name: "pornhub",
    aliases: ["ph"],
    categories: "NSFW",
    permissions: "",
    description: "Pornhubról tudsz bármit keresni",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        if (!message.channel.nsfw) {

            return message.reply({content: `Ezt a parancsot csakis NSFW csatornában használhatod!`})
            .then(msg => {
            msg.delete({ timeout: 3000 })
            });
        }
        let link = 'https://www.pornhub.com/video/search?search=';
        let kereses = args.join(" ");

        message.reply({content: `${link}${kereses}`})
    }
}