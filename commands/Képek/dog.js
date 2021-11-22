const Discord = require(`discord.js`);
const superagent = require('superagent');

module.exports = {
    name: "dog",
    aliases: ["kutya"],
    categories: "Képek",
    permissions: "",
    description: "Kutyás képeket küld",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
        let msg = await message.channel.send({content: `A kép betöltése!`})

        var dog;
      
        dog = await superagent
            .get("https://random.dog/woof.json");
      
        while (dog.body.url.endsWith(".webm") || dog.body.url.endsWith(".mp4")) {
            dog = await superagent
                .get("https://random.dog/woof.json");
            console.log(dog.body)
        }
        msg.delete()
        let dogembed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("Xitus | Kutya")
            .setImage(dog.body.url)
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
        message.channel.send({ embeds: [dogembed]})
    }
}