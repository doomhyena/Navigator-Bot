const Discord = require(`discord.js`);
const db = require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: "clearwarns",
    aliases: ["clw"],
    categories: "Moderátori",
    permissions: "Üzenetek kezelése",
    description: "Az eddig szerzett figyelmeztetések törlése",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send({content: 'Nincs hozzáférésed ehhez a parancshoz!'})
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send({content: 'Nem említetted meg a felhasználót!'})
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                await db.findOneAndDelete({ user : user.user.id, guildid: message.guild.id})
                message.channel.send({content:`A figyelmeztetések törölve lettek, ${user.user.tag} számára!`})
            } else {
                message.channel.send({content: 'Az illetőnek nincsen figyelmeztetése ezen a szerveren!'})
            }
        })
    }
}