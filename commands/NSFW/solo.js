const Discord = require(`discord.js`);
const NSFW = require(`discord-nsfw`);
const nsfw = new NSFW();

module.exports = {
    name: "solo",
    aliases: ["szoló"],
    categories: "NSFW",
    permissions: "",
    description: "Szoló NSFW képek",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
                
        if (!message.channel.nsfw) {

            return message.reply(`Ezt a parancsot csakis NSFW csatornában használhatod!`)
            .then(msg => {
            msg.delete({ timeout: 3000 })
            });
        }

        const image = await nsfw.solo();
        const embed = new Discord.MessageEmbed()
            .setTitle(`Szólós képek`)
            .setColor("GREEN")
            .setImage(image)
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
            .setTimestamp();
            message.channel.send({embeds: [embed]});
    }
}