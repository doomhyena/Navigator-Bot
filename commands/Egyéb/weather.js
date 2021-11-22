const Discord = require(`discord.js`);
const weather = require('weather-js');

module.exports = {
    name: "weather",
    aliases: [""],
    categories: "Info",
    permissions: "",
    description: "Lekéri az időjárást az adott városban",
    cooldown: "",
    usage: "<városnév>",
    run: async (bot, message, args) => {
        if(args[0]){
            weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
                if (err) message.reply(err);
    
                if(result.length === 0){
                    message.reply("Kérlek adj meg egy létező település nevet!")
                    return;
                }
    
                let current = result[0].current;
                let location = result[0].location;
    
                let WeatherEmbed = new Discord.MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Időjárás itt: ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor("GREEN")
                .addField("Időzóna:", `UTC${location.timezone}`, true)
                .addField("Fokozat típusa:", `${location.degreetype}`, true)
                .addField("Hőfok", `${current.temperature}°C`, true)
                .addField("Hőérzet:", `${current.feelslike}°C`, true)
                .addField("Szél", `${current.winddisplay}`, true)
                .addField("Páratartalom:", `${current.humidity}%`, true)
                .setFooter(bot.user.username, bot.user.displayAvatarURL())
                .setTimestamp();
    
                message.channel.send({embeds: [WeatherEmbed]});
            })
    
        } else {
            message.reply("Kérlek adj meg egy település nevet!")
        }
    }
}