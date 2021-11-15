const Discord = require(`discord.js`);

module.exports = {
    name: "nuke",
    aliases: [""],
    categories: "Moderátori",
    permissions: "Üzenetek kezelése",
    description: "Kitörli az egész csatornát ahova beírják mindenestül.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send({content: `Nincs jogod ezt a parancsot használni!`});

        message.channel.clone().then((ch) => {
            ch.setParent(message.channel.parent.id)
            ch.setPosition(message.channel.position)
            message.channel.delete()

            let embed = new Discord.MessageEmbed()
            .setColor(`RED`)
            .setDescription(`A csatornába atombomba robbant, ezért minden üzenet megsemmisült!`)
            .setImage(`https://images-ext-2.discordapp.net/external/o_7GqHSgStOZ8rmCvTM2mkrCtlQAzxh6dW-UsEUcFrA/https/i.gifer.com/6Ip.gif`)
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
            .setTimestamp()

            ch.send({embeds: [embed]})
        })
    }
}