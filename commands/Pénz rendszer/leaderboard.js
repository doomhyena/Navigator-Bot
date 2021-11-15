const { Client, Message, MessageEmbed, Collection } = require('discord.js')

module.exports = {
    name: "leaderboard",
    aliases: ["lb"],
    categories: "Pénz rendszer",
    permissions: "",
    description: "Itt tudod megnézni a helyezéseket",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
        const collection = new Collection();

        await Promise.all(
            message.guild.members.cache.map(async (member) => {
                const id = member.id;
                const bal = await bot.bal(id)
                console.log(`${member.user.tag} -> ${bal}`);
                return bal !== 0
                ? collection.set(id, {
                    id,
                    bal,
                })
                : null ;
            })
        );
        const data = collection.sort((a, b) => b.bal - a.bal).first(10)
        
        let embed = new Discord.MessageEmbed()
        .setTitle(`Lista`)
        .setColor(`Random`)
        .setDescription(data.map((v, i) => {return `${i+1}) ${bot.users.cache.get(v.id).tag} => **${v.bal} botérme**`}))
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({ embeds: [embed] });
    },
};