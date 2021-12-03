const Discord = require(`discord.js`);
const blacklist = require('../../models/blacklist')

module.exports = {
    name: "blacklist",
    aliases: ["bl"],
    categories: "Beállítások",
    permissions: "",
    description: "Feketelistára tudsz adni egy felhasználó.",
    cooldown: "",
    usage: "<@felhasználó || felhasználó#1234 || felhasználó ID>",
    ownerOnly: true,
    run: async(bot, message, args) => {
        if (!message.member.permissions.has("ADMINISTRATOR")) 
        return message.reply({content: "Nincs jogod ezt a parancsot használni!"})
        const User = message.guild.members.cache.get(args[0])
        if(!User) return message.channel.send('User is not valid.')

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send(`**${User.displayName}** felhasználó már feketelistára került!`)
            } else {
                data = new blacklist({ id : User.user.id })
                data.save()
                .catch(err => console.log(err))
            message.channel.send(`${User.user.tag} felhasználó a feketelistához hozzá lett adva!`)
            }
           
        })
    }
}