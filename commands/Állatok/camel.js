const Discord = require(`discord.js`);
const axios = require('axios');

module.exports = {
    name: "camel",
    aliases: ["teve"],
    categories: "Képek",
    permissions: "",
    description: "Tevés képeket küld",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        const url = "https://apis.duncte123.me/animal/camel";

        let image, response;
        try {
            response = await axios.get(url, { headers: { 'User-Agent': 'Wolfy#5206'} } );
            image = response.data.data.file;

        } catch (e) {
            return message.channel.send({content: `Hiba merült fel!`})
        }
        const embed = new Discord.MessageEmbed()
            .setTitle(`Random Tevés Kép`)
            .setColor(`#f3f3f3`)
            .setImage(image)

        await message.channel.send({ embeds: [embed]})
    }
}