const Discord = require("discord.js");
const prefixSchema = require('../models/prefix');
const bot = require("../index");
const blacklist = require('../models/blacklist');

bot.prefix = async function(message) {
    let custom;

    const data = await prefixSchema.findOne({ Guild : message.guild.id })
        .catch(err => console.log(err))
    
    if(data) {
        custom = data.Prefix;
    } else {
        custom = prefix;
    }
    return custom;
}

bot.on("messageCreate", async (message) => {
    blacklist.findOne({ id : message.author.id }, async(err, data) => {

        if(!data) {
            const p = await bot.prefix(message)
            if(message.mentions.users.first()) {
            if(message.mentions.users.first().id === '884025587839172678') return message.channel.send(`Szia ${message.author}! Kezdésnek írd be, hogy ${p}help`)
            }
            if(!message.guild) return;
            if(message.author.bot) return;
            if(!message.content.startsWith(p)) return;
            if(!message.member) message.member = await message.guild.fetchMember(message);
        
                const args = message.content.slice(p.length).trim().split(/ +/g)
                const cmd = args.shift().toLowerCase();
                let guildQueue = bot.player.getQueue(message.guild.id);
        
            const command = bot.commands.get(cmd.toLowerCase()) || bot.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));
        
            if (!command) return;
            await command.run(bot, message, args);
        } else {
            message.channel.send({content: 'Te fel vagy véve a feketelistára így nem tudod használni a parancsot!'})
        }
    })
});
