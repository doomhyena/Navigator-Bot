const { MessageAttachment } = require('discord.js')
const fs = require("fs");

module.exports = {
    name: "close",
    aliases: [""],
    categories: "Hibajegy",
    permissions: "",
    description: "Ezzel a parancsal tudod bezárni a Hibajegyedet!",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        if(message.channel.parentID !== '896027210039820338') return message.channel.send('Ezt a parancsot csak egyszer tudod használni!');
        const transcriptChannel = message.guild.channels.cache.get('884025935899271216') //Ez írja ki, hogy a bot bezárta a ticketet és elküldi a beszélgetést
        message.channel.send({content: 'A szoba 5 másodperc múlva be lesz zárva!'})
        setTimeout(() => {
            message.channel.delete().then(async ch=> {
                bot.ticketTranscript.findOne({ Channel : ch.id }, async(err, data) => {
                    if(err) throw err;
                    if(data) {
                        fs.writeFileSync(`../${ch.id}.txt`, data.Content.join("\n\n"))
                        transcriptChannel.send({content: `${message.guild.members.cache.get(ch.name).user.username} bezárva!`})
                        await transcriptChannel.send(new MessageAttachment(fs.createReadStream({content: `../${ch.id}.txt`})));
                        bot.ticketTranscript.findOneAndDelete({ Channel : ch.id })
                    }
                })
            })
        }, 5000)
    }
}