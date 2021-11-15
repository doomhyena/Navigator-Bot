const Discord = require(`discord.js`);

module.exports = {
    name: "drake",
    category: "Képek",
    usage: "",
    description: "",
    aliases: [""],
    run: async(bot, message, args) => {
        const text = args.join(" ").split("/");

        if (!text) return message.reply({ content: 'what do i put on the image dumbass' });
        let final = "https://luminabot.xyz/api/image/drake?" + encodeURIComponent({
          yes: text[0],
          no: text[1]
        })
        const attach = new Discord.MessageAttachment(final, 'drake.png', null)
        message.channel.send({content: attach})
    }
}