const Discord = require(`discord.js`);

module.exports = {
    name: "purge",
    aliases: [""],
    categories: "Moderátori",
    permissions: "Üzenetek kezelése",
    description: "Maximum 300 üzenetet tudsz ezzel a parancsal törölni!",
    cooldown: "",
    usage: "<Üznet szám>",
    run: async(bot, message, args) => {
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send({content:"Nincs jogod használni ezt a parancsot!"})
        
        let author = message.member;
            if(!args[0]) {
            message.channel.send({content: "**Parancs Használat:** `=purge` *(szám)*"})
            return;
        }
        if(args[0] > 300){
            message.channel.send({content: "`A maximum törölhető üzenet` **300,** `kérlek próbáld újra!`"})
            return;
        }
        message.channel.bulkDelete(args[0]);
        message.channel.send({content: "Sikeresen töröltél " + args[0] + " üzenetet!"})
        message.channel.bulkDelete(args[0]);
        return;
    }
}