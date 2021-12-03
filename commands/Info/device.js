const Discord = require(`discord.js`);

module.exports = {
    name: "device",
    aliases: ["devices"],
    categories: "Info",
    permissions: "",
    description: "Kiírja, hogy hol vagy elérhető",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        const user = message.mentions.users.first() || message.author;
        const devices = user.presence?.clientStatus || {};

        const description = () => {
                const entries = Object.entries(devices).map(
                    (value, index) => `${index + 1}) ${value[0][0].toUpperCase()}${value[0].slice(1)}`)
                .join("\n");
                return `**Devices:\n${entries}**`;
        };
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(user.tag, user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .addField(`Devices logged in: `,'➡️ ' + Object.entries(devices).length)
        .setDescription(`${description()}`);

        message.channel.send({ embeds: [embed] });
    }
}