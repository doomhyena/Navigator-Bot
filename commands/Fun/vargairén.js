const Discord = require(`discord.js`);

module.exports = {
    name: "vargairén",
    category: "Fun",
    description: "Varga Irénes aranyköpéseket ír ki",
    usage: "",
    run: async(bot, message, args) => {
        let replies = [`MATESZOPSZ MÁTÓL TE FOGSZ SZOPNI!`,  `SELENA GOMEZ GÚNYOLÓDIK RAJTAM A FÉCBÚKON!`,
    `FŐZTEM DRÁGÁIM, LACIKA KEDVENCÉT!`,`KISAPÁÁÁÁM!`, `KÉSZÜLJ FEL DE KEGYETLENÜL!`, 
    `MOST A HÉTEN NEKED ANNYI!`, `MUTASD MEG HOGY KI VAGY!`, `AZÉRT IS MATESZOPSZ!`,
    `KÜLDJETEK PÉNZT, 200EZER KÉNE!`, `DRÁGÁIM, INNENTŐL A SZELFI ÚJRA 500FT!`,
    `NE ZAKLASSÁ!`, `OTT LESZEEK A NYUGATI PÁLYAUDVARON!`, `FEDD FŰ MAGAD!`, 
    `MATESZOPSZ!`, `CSÖNDBE LEGYÉL!`]

        let result = Math.floor((Math.random() * replies.length));

        let embed = new Discord.MessageEmbed()
        .setTitle(`**Irénke**`)
        .setColor(`RANDOM`)
        .addField(`Irénke aranyköpése:`, `${replies[result]}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
                
        message.channel.send({embeds: [embed]})

    }
}