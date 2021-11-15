const Discord = require(`discord.js`);
const prefix = require('../../cfg.json').prefix
const mongoose = require('mongoose');
const { confirmation } = require('@reconlx/discord.js')
const prefixSchema = require('../../models/prefix');


module.exports = {
    name: "resetprefix",
    category: "Beállítások",
    usage: "",
    description: "Kitörölöheted a beállított prefixet!",
    aliases: [""],
    run: async(bot, message, args) => {
        message.channel.send({content: "Biztos, hogy vissza akarod állítani a prefixet?"}).then(async (msg) => {
            const emoji = await confirmation(msg, message.author, ['✅', '❌'], 10000)
            if(emoji === '✅') {
                msg.delete()
                await prefixSchema.findOneAndDelete({ Guild : message.guild.id })
                message.channel.send({content: `A prefix újra a bot alap prefixe lett. Prefix: ${prefix}`})
            }
            if(emoji === '❌') {
                msg.delete()
                message.channel.send({content: 'A prefix nem lett visszaállítva a bot alap prefixére.'})
            }
        })
    }
}