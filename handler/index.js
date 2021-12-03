const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const mongoose = require("mongoose");
const Discord = require("discord.js");
const chalk = require('chalk')
const prefix = '='
const globPromise = promisify(glob);

module.exports = async (bot) => {

    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            bot.commands.set(file.name, properties);
        }
    });

    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        bot.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);//client
    });
    bot.on("ready", async () => {
        bot.user.setStatus("online");
        bot.user.setActivity(`Prefix: =`, {type: "PLAYING"})   
    
        console.log(chalk.gray("Sikeresen csatlakoztam a"), chalk.yellow(`${bot.user.tag}`), chalk.gray('nevű bothoz!'));
        console.log(
          chalk.white("Néz:"),
          chalk.red(`${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`),
          chalk.white(`Felhasználót,`),
          chalk.red(`${bot.guilds.cache.size}`),
          chalk.white(`szervert.`)
        )
        console.log(
          chalk.white(`Prefix:` + chalk.red(` ${prefix}`)),
          chalk.white("||"),
          chalk.red(`${bot.commands.size}`),
          chalk.white(`parancs vam összen`)
        );
        console.log(chalk.gray(`Jelenlegi Node verzió: ${process.version} \nPlatorm: ${process.platform} ${process.arch}`))
        console.log(chalk.gray(`Memória használat: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`))
    });

//MongoDB csatlakozás  -----------------------------------------

mongoose.connect('mongodb+srv://Navigator:Navigator123@navigator.pctld.mongodb.net/test', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
}).then(console.log('Sikeresen csatlakoztam az adatbázishoz azaz a MongoDB-hez!'))
};