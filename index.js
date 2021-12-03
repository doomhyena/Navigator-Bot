const { Client, Collection } = require("discord.js");

const bot = new Client({
    intents: 32767,
});
module.exports = bot;
const { Player } = require("discord-music-player");
const player = new Player(bot, {
    leaveOnEmpty: false, 
});
bot.player = player;
bot.commands = new Collection();
bot.slashCommands = new Collection();

cfg = require("./cfg.json");
require("./handler")(bot);

bot.login(cfg.token);