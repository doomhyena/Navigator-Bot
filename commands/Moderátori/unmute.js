const Discord = require(`discord.js`);

module.exports = {
    name: "unmute",
    aliases: [""],
    categories: "Moderátori",
    permissions: ["Rangok kezelése", "Üzenetek kezelése"],
    description: "Ezzel a parancsal tudod az adott felhasználó némétását feloldani",
    cooldown: "",
    usage: "<@felhasználó> <rang ID>",
    run: async(bot, message, args) => {
        if(!message.member.permissions.has(["MANAGE_ROLES", "MANAGE_MESSAGES"])) return message.reply({content: "Nincs megfelelő jogsultságod a használatához!"})
        const felh = message.mentions.members.first();
        if(!felh) return message.channel.send({content: ':x: Hiba! Nem említettél meg egyetlen egy felhasználót sem!'})
        const roletofind = args.slice(1).join(" ")
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if(!role) return message.reply({content: ":X: Hiba! Nem adtad meg a rang ID-jét!"})
        await felh.roles.remove(role) 
        message.channel.send({ content: `${felh.user.username} feloldva a büntetése alól! Reméljük, hogy legközelebb jobban figyel a szabályzatra!`})
    }
}