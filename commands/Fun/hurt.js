const Discord = require(`discord.js`);

module.exports = {
    name: "hurt",
    aliases: ["ütés"],
    categories: "",
    permissions: "",
    description: "Megtudsz valakit ütni!",
    cooldown: "",
    usage: "<@felhasználó>",
    run: async(bot, message, args) => {
        let user = message.mentions.users.first()

        if(user){
            message.channel.send({content: `${message.author} megütötte ${user}-t`})
        }
        if(!user){
            let userembed = new Discord.MessageEmbed()
            .setTitle(`HIBA`)
            .setColor(`RED`)
            .addField(`Nem adtad meg, hogy kit szeretnél megütni`, `**Parancs használata:** !!hurt <@név>**`)
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
            .setTimestamp();
          
            message.channel.send({embeds: [userembed]})
        }
    }
}