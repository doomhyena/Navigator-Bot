const Discord = require("discord.js");

module.exports = async (bot, message) => {
    const cfg = require("../../cfg.json")

    logic(cfg.prefix, message, bot)

}

async function logic(prefix, message, bot) {

    if(message.mentions.users.first()) {
        if(message.mentions.users.first().id === '884025587839172678') return message.channel.send(`A prefix **${message.guild.name}** szerverén a következő: ${p}`)
    }
    if(!message.guild) return;
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase();
    let guildQueue = bot.player.getQueue(message.guild.id);

    if(cmd.length === 0) return;

    let command = bot.commands.get(cmd)
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));
    const permission = message.member.permissions.has(command.permission, true);

    if(!permission || permission === undefined) {
        return message.reply(`Neked nincs meg ez a jog: ** ${command.permission} **, hogy használhasd a parancsot sajnos! :/`)
    }
    const { cooldowns } = bot;
    if(!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    };

    const currentTime = Date.now();
    const timeStamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown) * 1000;

    if(timeStamps.has(message.author.id)) {
        const exoirationTime = timeStamps.get(message.author.id) + cooldownAmount;

        if(currentTime < exoirationTime) {
        const timeleft = (exoirationTime - currentTime) / 1000;

        return message.reply(`Kérlek várj ** ${timeleft.toFixed(1)} ** másodpercet, hogy újra használhasd a parancsot!`);
        }
    }

    timeStamps.set(message.author.id, currentTime);
    setTimeout(() => timeStamps.delete(message.author.id), cooldownAmount);

    if(command) {
        command.run(bot, message, args)
    }
}