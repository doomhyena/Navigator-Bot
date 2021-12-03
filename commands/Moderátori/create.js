const Discord = require(`discord.js`);
const schema = require('../../models/custom-commands');

module.exports = {
    name: "create",
    aliases: ["cc-create"],
    categories: "Moderátori",
    permissions: "Adminisztrátori",
    description: "Egyedi kiírós parancsokat tudsz létrehozni vele.",
    cooldown: "",
    usage: "<parancsnév> <parancs>",
    run: async(bot, message, args) => {
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send({content: 'Nincsen jogod ehhez a parancshoz!'});

        const name = args[0]; const response = args.slice(1).join(" ");

        if(!name) return message.channel.send({content: 'Kérlek add meg a parancs nevét!'});
        if(!response) return message.channel.send({content: 'Kérlek add meg, hogy mit válaszoljon vissza bot!'});

        const data = await schema.findOne({ Guild: message.guild.id, Command: name });
        if(data) return message.channel.send({content: 'Ez az egyéni parancs már létezik!'});
        const newData =  new schema({
            Guild: message.guild.id,
            Command: name,
            Response: response
        })
        await newData.save();
        message.channel.send({content: `Mentve **${name}** egyéni parancsként!`});
    }
}