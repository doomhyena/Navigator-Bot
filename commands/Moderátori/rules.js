const Discord = require(`discord.js`);

module.exports = {
    name: "rules",
    category: "Moderátori",
    usage: "",
    description: "Egy alap szabályzatot küld",
    aliases: ["szabályzat", "szabályok"],
    run: async(bot, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setTitle(`Szabályzat:`)
        .setColor(`RANDOM`)
        .setDescription(
        `**Minden felhasználónak be kell tartania a Discord irányelveit:**\nhttps://discordapp.com/guidelines
        \n**1.** A spam és a hirdetés tiltott!
        **2.** Viccelődni a másikkal csak mértékkel!
        **3.** Rang kéregetése tilos! 
        **4.** A véleményed kifejtése megengedett, de kultúráltan!
        **5.** Ranggal való visszaélés  szigorúan TILOS!
        **6.** Kultúrált vitatkozás engedélyezett, anyázás. más családjának szidása tilos!
        **7.** Tilos a szexista, rasszista vagy homofób beszélgetés. 
        **8.** Ne oszd meg a saját személyes adatait!
        **9.** Tilos az NSFW- vagy obszcén tartalom!
        **10.** Bánj mindenkivel tisztelettel!`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send(embed)
    }
}