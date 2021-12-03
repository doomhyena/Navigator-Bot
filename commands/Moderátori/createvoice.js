const Discord = require(`discord.js`);

module.exports = {
    name: "createvoice",
    aliases: ["createvc"],
    categories: "Moderátori",
    permissions: "Csatornák kezelése",
    description: "Létrehoz egy voice csatornát",
    cooldown: "",
    usage: "<Csatorna neve>",
    run: async (bot, message, args) => {
        if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send({content: `Nincs megfelelő jogod hozzá!`}).then(m => m.delete ({ timeout: 7000 })); 

        if(!args[0]) return message.channel.send({content: 'Hiba ``Használd: =createvoice <Csatorna Neve>``'}).then(m => m.delete ({ timeout: 7000 }));
        
        message.guild.channels.create(args.slice(0).join(" "), {type: 'voice'}), message.channel.send({content: 'A csatorna elkészült, görgess fel.'}).then(m => m.delete ({ timeout:7000 }));
    }
}