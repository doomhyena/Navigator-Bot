const Discord = require(`discord.js`);
const Fs = require('fs');

module.exports = {
    name: "panda",
    aliases: [""],
    categories: "Képek",
    permissions: "",
    description: "Panda képeket küld",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
        const url = "https://some-random-api.ml/img/panda";
        const facts = "https://some-random-api.ml/facts/panda"

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
            .setTitle(`Random Pandás Kép`)
            .setColor(`#f3f3f3`)
            .setImage(image.link)

        await message.channel.send({ embeds: [embed]})
    }
}