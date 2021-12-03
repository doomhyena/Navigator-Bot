const Discord = require(`discord.js`);
const ms = require('ms')

module.exports = {
    name: "tempmute",
    aliases: ["tm"],
    categories: "Moderátori",
    permissions: ["Rangok kezelése", "Üzenetek kezelése"],
    description: "Ezzel a parancsal tudod az adott felhasználó némétását feloldani",
    cooldown: "",
    usage: "<@felhasználó> <idő> <rang ID>",
    run: async(bot, message, args) => {
        if(!message.member.permissions.has(["MANAGE_ROLES", "MANAGE_MESSAGES"])) return message.reply({content: "Nincs megfelelő jogsultságod a használatához!"})
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.channel.send({content: ':x: Hiba! Nem említettél meg egyetlen egy felhasználót sem!'})
        if(!time) return message.channel.send({content: ':x: Hiba! Nem adtál meg egy időintervallumot!'})
        const role = message.guild.roles.cache.find(r => r.id === roletofind)
        if(!role) return message.reply({content: ":X: Hiba! Nem adtad meg a rang ID-jét!"})
        await Member.roles.add(role)
        message.channel.send({content: `${Member.displayName} megkapta méltó büntetését!`})

        setTimeout(async () => {
            await Member.roles.remove(role)
            message.channel.send({content: `${Member.displayName}, feloldva a büntetése alól! Reméljük, hogy legközelebb jobban figyel a szabályzatra!`})
        }, ms(time))
    }
}