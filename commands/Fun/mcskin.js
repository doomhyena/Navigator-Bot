const Discord = require(`discord.js`);
const mcapi = require('mcapi')

module.exports = {
    name: "mcskin",
    aliases: ["minecraft-skin"],
    categories: "Fun",
    permissions: "",
    description: "Lekérheted a Minecraft skinedet!",
    cooldown: "",
    usage: "<felhasználónév>",
    run: async(bot, message, args) => {
        try{
            let uuid = await mcapi.usernameToUUID(`${args.join(" ")}`)
            let mcembed = new Discord.MessageEmbed()
            .setTitle(`Minecraft Skin`)
            .setColor("RED")
            .addFields(
                {
                    name: '**Játékosnév**',
                    value: `${args.join(" ")}`,
                    inline: true
                },
                {
                    name: '**UUID**',
                    value: `${uuid}`,
                    inline: true
                },
                {
                    name: '**Letöltés**',
                    value: `[Kattints a letöltésért](https://minotar.net/download/${args.join(" ")})`,
                    inline: true
                }
            )
            .setImage(`https://minecraftskinstealer.com/api/v1/skin/rende/fullbody/${args.join(" ")}/700`)
            .setThumbnail(`https://minotar.net/cube/${args.join(" ")}/100.png`)
            .setFooter(`Parancsot lekérte: ${message.author.tag}`, message.author.displayAvatarURL())
            
            message.channel.send({embeds: [mcembed]})
        } catch(e) {
            message.channel.send('A játékosnevet nem találtuk!')
            console.log(e)
        }
    }
}