const Discord = require(`discord.js`);

module.exports = {
    name: "removerole",
    category: "Moderátori",
    usage: "<@felhasználó>, <@rang>",
    description: "",
    aliases: [""],
    run: async(bot, message, args) => {
        if(!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send({content: 'Nincs jogod ehhez!'})

        const target = message.mentions.members.first()
        if(!target) return message.channel.send({content: 'Nem jelölted meg a felhasználót!'})
        const role = message.mentions.roles.first() 
        if(!role) return message.channel.send({content: 'Nem jelölted meg a felhasználót!'}) 

        await target.roles.remove(role) 
        message.channel.send({content: `${target.user.username} levettem róla a rangot!`}) 
    }
}