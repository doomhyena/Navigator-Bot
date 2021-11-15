const Discord = require(`discord.js`);
const img = require('images-scraper');

const google = new img({
    puppeteer : {
        headless : true,
    }
})

module.exports = {
    name: "imagine",
    aliases: ["ig"],
    categories: "Képek",
    permissions: "",
    description: "Képeket tudsz keresgélni",
    cooldown: "",
    usage: "<Amiről képet szeretnél>",
    run: async(bot, message, args) => {
            const query = args.join(" ")
            if(!query) return message.channel.send({content: 'írj be valamit kezdésnek!'})
    
            const results = await google.scrape(query, 1)
            message.channel.send({content: results[0].url});
    }
}