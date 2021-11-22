const Discord = require(`discord.js`);

module.exports = {
    name: "voice",
    aliases: [""],
    categories: "Általános",
    permissions: "",
    description: "Privát hangcsatornát hoz létre.!",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
            
    message.delete()
    message.guild.channels.create(`Privát`, {
        type : 'voice',
        permissionOverwrites : [
            {
                id : message.guild.id,
                allow : [`VIEW_CHANNEL`, `CONNECT`, `SPEAK`, `MOVE_MEMBERS`],
                deny :  [`MUTE_MEMBERS`, `CONNECT`, `SPEAK`, `MOVE_MEMBERS`]
            },
            {
                id : message.author.id,
                allow : [`VIEW_CHANNEL`, `CONNECT`, `SPEAK`, `MOVE_MEMBERS`],
                deny :  [`MUTE_MEMBERS`]
            }
        ]
    }).then(async channel=> {
        message.reply({ content: `Elkészült a privát szobád: <#${channel.id}>` })
    })
    }
}