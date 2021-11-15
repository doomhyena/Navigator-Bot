const Discord = require(`discord.js`);

module.exports = {
    name: "seal",
    aliases: ["fóka"],
    categories: "Állatok",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        const url = "https://apis.duncte123.me/animal/seal";

        let image, response;
        try {
            response = await axios.get(url, { headers: { 'User-Agent': 'Hisashi#2267'} } );
            image = response.data.data.file;

        } catch (e) {
            return message.channel.send(`Hiba merült fel!`)
        }
        const embed = new MessageEmbed()
            .setTitle(`Random Fókás Kép`)
            .setColor(`#f3f3f3`)
            .setImage(image)

        await message.channel.send({embeds: [embed]})
    }
}