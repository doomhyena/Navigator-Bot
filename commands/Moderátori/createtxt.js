const Discord = require(`discord.js`);

module.exports = {
    name: "createtxt",
    aliases: ["createt"],
    categories: "Moderátori",
    permissions: "",
    description: "Csinál egy szöveges csatornát",
    cooldown: "",
    usage: "<csatorna neve>",
    run: async (bot, message, args) => {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send({content: `Nincs megfelelő jogod hozzá!`}).then(m => m.delete ({ timeout: 7000 })); 

        if(!args[0]) return message.channel.send({content: 'Hiba ``Használd: =createtext <Csatorna Neve>``'}).then(m => m.delete ({ timeout: 7000 }));
    
        message.guild.channels.create(args.slice(0).join(" "), {type: 'text'}), message.channel.send({content: 'A csatorna elkészült, görgess fel.'}).then(m => m.delete ({ timeout:7000 }));
    }
}