const Discord = require('discord.js');

module.exports = {
    name: "funfact",
    aliases: [""],
    categories: "Fun",
    permissions: "",
    description: "Random érdekességeket ír ki",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
        let valaszto = [
            '🍷 Elraktam a "Welcome” feliratú lábtörlőt.    Minek hazudjak?',
            '🧻 Kezdek bekattanni, kijövök a zuhany alól és kezet mosok...',
            '🍷 Ma le kell vinnem a szemetet! Úgy izgulok... Azt sem tudom, mit vegyek fel...',
            '🧻 Most, hogy ilyen csend van az utcákon, lehetne aszfaltozni.',
            '🍺 Minden este a hírek után beteszek egy horrorfilmet, hogy megnyugodjak.',
            '🍺 Nyugi... Nem fogtok beleőrülni, ha 2-3 hétig nem mentek ki a házból!! Ezt beszéltük ma a mosógéppel és a hűtővel...',
            '🍷 Ma a lakás minden helyiségébe tettem egy pohár italt. Este csinálok egy kocsmatúrát.',
            '🧻 Nagyon szeretek utazni, most épp a konyhában voltam, a ház fővárosában...',
            '🍺 Új probléma jelent meg a nőknél:  Van mit felvenni, de nincsen hová...',
            '🧻 A hétvégi gyónást otthon végeztem el a feleségemmel. Nem olyan megbocsátó, mint Isten...',
            '🍷 Kérem az apukákat, hogy tanítás alatt ne lófráljanak boxergatyában és sörrel a kezükben a tanuló háta mögött 🤣',
            '🧻 Mai jó tanácsom ebben a vérzivataros helyzetben. Soha ne hagyjátok ki a reggelit! A napi 17 étkezés közül ez a legfontosabb',
            `🍺 Itthoni életkép.
           Tanulási idő alatt. Hang a szobából.
           - Anya! Kaphatok egy szendvicset?
           Apa: Óra alatt nem zabálunk! 🤣🤣`,
            '🧻 Nem vagyok sorozatfüggő, de már nagyon várom az Operatív törzs évadzáró epizódját.',
            '🍷 Ha esetleg jönne a koronavírus új hulláma, a karantént ugyanezzel a családdal kell eltöltenem, vagy választhatok másikat is?'
            ]
            let embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("Szerencsejáték - Gambling")
            .setDescription(valaszto[Math.floor(Math.random() * valaszto.length)])
            .setFooter("A WonderNetwork Viccek")
            message.channel.send({embeds: [embed]})
    }
}