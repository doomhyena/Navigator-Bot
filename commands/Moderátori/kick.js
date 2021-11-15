const Discord = require("discord.js");
module.exports = {
    name: "kick",
    category: "moderator",
    description: "Kick parancs.",
    usage: "<@Felhasználó>",

    name: "kick",
    aliases: [""],
    categories: "Moderátori",
    permissions: "Tagok kirúgása",
    description: "Kick parancs.",
    cooldown: 5,
    usage: "<@Felhasználó>",
    run: async (bot, message, args) => {
        let prefix = "="

            if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Ehhez nincs jogod!")
            let kick_user = message.mentions.members.first();
            if(args[0] && kick_user){
    
                if(args[1]){
    
                    let KickEmbed = new Discord.MessageEmbed()
                    .setTitle("KICK")
                    .setColor("RED")
                    .setDescription(`**Kickelte:** ${message.author.tag}\n**Kickelve lett:** ${kick_user.user.tag}\n**Kick indoka:** ${args.slice(1).join(" ")}`)
    
                message.channel.send({embeds: [KickEmbed]});
    
                    kick_user.kick(args.slice(1).join(" "));
    
                } else {
                let parancsEmbed = new Discord.MessageEmbed()
                .setTitle("Parancs használata:")
                .addField(`\`${prefix}kick <@név> [indok]\``, "˘˘˘")
                .setColor("BLUE")
                .setDescription("HIBA: Kérlek adj meg egy indokot!!")
    
                message.channel.send({embeds: [parancsEmbed]});
                }
    
            } else {
                let parancsEmbed = new Discord.MessageEmbed()
                .setTitle("Parancs használata:")
                .addField(`\`${prefix}kick <@név> [indok]\``, "˘˘˘")
                .setColor("BLUE")
                .setDescription("HIBA: Kérlek említs meg egy embert!")
    
                message.channel.send({embeds: [parancsEmbed]});
    
            }
        
    }
}