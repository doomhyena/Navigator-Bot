const Discord = require(`discord.js`);
const schema = require('../../models/custom-commands');

module.exports = {
    name: "delete",
    aliases: ["cc-delete"],
    categories: "Moderátori",
    permissions: "Adminisztrátor",
    description: "Törli az egyedi parancsot",
    cooldown: "",
    usage: "<parancsnév>",
    run: async(bot, message, args) => {
        if(!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply({content: `Ehhez nincs jogod!`});

        const name = args[0];

        if(!name) return message.channel.send({content: 'Add meg a parancs nevét, hogy ki tudjam törölni!'});

        const data = await schema.findOne({ Guild: message.guild.id, Command: name });
        if(!data) return message.channel.send({content: 'Ez a parancs nem létezik!'});
        await schema.findOneAndDelete({ Guild: message.guild.id, Command: name });
        message.channel.send({content: 'Töröltem az egyedi parancsot!'});
    }
}