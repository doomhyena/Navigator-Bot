const Discord = require(`discord.js`);
const mongoose = require('mongoose');

module.exports = {
    name: "silentsay",
    category: "Fun",
    usage: "",
    description: "",
    aliases: [""],
    run: async(bot, message, args) => {
        message.delete();
        const dmpers = message.mentions.users.first();
        if(!args){
            message.author.send({content:'Tesó, nem mondtad kinek súgjak meg és mit!'})
            return;
        }
        if(!dmpers){
            message.author.send({content: 'Tesó, nem mondtad kinek súgjak meg valamit!'})
            return;
        }
        if(!args[1]){
            message.author.send({conent: `Tesó, nem mondtad meg, mit súgjak meg ${dmpers} felhasználónak!`})
        }
        dmpers.send({content:`Psszt! Hé, ${dmpers.username}, ${message.author.username} ezt üzeni neked: ${args.join(" ")}`})
        message.author.send({conent: `Megüzentem ${dmpers.username} felhasználónak, amit mondtál! :))`})
    }
}