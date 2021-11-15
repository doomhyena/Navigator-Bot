const Discord = require(`discord.js`);
const axios = require('axios');

module.exports = {
    name: "bird",
    aliases: ["birds", "madár"],
    categories: "Képek",
    permissions: "",
    description: "Alpakás képeket küld",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
        const url = "https://some-random-api.ml/img/birb";
        const facts = "https://some-random-api.ml/facts/bird"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send({content: `Hiba merült fel!`})
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(`Random Madaras Kép`)
            .setColor(`#f3f3f3`)
            .setImage(image.link)

        await message.channel.send({ embeds: [embed]})
    }
}