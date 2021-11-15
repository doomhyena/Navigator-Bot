module.exports = async (bot) => {
    const Discord = require("discord.js");
    const chalk = require('chalk')
    const prefix = '='
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
}