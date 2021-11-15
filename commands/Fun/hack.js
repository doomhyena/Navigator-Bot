const Discord = require(`discord.js`);
const ms = require("ms")

module.exports = {
    name: "hack",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Fel tudsz másokat törni",
    cooldown: "",
    usage: "<@felhasználó>",
    run: async(bot, message, args) => {
        let valaki = message.mentions.users.first()
        
        if (!valaki) {
            return message.channel.send({content: "Jelölj meg valakit, hogy fel tudj törni!"});
        }
        if (valaki.id === message.author.id) {
            return  message.channel.send({content: "A saját fiókodat nem tudod feltörni!"});
        }
        let code = '';
        let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(var i = 0; i < 7; i++){
            code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    
    }
            let hackembed = new Discord.MessageEmbed()
            .setTitle(`Információk`)
            .setThumbnail(`${valaki.displayAvatarURL()}`)
            .setColor(`RED`)
            .addField(`Email cím:`, `${valaki}@gmail.com`)
            .addField(`jelszó:`, `${code}`)
            .setFooter(`Hacker: ${message.author.tag}`, message.author.displayAvatarURL())
            .setTimestamp()

            message.channel.send({embeds: [hackembed]})
    }
}