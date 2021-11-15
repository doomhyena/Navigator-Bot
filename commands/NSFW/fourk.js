const Discord = require(`discord.js`);
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: "fourk",
    aliases: [""],
    categories: "NSFW",
    permissions: "",
    description: "4K NSFW képeket küld",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
                
        if (!message.channel.nsfw) {

            return message.reply(`Ezt a parancsot csakis NSFW csatornában használhatod!`)
            .then(msg => {
            msg.delete({ timeout: 3000 })
            });
        }

        const image = await nsfw.fourk();
        const embed = new Discord.MessageEmbed()
            .setTitle(`4K képek`)
            .setColor("GREEN")
            .setImage(image)
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
            .setTimestamp();
            message.channel.send({embeds: [embed]});
    }
}