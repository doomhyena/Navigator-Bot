const Discord = require(`discord.js`);

module.exports = {
    name: "game",
    aliases: ["játék"],
    categories: "Fun",
    permissions: "",
    description: "Játékot ajánl",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let replies = [`PUBG`, `Among US`, `CS:GO`, `Sea of Thieves`, 
        `Apex Legends`, `Brawhalla`, `Minecraft`, `FIFA 20`, `Fortnite`, 
        `Rocket League`, `GTA:SA`, `GTA:V`, `MTA`, `Crossout`, `Call of Duty`,
        `Battlefront`,  `Roblox`, `Fallout`, `DOOM`, `Terraria`, `Dark Souls`,
        `7 days to die`]
        let result = Math.floor((Math.random() * replies.length));

        let embed = new Discord.MessageEmbed()
        .setTitle(`**Ajánlott játék**`)
        .setColor(`YELLOW`)
        .addField(`Neked ajánlott játék:`, `${replies[result]}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        
        message.channel.send({embeds:[embed]})
    }
}