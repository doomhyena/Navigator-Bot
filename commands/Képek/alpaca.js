const Discord = require(`discord.js`);
const axios = require('axios');

module.exports = {
    name: "alpaca",
    aliases: ["alpaka"],
    categories: "Képek",
    permissions: "",
    description: "Alpakás képeket küld",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        const url = "https://apis.duncte123.me/animal/alpaca";

        let image, response;
        try {
            response = await axios.get(url, { headers: { 'User-Agent': 'Norman#3172'} } );
            image = response.data.data.file;

        } catch (e) {
            return message.channel.send({content: `Hiba merült fel!`})
        }
        const embed = new MessageEmbed()
            .setTitle(`Random Alpakás Kép`)
            .setColor(`#f3f3f3`)
            .setImage(image)

        await message.channel.send({ embeds: [embed]})
    }
}