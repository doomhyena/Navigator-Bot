const Discord = require(`discord.js`);

module.exports = {
    name: "firstmessage",
    aliases: [""],
    categories: "",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        const fetchMessages = await message.channel.messages.fetch({
            after: 1,
            limit: 1,
          });
          const msg = fetchMessages.first();

          let embed = new Discord.MessageEmbed()
          .setTitle("A szerver első üzenete")
          .setColor("RANDOM")
          .setDescription(`**Üzenet:** \n${msg.content} \n**Üzenet küldő:** \n${msg.author} \n **Üzenet lüldési ideje:** \n${msg.createdAt.toLocaleDateString()}`)
          .setFooter(bot.user.username, bot.user.displayAvatarURL())
          .setTimestamp();
          
          message.channel.send({ embeds: [embed] });
    }
}