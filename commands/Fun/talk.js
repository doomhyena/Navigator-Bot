const Discord = require("discord.js");

module.exports = {
    name: "talk",
    catgory: "fun",
    description: "Értelmetlen beszélgetés a bottal",
    usage: "<@felhasználó>",
    run: async (bot, message, args) => {
        let item = args[0];

        if (!item) {
            let ErrorEmbed = new Discord.MessageEmbed()
            .setTitle("**Hoppá!**")
            .setColor("RED")
            .setDescription("Te nem írtál semmit a botnak!")
            message.channel.send({embeds: [ErrorEmbed]});
            return;
        }
        let replies = ["Szia!" ,"Pálinkás jó reggelt!" , "Nem vagyok éhes" , "Anyád, hogy van?" , 
        "Milyen vicces itt valaki" , " engem a boltban tuti arról a polcról választottatok, ahol az eleven gyerekeket árulták, de prémium kategóriában." 
        ,"Történelem és irodalom keveréke" , "szívesen a tanácsot" ,  "Vigyázz mert kidob xd" , "Ahogy én szólítom a barátnőmet macinak:" , "viszontlátásra" , 
        "Ne haragudjon meg szomszéd, de maga megkukult?", "buta-e vagy" , "Vicces mert nem igaz", "Maximum te" , "Én vizsgázom" , "nem fogok kapni mute-ot" , 
        "igen" , "nem" , "talán" , "Ne spamelj vagy mutot kapsz" , "he nyugi van" , "ezt megkérdezheted....." , "anyád, hogy van?" ,"senki nem mondta, hogy spamelsz" , 
        "De én nem spamelek" , "Kora reggel kell most gondolkoznom szakmai informatikán" , "Ki a legjobb a szerveren?" , "xd", "ouf" , "okés", "meg fog enni vigyázz", "én sem",
         "what-", "ki dob ki xd?", "én mindig is nyugodt voltam!", "én :3", "szeja :+", " jól...", "És az ájfon az működik?", "vese meg 40ezer dollar", "állami titok",
         "de nincs ra garancia", "csak fizess", "plusz lové", "A feléből mennyit engedsz?", "Aha, értem", "És ezen van olyan dolog azt hiszem az a neve hogy inteligáns mesterségia?",
        "Vagy nem tudom a pontos nevét", "Nem azt mondta a streamer h jon liveolni?", "Mostmeg elmegy csgozni?", "Gyere rám!!", "akkor megvagyunk",]
          
        let result = Math.floor((Math.random() * replies.length));
        let kerdes = args.slice(1).join(" ")
        
          
        message.channel.send({content: replies[result]})
    } 
}