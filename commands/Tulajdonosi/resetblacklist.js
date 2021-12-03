const Discord = require(`discord.js`);
const blacklist = require('../../models/blacklist')

module.exports = {
    name: "resetblacklist",
    aliases: ["reset-blacklist", "rbl"],
    categories: "Beállítások",
    permissions: "",
    description: "A feketelistáról le tudsz venni egy felhasználó.",
    cooldown: "",
    usage: "",
    ownerOnly: true,
    run: async(bot, message, args) => {
        const User = message.guild.members.cache.get(args[0])
        if(!User) return message.channel.send('User is not valid.')

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
               await blacklist.findOneAndDelete({ id : User.user.id })
                .catch(err => console.log(err))
                message.channel.send(`**${User.displayName}** has been removed from blacklist.`)
            } else {
               message.channel.send(`**${User.displayName}** is not blacklisted.`)
            }
           
        })
    }
}