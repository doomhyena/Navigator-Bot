const Discord = require(`discord.js`);
let cooldown = new Set();
let sdseconds = 15;

module.exports = {
    name: "matek",
    category: "játék",
    usage: "",
    description: "Matematikai feladványokat ad",
    aliases: [""],
    run: async(bot, message, args) => {
        if(cooldown.has(message.author.id)) {
            message.delete();
            return message.reply({content: "Neked 15 másodperces várakozási időd van van! Kérlek várjál még egy kicsit!"})
        }
            cooldown.add(message.author.id);
    
    
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, sdseconds * 1000)
      
        let kkk = 60;
        let egy = Math.floor(Math.random() *1200);
        let keto = Math.floor(Math.random() *2200);
        let harom = Math.floor(Math.random() *300);
        let negy = Math.floor(Math.random() *300)*2;
        let ot = 2;
        let hat = Math.floor(Math.random() *9999999)*2;
        let uIcon = message.member.user.displthayAvatarURL;
        let askArray = [`Mennyi? ${egy} + ${keto}`, `Mennyi? ${egy} + ${keto} - ${harom}`, `Mennyi? ${negy}:${ot}`, `Mennyi? ${hat}:${ot}`];
    
        let respondArray = [`${egy + keto}`, `${egy + keto - harom}`, `${negy / ot}`, `${hat / ot}`];
    
        let num = Math.floor(Math.random() *askArray.length);
    
        let qEmbed = new Discord.MessageEmbed()
        .setTitle(`Matematikai kvíz!`)
        .setAuthor(message.author.tag)
        .setColor("RANDOM")
        .addField("Válaszolj a kérdésre 35mp belül!", askArray[num])
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
    
        const filter = m => m.author.id === message.author.id;
        message.channel.send(qEmbed);
        message.channel.awaitMessages(filter, {max: 1, time:35000}).then(collected => {
    
            if(collected.first().content === "Nem tudom") return message.reply(`A megoldás ez volt: ${respondArray[num]}`);
            let response = collected.first().content;
    
            if(response === respondArray[num]) {
    
                let kvizEmbed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username}`)
                .addField("Sikeresen teljesítetted a feladatot!", `Szép volt!`)
                .setColor("#1CEF5B")
                .setTimestamp(message.createdAt)
                .setFooter(`teszt`)
    
                message.channel.send({embeds: kvizEmbed})
    
            } else message.reply({content: `Hibás válasz. A megoldás ez volt: ${respondArray[num]}.`});
                
                
    
        }).catch(err => {
    
                message.reply(`Lejárt az időd! A megoldás ez volt: ${respondArray[num]}.`);
    
        });
    }
}