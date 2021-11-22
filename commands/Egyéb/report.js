const Discord = require(`discord.js`);

module.exports = {
    name: "report",
    aliases: [""],
    categories: "Általános",
    permissions: "",
    description: "",
    cooldown: "",
    usage: "<@felhasználó> <indok>",
    run: async(bot, message, args) => {
        
    const prefix = "="

  let User = message.mentions.users.first() || null;

  if (User == null) {
    return message.channel.send({content: `Nem írtál mellé felhasználót!\n- Helyes használat:\n${prefix}report <@felhasználó> <indok>"`});
  } else {
    let Reason = args.join(" ")
    if (Reason == null) {
      return message.channel.send({content: `Nem adtál meg a végén egy indokot!\nKérlek próbáld újra.`});
    }
    let Avatar = User.displayAvatarURL();
      const exampleEmbed = new Discord.MessageEmbed()
      .setTitle(`Feljelentés!`)
      .setDescription(
        `Egy felhasználó \`${message.author.tag}\` jelentette őt \`${User.tag}\`! `
      )
      .setColor("BLACK")
      .setThumbnail(Avatar)
      .addFields(
        { name: "Jelentő ID", value: `${message.author.id}`, inline: true },
        { name: "Jelentő Tag", value: `${message.author.tag}`, inline: true },
        { name: "Áldozat ID", value: `${User.id}`, inline: true },
        { name: "Áldozat Tag", value: `${User.tag}`, inline: true },
        { name: "Indok", value: `\`${Reason.slice(1)}\``, inline: true },
        {
          name: "Dátum",
          value: `${new Intl.DateTimeFormat("hun").format(Date.now())}`,
          inline: true,
        }
      );
    message.channel.send(exampleEmbed);
  }
    }
}