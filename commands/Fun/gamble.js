const Discord = require(`discord.js`);
const Fs = require('fs');

module.exports = {
    name: "gamble",
    aliases: ["szerencsejatek"],
    categories: "Fun",
    permissions: "",
    description: "Kipróbálhatod a szerencsejátékot!",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
        let sum = Math.floor(Math.random() * 100 ) + 1;

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField("Gamble" , `A mostani kidobott számod: ${sum}`);
    
          if(sum == 10) embed.addField("Mostani szerencse:", "Nagyon balszerencsés voltál!")
          else if(sum < 30) embed.addField("Mostani szerencse:" , "Balaszerencsés voltál!")
          else if(sum < 90) embed.addField("Mostani szerencse:", "Átlagos")
          else if(sum == 90) embed.addField("Mostani szerencse:", "Szerencsés voltál!")
          else embed.addField("Mostani szerencse:" , "Nagyon szerencsés voltál!")
    
          .setFooter(bot.user.username, bot.user.displayAvatarURL())
          .setTimestamp();
    
          message.channel.send({embeds: [embed]});
    }
}