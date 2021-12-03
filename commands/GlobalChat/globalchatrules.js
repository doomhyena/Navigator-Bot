const Discord = require(`discord.js`);

module.exports = {
    name: "globalchatrules",
    aliases: ["gcr"],
    categories: "Globalchat",
    permissions: "Üzenetek kezelése",
    description: "A Globalchat szabályzatot küldi el.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
                if (!message.member.permissions.has("MANAGE_MESSAGES")) 
        return message.reply({content: "Nincs jogod ezt a parancsot használni!"})

        let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setTitle(`Szabályzat:`)
        .setColor(`RANDOM`)
        .setDescription(
        `**Minden felhasználónak be kell tartania a Discord irányelveit:**\nhttps://discordapp.com/guidelines
        \n**1.** A spam és a hirdetés tiltott!
        **2.** Rang kéregetése tilos! 
        **3.** A véleményed kifejtése megengedett, de kultúráltan!
        **4.** Ranggal való visszaélés  szigorúan TILOS!
        **5.** Kultúrált vitatkozás engedélyezett, anyázás más családjának szidása tilos!
        **6.** Tilos a szexista, rasszista vagy homofób beszélgetés. 
        **7.** Tilos az NSFW- vagy obszcén tartalom!
        **8.** Az adathalász linkek bármilyen formája beküldése a szerverte **TILOS** és bannal jár!
        **9.** A raidelésben való részvétel tilos!
        **10.** Tilos a felhasználók felesleges pingelése.
        **11.** Tilos a körüzenetek megosztása!`
        )
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({embeds: [embed]}) 
    }
}