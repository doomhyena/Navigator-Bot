const Discord = require(`discord.js`);
const mongoose = require('mongoose');

module.exports = {
    name: "monster",
    aliases: ["szörny"],
    categories: "Képek",
    permissions: "",
    description: "Szörnyes képeket küld",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        const url = "https://apis.duncte123.me/animal/discord-monster";

        let image, response;
        try {
            response = await axios.get(url, { headers: { 'User-Agent': 'Wolfy#5206'} } );
            image = response.data.data.file;

        } catch (e) {
            return message.channel.send({content: `Hiba merült fel!`})
        }
        const embed = new Discord.MessageEmbed()
            .setTitle(`Random Szörnyes Kép`)
            .setColor(`#f3f3f3`)
            .setImage(image)

        await message.channel.send({ embeds: [embed]})
    }
}