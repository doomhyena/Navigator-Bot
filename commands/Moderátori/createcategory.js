const Discord = require(`discord.js`);

module.exports = {
    name: "createcategory",
    aliases: ["createc"],
    categories: "Moderátori",
    permissions: "Csatornák kezelése",
    description: "Csinál egy kategóriát",
    cooldown: "",
    usage: "<kategória neve>",
    run: async (bot, message, args) => {
        if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send({content: `Nincs megfelelő jogod hozzá!`}).then(m => m.delete ({ timeout: 7000 })); 
    
        if(!args[0]) return message.channel.send({content: 'Hiba ``Használd: =createcategory <Kategória Neve>``'}).then(m => m.delete ({ timeout: 7000 }));
    
        message.guild.channels.create(args.slice(0).join(" "), {type: 'category'}), message.channel.send({content: 'A kategória elkészült, görgess le.'}).then(m => m.delete ({ timeout:7000 }));
    }
}