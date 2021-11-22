const Discord = require(`discord.js`);
const superagent = require('superagent');

module.exports = {
    name: "cat",
    aliases: ["macska"],
    categories: "Képek",
    permissions: "",
    description: "Macskás képeket küld",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
        let msg = await message.channel.send({content: `A kép betöltése!`})

        let {body} = await superagent
        .get(`https://aws.random.cat/meow`)
    
        if(!{body}) return message.channel.send({content: `Hiba merült fel!`})
    
        let catEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField("Ugye milyen cuki?", ":D")
        .setImage(body.file)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp(); 
    
        message.channel.send({ embeds: [catEmbed]})
        msg.delete();
    }
}