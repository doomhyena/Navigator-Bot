const Discord = require(`discord.js`);
var figlet = require('figlet');

module.exports = {
    name: "ascii",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Nagyon menőn kiírja a szövegedet.",
    cooldown: "",
    usage: "<szöveg>",
    run: async (bot, message, args) => {
    if(!args.join(" ")) {
        message.delete();
        return message.channel.send({content: "Adj meg egy szöveget!"}).then(msg => msg.delete(5000));
        }
    figlet(args.join(" "), function(err, data) {
        if (err) return console.dir(err);
        message.channel.send(data, {
            code: 'md'
            });
        });
    }
}
