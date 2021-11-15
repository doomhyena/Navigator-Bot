const Discord = require(`discord.js`);;

module.exports = {
    name: "addrole",
    aliases: [""],
    categories: "Moderátori",
    permissions: "Rangok kezelése",
    description: "Rangokat tudsz odadni másoknak",
    cooldown: "",
    usage: "<@felhasználó>, <@rang>",
    run: async(bot, message, args) => {
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply({content: 'Nincs jogod ehhez!'});

        const target = message.mentions.members.first();
        if(!target) return message.channel.send({ content: 'Nem jelölted meg a felhasználót!' });
        
        const role = message.mentions.roles.first();
        if(!role) return message.channel.send({ content: 'Nem jelölted meg a felhasználót!Nem jelölted meg a felhasználót!!' });
        
        await target.roles.add(role) 
        message.channel.send({ content: `${target.user.username}-nak odaadtam a rangot!`})
    }
}