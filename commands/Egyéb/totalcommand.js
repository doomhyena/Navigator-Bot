const Discord = require(`discord.js`);

module.exports = {
    name: "totalcommand",
    aliases: ["totalcom", "totalcommands"],
    categories: "Általános",
    permissions: "",
    description: "Kiírja, hogy a bot hány parancsa van a botnak",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        try {
            let commands =  [...new Set(bot.commands)] 
            
            let totalEmbed = new Discord.MessageEmbed()
                .setTitle(`Össze elérhető parancs:`)
                .setColor("#0099ff")
                .setDescription(`**${commands.length}**`)
            return message.channel.send({ embeds: [totalEmbed] });
        } catch (err) {
            console.log(err);
            return message.reply({ content: `Szopó,  valami gáz van!` });
        }
    }
}