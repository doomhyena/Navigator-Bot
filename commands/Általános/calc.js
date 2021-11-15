const Discord = require(`discord.js`);

module.exports = {
    name: "calc",
    aliases: ["calculator", "szamologep", "számológép"],
    categories: "Általános",
    permissions: "",
    description: "Számolni tudsz vele.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        var plus = Math.floor(Number(args[0]) + Number(args[2]));
        if (isNaN(plus)) return message.channel.send({ content: "``Hiba: Kérlek adj meg számokat!``" });

        var minus = Math.floor(args[0]) - (args[2]);
        if (isNaN(minus)) return message.channel.send({ content: "``Hiba: Kérlek adj meg számokat!``" });

        var multiply = Math.floor(args[0]) * (args[2]);
        if (isNaN(multiply)) message.channel.send({ content: "``Hiba: Kérlek adj meg számokat!``" });

        var divide = Math.floor(args[0]) / (args[2]);
        if (isNaN(divide)) return message.channel.send({ content: "``Hiba: Kérlek adj meg számokat!``" });

        if (args[1] ==  "+") return message.channel.send(args[0] + " + " + args[2] + " = **" + plus + "**");
        if (args[1] ==  "-") return message.channel.send(args[0] + " - " + args[2] + " = **" + minus + "**");
        if (args[1] ==  "*") return message.channel.send(args[0] + " * " + args[2] + " = **" + multiply + "**");
        if (args[1] ==  "x") return message.channel.send(args[0] + " x " + args[2] + " = **" + multiply + "**");
        if (args[1] ==  "/") return message.channel.send(args[0] + " / " + args[2] + " = **" + divide + "**");

        else message.channel.send({ content: "``valami hiba van!``" });

        message.channel.send({ content: "``valami hiba van!``" });
    }
}