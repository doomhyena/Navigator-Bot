const Discord = require(`discord.js`);

module.exports = {
    name: "reverse",
    category: "Fun",
    description: "Visszafelé írja le amit megadsz",
    usage: "<Szöveg>",
    run: async(bot, message, args) => {
        message.delete();
        
        const text = args.join(" ")
        if(!text) return message.reply({content: "Kérlek adj meg egy szöveget!"})
        let Rarray = text.split("")
        let reverseArray = Rarray.reverse()
        let result = reverseArray.join("")
        message.channel.send({content: result})
    }
}