const Discord = require(`discord.js`);

module.exports = {
    name: "anal",
    aliases: ["cici", "csöcs"],
    categories: "NSFW",
    permissions: "",
    description: "Cicis képeket küld.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
                
        if (!message.channel.nsfw) {

            return message.reply(`Ezt a parancsot csakis NSFW csatornában használhatod!`)
            .then(msg => {
            msg.delete({ timeout: 3000 })
            });
        }

        const image = await nsfw.boobs();
        const embed = new Discord.MessageEmbed()
            .setTitle(`Cici képek`)
            .setColor("GREEN")
            .setImage(image)
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
            .setTimestamp();
            message.channel.send({embeds: [embed]});
    }
}