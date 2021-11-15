const Discord = require(`discord.js`);
const mongoose = require('mongoose');
const prefixSchema = require('../../models/prefix');

module.exports = {
    name: "setprefix",
    category: "Beállítások",
    usage: "<prefix>",
    description: "Ezzel a parancsal tudod beállítani a prefixedet",
    aliases: ["sp"],
    run: async(bot, message, args) => {
        const res = await args.join(" ")
        if(!res) return message.channel.send({content: 'Add meg a prefixet amire meg szeretnéd változtatni!'})
        prefixSchema.findOne({ Guild : message.guild.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                prefixSchema.findOneAndDelete({ Guild : message.guild.id })
                data = new prefixSchema({
                    Guild : message.guild.id,
                    Prefix : res
                })
                data.save()
                message.channel.send({content: `A prefix frissítve lett a következőre: **${res}**`})
            } else {
                data = new prefixSchema({
                    Guild : message.guild.id,
                    Prefix : res
                })
                data.save()
                message.channel.send({content: `Az egyéni prefix ezen a szerveren a következőre lett állítva **${res}**`})
            }
        })
    }
}