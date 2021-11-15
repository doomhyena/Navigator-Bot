const Discord = require(`discord.js`);

module.exports = {
    name: "generator",
    aliases: ["generátor"],
    categories: "Fun",
    permissions: "",
    description: "Jelszót generál.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let code = '';
        let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(var i = 0; i < 10; i++){
            code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    let embed = new Discord.MessageEmbed()
    .setTitle('Kód generátor')
    .setColor("RANDOM")
    .addField('Itt a kód sorod:', `${code}`)
    .setFooter(bot.user.username, bot.user.displayAvatarURL())
    .setTimestamp();
    
    
    message.author.send({embeds: [embed]})
    message.channel.send({content: `A generált jelszavad el lett küldve privátba!`})
    }
}