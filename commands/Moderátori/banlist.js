const Discord = require(`discord.js`);

module.exports = {
    name: "banlist",
    aliases: ["banl", "bl"],
    categories: "Moderátori",
    permissions: "Tagok kitiltása",
    description: "Kiírja az  összes  bannolt tagot",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        if(!message.member.permissions.has(`BAN_MEMBERS`)) return message.reply({content: "Nincs jogod ehhez!"})

        const fetchbans = message.guild.fetchBans();
        const banuser =  (await fetchbans)
        .map((member) =>  member.user.tag)
        .join(", ")

        message.channel.send({content: banuser})
    }
}