const bot = require("../index");

bot.on("ready", () =>
    console.log(`${bot.user.tag} indulásra kész!`)
);
