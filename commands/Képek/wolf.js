const Discord = require(`discord.js`);
const mongoose = require('mongoose');

module.exports = {
    name: "wolf",
    aliases: ["farkas"],
    categories: "Képek",
    permissions: "",
    description: "Farkasos képeket küld",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        const url = "https://apis.duncte123.me/animal/wolf";

        let image, response;
        try {
            response = await axios.get(url, { headers: { 'User-Agent': 'Wolfy#5206'} } );
            image = response.data.data.file;

        } catch (e) {
            return message.channel.send({content: `Hiba merült fel!`})
        }
        const embed = new MessageEmbed()
            .setTitle(`Random Farkasos Kép`)
            .setColor(`#f3f3f3`)
            .setImage(image)

        await message.channel.send({ embeds: [embed]})
    }
}