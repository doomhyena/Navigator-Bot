const Discord = require(`discord.js`);

module.exports = {
    name: "dm",
    aliases: ["privatuzenet", "privatuzi"],
    categories: "Fun",
    permissions: "",
    description: "Privát üzemetet tudsz küldeni másoknak.",
    cooldown: "",
    usage: "<@felhasználó> <üzenet>",
    run: async(bot, message, args) => {
        message.delete();
        let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
            {content: 
          `**:x: | Mem említettél felhasználót, vagy érvénytelen azonosítót adtál meg meg**`
            }
        );
      if (!args.slice(1).join(" "))
        return message.channel.send({content: `:x: | Nem adtad meg az üzenetet!**`});
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send({content: `**:x: | A felhasználó nem fogad privát üzeneteket!**`}))
        .then(() => message.channel.send({content: `**:x: | Az üzenet elküldve következő emberkének: ${user.user.tag}**`}));
    }
}