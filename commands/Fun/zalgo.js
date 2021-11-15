const Discord = require(`discord.js`);
const Zalgo = require("to-zalgo");

module.exports = {
    name: "zalgo",
    category: "Fun",
    usage: "",
    description: "",
    aliases: [""],
    run: async(bot, message, args) => {
        const zalgo = Zalgo(args.join(" "))
        if (zalgo.includes("@")) return interaction.followUp("Légyszi ne pingelj...!");

        let embed = new Discord.MessageEmbed()
        .setTitle(`Zalgo szöveg`)
        .setColor(`RANDOM`)
        .addField(`Zalgo szöveged:`, `\`\`\`\n${zalgo}\`\`\``)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({embeds: [embed]})
    }
}