const Discord = require(`discord.js`);

module.exports = {
    name: "ivh",
    aliases: ["igaz-vagy-hamis"],
    categories: "Fun",
    permissions: "",
    description: "Megmondja a bot, hogy igaz, vagy hamis az állításod",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let valaszto = ["Igaz", "Hamis"]
        const alma = args.join(" ");
        let embed = new Discord.MessageEmbed()
        .setTitle("Igaz vagy Hamis?")
        .setColor("DARK_GOLD")
        .setDescription(`**Kijelentés:** \n${alma} \n**Válasz:** \n${valaszto[Math.floor(Math.random() * valaszto.length)]}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({ embeds: [embed] });
    }
}