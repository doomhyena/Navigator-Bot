const Discord = require(`discord.js`);
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: "porngif",
    aliases: ["pgif", "pg"],
    categories: "NSFW",
    permissions: "",
    description: "Neko ciciket küld",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
                
        if (!message.channel.nsfw) {

            return message.reply(`Ezt a parancsot csakis NSFW csatornában használhatod!`)
            .then(msg => {
            msg.delete({ timeout: 3000 })
            });
        }

        const image = await nsfw.pgif();
        const embed = new Discord.MessageEmbed()
            .setTitle(`Pornó Gif`)
            .setColor("GREEN")
            .setImage(image)
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
            .setTimestamp();
            message.channel.send({embeds: [embed]});
    }
}