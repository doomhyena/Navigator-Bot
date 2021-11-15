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
          `**:x: | Mem említett felhasználót, vagy érvénytelen azonosítót adott meg**`
            }
        );
      if (!args.slice(1).join(" "))
        return message.channel.send({content: `:x: | You did not specify your message**`});
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send({content: `**:x: | That user could not be Dmed!**`}))
        .then(() => message.channel.send({content: `**:x: | Sent a message to ${user.user.tag}**`}));
    }
}