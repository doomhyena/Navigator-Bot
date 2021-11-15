const Discord = require(`discord.js`);

module.exports = {
    name: "spongeburn",
    aliases: ["sponge-burn"],
    categories: "Képek",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "<szöveg>",
    run: async(bot, message, args) => {
        const text = args.slice(0).join(' ')

        if (!text)
        return message.channel.send("Írj egy szöveget amit megtudod jeleníteni!");
  
          const finalLink = `https://api.leoapi.xyz/image/spongebob-burn?text=${encodeURIComponent(text)}`
          const attach = new Discord.MessageAttachment(finalLink, 'spongebob.png', null)

          message.channel.send({content: attach})
    }
}