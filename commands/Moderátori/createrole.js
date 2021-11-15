const Discord = require("discord.js");

module.exports = {
    name: "createrole",
    aliases: ["creater"],
    categories: "Moderátori",
    permissions: "Rangok kezelése",
    description: "Rangot hoz létre",
    cooldown: "",
    usage:"<rangnév>",
    run: async (bot, message, args) => {
        if(message.guild.member(bot.user).hasPermissions(`ADMINISTRATOR`)){
            if(message.member.hasPermission(`MANAGE_ROLES`)){
                if(args[0]){
                    message.guild.roles.create({
                        "name": args[0],
                    }).then(message.channel.send({content: `${message.author.tag}  létrehozta a következő rangot: ${args[0]}`}))
                } else message.reply({content: `Helytelen használat! Használat: =createrole <rang neve>`})
            } else message.reply({content:`Nincs jogod ehhez! Szükséges jog: Rangok kezelése`})
        } else message.reply({content: `Nincs joga a botnak ehhez! Szükséges jog: Adminisztrátor`})
    } 
}