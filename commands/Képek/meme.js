const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports = {
    name: "meme",
    aliases: [""],
    categories: "Képek",
    permissions: "",
    description: "Lekér egy pacek mémet!",
    cooldown: "",
    usage: "",
    run: async (bot, message, args) => {
    const subreddits = ["dankmeme", "meme", "me_irl"]
    const random = subreddits[Math.floor(Math.random() * subreddits.length)]

    const IMG = await randomPuppy(random)
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(IMG)
    .setTitle(`Keresési szöveg: ${random} (KATT IDE!)`)
    .setURL(`https://www.reddit.com/r/${random}`)

    message.channel.send({embeds: [embed]});
    }
}