const Discord = require("discord.js");

module.exports = {
    name: "clear",
    aliases: ["cl"],
    categories: "Moderátori",
    permissions: "Üzenetek kezelése",
    description: "Üzeneteket töröl. Maximum 100 üzenetet tudsz törölni",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send({content: `Nincs jogod ezt a parancsot használni, ${message.author.username}!`});

        if (!args[0]) {
            return message.channel.send({content: `Adj meg 1 számot 1-től 100-ig`})
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);
        const embed = new Discord.MessageEmbed()
            .setTitle(`Üzenetek törölve`)
            .setAuthor(message.author.tag)
            .setColor('#f2f2f2')
            .addField(`Sikeresen törölve`, `${deleteAmount} üzenet`)
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
            .setTimestamp();
                message.channel.send({embeds: [embed]})
    }
}