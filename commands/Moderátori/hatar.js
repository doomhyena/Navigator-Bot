const Discord = require(`discord.js`);

module.exports = {
    name: "hatar",
    aliases: [""],
    categories: "",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        message.delete()
        if (message.author != '277575599352971265') return message.reply('Nincs jogod ehhez')

            const embed = new Discord.MessageEmbed()
                .setColor('#00CCCC')
                .setTitle('Szabályok elfogadása')
                .setDescription(`**A pipára kattintva tudod elfogadni a szabályzatot. *Kérlek figyelmesen olvasd el***`)
                .setFooter("Hitelesítés")
                .setTimestamp()
            message.channel.send(embed).then(sentMessage => {
                sentMessage.react("✔").then(() =>  {
                    const filter = (reaction, user) => {
                        return true;
                    }
                    const collector = sentMessage.createReactionCollector(filter);
                    collector.on('collect', (reaction, user) => {
                        if (reaction.emoji.name === '✔'){
                            rolename = message.guild.roles.cache.find(role => role.name === "IDERANGNEVÉT");
                            message.member.roles.add(rolename.id)
                        }
                    })
                })
            })
    }
}