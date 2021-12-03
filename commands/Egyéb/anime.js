const Discord = require(`discord.js`);
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
const aq = require('animequote');

module.exports = {
    name: "anime",
    aliases: [""],
    categories: "Egyéb",
    permissions: "",
    description: "Kiírja az anime címét",
    cooldown: "",
    usage: "<anime cím>",
    run: async(bot, message, args) => {
        if (!args[0]) {
            return message.channel.send({content: "Kérlek adja meg egy animét!"});
             
           }
               const search = message.content.split(/\s+/g).slice(1).join(" ");
               kitsu.searchAnime(search).then(async result => {
                   if (result.length === 0) {
                       return message.channel.send({content: `Nem találtam ilyen animét: **${search}**!`});
                   }
                 
                 const anime = result[0]
       
                   let embed = new Discord.MessageEmbed()
                       .setColor('#FF2050')
                       .setAuthor(`${anime.titles.english ? anime.titles.english : search} | ${anime.showType}`, anime.posterImage.original)
                       .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                       .addField('❯\u2000\Információk:', `•\u2000\**Japán név:** ${anime.titles.romaji}\n\•\u2000\**Korhatár:** ${anime.ageRating}\n\•\u2000\**NSFW:** ${anime.nsfw ? 'Igen' : 'Nem'}`, true)
                       .addField('❯\u2000\Statisztika:', `•\u2000\**Átlag értékelés:** ${anime.averageRating}\n\•\u2000\**Rangsor:** ${anime.ratingRank}\n\•\u2000\**Népszerűségi rangsor:** ${anime.popularityRank}`, true)
                       .addField('❯\u2000\Státusz:', `•\u2000\**Epizódszám:** ${anime.episodeCount ? anime.episodeCount : 'Ismeretlen'}\n\•\u2000\**Kezdet:** ${anime.startDate}\n\•\u2000\**Vége:** ${anime.endDate ? anime.endDate : "Még fut"}`, true)
                   
                       .setThumbnail(anime.posterImage.original, 100, 200);
                 
       
                   return message.channel.send({ embeds: [embed] })
               }).catch(err => {
                   console.log(err) //cathing error
                   return message.channel.send(`No results found for **${search}**!`);
               });
    }
}