const Discord = require(`discord.js`);

module.exports = {
    name: "randomnickname",
    aliases: ['randomnick'],
    categories: "Fun",
    permissions: "",
    description: "Véletlenszerű becenveket ad.",
    cooldown: 3,
    usage: "",
    run: async(bot, message, args) => {
        if (!message.guild.me.permissions.has('MANAGE_NICKNAMES')) 
        return message.channel.send({content: 'Nincs meg a megfelelő jogosultságom!'});
        const nicknamesXD = [`Szerver tulaj`, `${bot.user.username} BÉTA`, `Jelölj meg, hogy kitiltsalak`, `Bommer`,
            `Nem ${message.author.username}`, `Bob Zombi`, `Spongyabob`, `vörösbegy`, `töhi`, `döbrögi`, `vipera`,
            `kacsa`, `stukker matyi`, `kotta miki`, `Valószínűleg  nem szabad megnevezni`, `BOT`, `Maffia`, `Keresztapa`,
            `Gamer`, `Hárommellű`, `Titanic`, `Rozmár`, `Életkedv-tanárúr`, `Menyét`, `Penge`, `Vámpír`, `Monitorfejű`, 
            `Görényke`, `Kecske`, `Patkány`, `Vörös halál`, `Tyúk`, `Bagoly`, `A megváltó`, `zsiráf`, `Vadkan`, 
            `Android`, `T800`, `Minotarusz`, `Bambula`, `Tancula`, `fittneszgombóc`, `Hetyke`, `BEGY`, `BüntetőTörvényKönyv`, 
            `iQ ninja`, `Maugli`, `Varjú`, `Gömbi`, `Polipcsöcs`, `Uborkafej`, `Hajlák`, `Hajlakk`, `Bojler`]

        let nicks = nicknamesXD[Math.floor(Math.random() * nicknamesXD.length)]

            message.member.setNickname(nicks)
            message.reply({content: `Nézd meg a becenevedet.`})
    }
}