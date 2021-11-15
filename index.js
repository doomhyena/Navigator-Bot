const cfg = require("./cfg.json");
const { Client, Intents, Collection } = require("discord.js");
const Discord = require("discord.js");
const allIntents = new Intents(32767);
const bot = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION", "USER", "GUILD_MEMBER"], intents: allIntents });
const mongoose = require('mongoose');
const prefix = cfg.prefix;
const prefixSchema = require('./models/prefix')
const economy = require('./models/economy'); 
const Schema = require('./models/welcome');
bot.ticketCategory = '896027210039820338' 

bot.commands = new Collection();
bot.aliases = new Collection();
bot.event = new Collection();
bot.cooldowns = new Collection();

["command", "event"].forEach(handler => {
        require(`./handlers/${handler}`)(bot)
});
//MongoDB csatlakozás  -----------------------------------------

const { Player } = require("discord-music-player");
const player = new Player(bot, {
    leaveOnEmpty: false, 
});
bot.player = player;

//MongoDB csatlakozás  -----------------------------------------

mongoose.connect('mongodb+srv://Navigator:Navigator123@navigator.pctld.mongodb.net/test', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
}).then(console.log('Sikeresen csatlakoztam az adatbázishoz azaz a MongoDB-hez!'))

//Prefix  ----------------------------------------- mongodb+srv://Navigator:<password>@navigator.pctld.mongodb.net/test


bot.prefix = async function(message) {
    let custom;
    const data = await prefixSchema.findOne({ Guild : message.guild.id })
    if(data) {
        custom = data.Prefix;
    } else {
        custom = prefix;
    }
    return custom;
}

bot.on('guildDelete', async (guild) => {
        prefixSchema.findOne({ Guild: guild.id }, async (err, data) => {
            if (err) throw err;
            if (data) {
                prefixSchema.findOneAndDelete({ Guild : guild.id }).then(console.log('Törölt adat.'))
        }
    })
});

//Economy  -----------------------------------------

bot.bal = (id) => new Promise(async ful =>{
    const data = await economy.findOne({ id });
    if(!data) return ful(0);
    ful(data.coins);
});

bot.add = (id, coins) => {
    economy.findOne({ id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.coins += coins;
        } else {
            data = new economy({ id, coins })
        }
        data.save();
    })
}

bot.rmv = (id, coins) => {
    schema.findOne({ id }, async(err,data) => {
        if(err) throw err;
        if(data) {
            data.coins -= coins;
        } else {
            data = new economy({ id, coins: -coins })
        }
    data.save();
    })
}
//Üdvözlő  -----------------------------------------

bot.on("guildMemberAdd", async (member) => {
    Schema.findOne({ Guild: member.guild.id }, async (e, data) => {
        if (!data) return;
        const newuser = member.user;
        const ch = member.guild.channels.cache.get(data.Channel);

        let embed = new Discord.MessageEmbed()
        .setTitle("Új tag lépett be!")
        .setColor("#00FF00")
        .setDescription(`Szia ${newuser}, üdvözöllek a(z) **${member.guild.name}** szerveren! Nézz körbe a szerveren, mielőtt bármit is csinálsz! Jó szórakozást! :)`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        ch.send({ embeds: [embed] });
    })
})

bot.login(cfg.token);