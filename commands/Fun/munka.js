const Discord = require(`discord.js`);

module.exports = {
    name: "munka",
    aliases: [""],
    categories: "Funka",
    permissions: "",
    description: "Munkát ajánl",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let replies = [`Ács`, `Aktuárius`, `Állatorvos`, `Alpintechnika`, `Andragógus`, `Arborista`, 
        `Asztalos`, `Au pair`, `Bádogos Bárd`,  `Béres Biológus Bíró`, ` Bírósági`, `fogalmazó`,
        `Bírósági titkár`, `Bodnár`,  `Bognár`,  `Bohóc`, `Boltőr`, `Boncmester`, `Borbély`,
        `Borracheiro`, `Börtönőr`, `Búvár`, `Cipész`, `Coaching`, `Cukrász`, `Cseléd`, `Csizmadia`,
        `Csősz `, `Design thinking`, `Dietetikus`, `Dilettáns`, `Diplomata`, `Dramaturg`, `Dublőr`,
        `Ékszerész`, `Énekes`, `Energetikai szakreferens`, `Építési műszaki ellenőr`, `Építész`,
        `Építészmérnök`, `Építőmérnök`, `Falugondnok`, `Fényképész`,  `Fényképezés`, `Figuráns`,
        `Filmproducer`, `Filmrendező`, `Fizikus`, `Fogász`, `Fogorvos`, `Forgatókönyvíró`, `Gazda`,
        `Gazdaságinformatikus`, `Geodéta`, `Geodézia`, `Geográfus`, `Gépészmérnök`, `Grafológia`,
        `Gyártásvezető`, `Gyepmester`,  `Gyógymasszőr`, `Gyógypedagógus`, `Gyógyszerész`,  `Hangmester`,
        `Házi gondozó`, `Hóhér`, `Hostess`, `Idegenvezető`, `Igazságügyi szakértő`, `Inas`,`Influenszer`,
        `Informatikus`, `Ingatlan-értékbecslő`, `Ingatlanközvetítő`, `Ipari alpinista`, `Író`, `Járművezető`,
        `Jegyellenőr`, `Jelmeztervező`,  `Jogász`,  `Jogi asszisztens`,  `Jogtanácsos`, `Kalauz `, `Kapellmeister`,
        `Karmester`, `Kaszkadőr`, `Kasznár`, `Katekéta-lelkipásztori munkatárs`, `Katona`, `Képzőművész`, 
        `Kereskedő`,`Kertész`, `Klinikai kutatási munkatárs`, `Kockázatkezelő`, `Kohómérnök`,  `Koldulás`,
        `Közjegyző`, `Költő`, `Kőműves`, `Könyvelő`, `Könyvtáros`, `Környezetmérnök`, 
        `Közbeszerzési szaktanácsadó`,`Közgazdász`, `Kreatív igazgató`,  `Kubikos`, `Kulturális szervező`,
        `Kútásó`, `Lakatos`, `Lemezlovas`, `Levéltáros`, `Lévita`, `Magánnyomozó`,
        `Manöken`, `Markotányos`, `Matematikus`, `Méhegészségügyi felelős`, `Mentalista`, 
        `Mentőtiszt`, `Mérnök`, `Mesterlövész`, `Modell`, `Molnár`, `Mozdonyvezető`, `Muzeológus`, 
        `Műfordító`, `Napszámos`, `Növényorvos`, `Olvasószerkesztő`, `Ornitológus`, `Orvos`,
        `Pályázatíró`, `Pap`, `Parkolóőr`, `Pásztor`, `Pedagógus`, `Pék`, `Pestisdoktor`, 
        `Polgári foglalkozás`, `Politológus`, `Producer`, `Prostitúció`, `Pszichiáter`, 
        `Pszichológus`, `Reklámarc`,  `Rektor`, `Révész`, `Sajtóreferens`, `Sakter`, 
        `Scriptor`, `Sofőrszolgálat`, `Sommelier`, `Sportkommunikátor`, 
        `Sportszakember`, `Stylist`, `Szabadalmi ügyvivő`, `Szabadúszó`, `Szabó `,
        `Szakács`, `Személyi edző`, `Szénégetés`, `Szenior tréner`, `Szerszámkészítő`, 
        `Szexmunkás`, `Szexuálterapeuta`, `Szíjgyártó`, `Színész`, `Szoftverfejlesztő`, 
        `Szűcs`, `Takács`, `Tanító`, `Táplálkozástudományi szakember`,  `Tímár`, `Tolmács`, 
        `Tudósító`, `Újságíró`, `Utaskísérő`, `Ügyelő`, `Ügyvéd`, `Űrhajós`, 
        `Üzemanyagtöltő állomás kezelő`,  `Üzleti elemző`, `Varga`, `Védőnő`, `Vegyész`, 
        `Vezérigazgató`, `Világosító`, `Villamosgép-szerelő`, `Villamosmérnök`, `Villanyszerelés`, 
        `Vincellér`, `Virtuális asszisztens`, `Vízimentő`, `Vízvezeték-szerelő`,`Zenész`, `Zeneszerző`, 
        `Zsoldos`,]

        let result = Math.floor((Math.random() * replies.length));

        let embed = new Discord.MessageEmbed()
        .setTitle(`**Ajánlott szakma**`)
        .setColor(`RANDOM`)
        .addField(`Neked ajánlott szakma:`, `${replies[result]}`)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
                
        message.channel.send({embeds:[embed]})

    }
}