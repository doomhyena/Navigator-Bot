const Discord = require(`discord.js`);
const db = require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: "removewarn",
    category: "Moderátori",
    usage: "",
    description: "",
    aliases: ["rmvwarn"],
    run: async(bot, message, args) => {
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send({content: 'Nincs hozzáférésed ehhez a parancshoz!'})
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send({content: 'Nem említetted meg a felhasználót!'})
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                let number = parseInt(args[1]) - 1
                data.content.splice(number, 1)
                message.channel.send({content: "A figyelmeztetés törölve lett!"})
                data.save()
            } else {
                message.channel.send({content: "Ennek a felhasználónak nincsen egyetlen egy figyelmeztetése ezen a szerveren%"})
            }
        })
    }
}