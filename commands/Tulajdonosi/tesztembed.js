const Discord = require(`discord.js`);
const mongoose = require('mongoose');

module.exports = {
    name: "teszt2",
    category: "Tulajdonosi",
    usage: "",
    description: "",
    aliases: [""],
    run: async(bot, message, args) => {
        if(message.author.id !== "864583234158460938")  return message.channel.send({content: 'Nem te vagy a tulajdonos -_-'})

        let embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        
        message.channel.send({ embeds: [embed] }); 
    }
}