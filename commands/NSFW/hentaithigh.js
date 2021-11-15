const Discord = require(`discord.js`);
const NSFW = require(`discord-nsfw`);
const nsfw = new NSFW();

module.exports = {
    name: "hentaithigh",
    aliases: ["hh"],
    categories: "NSFW",
    permissions: "",
    description: "Hentai-os combokat küld",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
                
        if (!message.channel.nsfw) {

            return message.reply(`Ezt a parancsot csakis NSFW csatornában használhatod!`)
            .then(msg => {
            msg.delete({ timeout: 3000 })
            });
        }

        const image = await nsfw.hentaithigh();
        const embed = new Discord.MessageEmbed()
            .setTitle(`Hentai-os comb képek`)
            .setColor("GREEN")
            .setImage(image)
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
            .setTimestamp();
            message.channel.send({embeds: [embed]});
    }
}