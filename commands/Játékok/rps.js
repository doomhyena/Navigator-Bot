const Discord = require(`discord.js`);
let cooldown = new Set();
let sdseconds = 15;

module.exports = {
    name: "kpo",
    category: "játék",
    usage: "",
    description: "Kő papír ollót tudsz játszani a bottal",
    aliases: [""],
    run: async(bot, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setFooter("Navigator | KPO", 'https://cdn.discordapp.com/avatars/700016360830533713/8b1f734b87e37830956c719a88348560.png')
        .setTimestamp()
        .setColor("RANDOM");
        const papír = '📰';
        const kő = '⛰️';
        const olló = '✂️';
        message.delete();
        embed.setTitle("Kő, Papír, Olló")
        embed.setDescription(`
        Kő: :mountain:
        Papír: :newspaper: 
        Olló: :scissors:
        `)
        let msg = await message.channel.send({embeds: embed})
        await msg.react(kő);
        await msg.react(papír);
        await msg.react(olló)
        
        const reactions = await msg.awaitReactions(reaction => reaction.emoji.name == papír || reaction.emoji.name == kő || reaction.emoji.name == olló, { time: 8000 })

        await msg.delete()
    
        let embed1 = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setFooter("Hisashi | KPO", 'https://cdn.discordapp.com/avatars/700016360830533713/8b1f734b87e37830956c719a88348560.png')
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("Eredmény")
    
        if (msg.reactions.cache.get(papír).count - 1 < msg.reactions.cache.get(kő).count - 1 > msg.reactions.cache.get(olló).count - 1) {
            let sum3 = Math.floor(Math.random() *100) +1;
            if (sum3 < 16) {
                embed1.setDescription(`
                :partying_face:  Nyertél! :partying_face: 
                `)
                embed1.addField("Navigator:", `Olló`), true
            }
            else if (sum3 < 41) {
                embed1.setDescription(`
                :face_with_symbols_over_mouth: Döntetlen! :face_with_symbols_over_mouth:                    `)
                embed1.addField("Navigator:", `Kő`), true
            }
            else if (sum3 < 101) {
                embed1.setDescription(`
                :sob: Vesztettél! :sob:
                `)
                embed1.addField("Navigator:", `Papír`), true
            }
        }
        else if (msg.reactions.cache.get(kő).count - 1 < msg.reactions.cache.get(papír).count - 1 > msg.reactions.cache.get(olló).count - 1) {
            let sum2 = Math.floor(Math.random() *100) +1;
            if (sum2 < 16) {
                embed1.setDescription(`
                :partying_face: Nyertél! :partying_face: 
                `)
                embed1.addField("Navigator:", `Kő`), true
            }
            else if (sum2 < 41) {
                embed1.setDescription(`
                :face_with_symbols_over_mouth: Döntetlen! :face_with_symbols_over_mouth:                    `)
                embed1.addField("Navigator:", `Papír`), true
            }
            else if (sum2 < 101) {
                embed1.setDescription(`
                :sob: **Vesztettél!** :sob:
                `)
                embed1.addField("Navigator:", `Olló`), true
            }
        }
        else if (msg.reactions.cache.get(papír).count - 1 < msg.reactions.cache.get(olló).count - 1 > msg.reactions.cache.get(kő).count - 1) {
            let sum3 = Math.floor(Math.random() *100) +1;
            if (sum3 < 16) {
                embed1.setDescription(`
                :partying_face:  Nyertél! :partying_face: 
                `)
                embed1.addField("Navigator:", `Papír`), true
            }
            else if (sum3 < 41) {
                embed1.setDescription(`
                :face_with_symbols_over_mouth: Döntetlen! :face_with_symbols_over_mouth:
                `)
                embed1.addField("Navigator:", `Olló`), true
            }
            else if (sum3 < 101) {
                embed1.setDescription(`
                :sob: Vesztettél! :sob:
                `)
                embed1.addField("Navigator:", `Kő`), true
            }
        } else {
            let fasz = message.channel.send({content: "Lejárt az időd vagy több mint 1 dologra reagáltál!"});
            return;
        }
        let embed2 = await message.channel.send(embed1).catch()
        await embed2.react('5️⃣').then(
        embed2.reactions.removeAll())
        await embed2.react('4️⃣')
        embed2.reactions.removeAll()
        await embed2.react('3️⃣')
        embed2.reactions.removeAll()
        await embed2.react('2️⃣')
        embed2.reactions.removeAll()
        await embed2.react('1️⃣')
        embed2.reactions.removeAll()
        await embed2.react('0️⃣')
        await embed2.delete()
    }
}//Wolfy