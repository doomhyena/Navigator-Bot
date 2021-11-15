const Discord = require(`discord.js`);
const moment = require("moment");

module.exports = {
    name: "serverinfo",
    aliases: ["szerverinfo", "si"],
    categories: "Info",
    permissions: "",
    description: "Megadja a szerver információit",
    cooldown: "",
    usage: "",
    run: async (client, message, args) => {
      const members = message.guild.members.cache;
      const create = message.guild.createdAt.toLocaleDateString();
      const channels = message.guild.channels.cache;
      const verificationLevels = {
      NONE: '`Nincs`',
      LOW: '`Alacsony`',
      MEDIUM: '`Közepes`',
      HIGH: '`(╯°□°）╯︵ ┻━┻`',
      VERY_HIGH: '`┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻`'
      };
      const notifications = {
      ALL: '`Minden`',
      MENTIONS: '`Említések`'
      };  
      const regions = {
      brazil: 'Brazilía',
      europe: 'Europa',
      hongkong: 'Hong Kong',
      india: 'India',
      japan: 'Japán',
      russia: 'Oroszország',
      singapore: 'Színgapúr',
      southafrica: 'Dél-Afrika',
      sydeny: 'Sydeny',
      'us-central': 'Közép-Amerika',
      'us-east': 'Kelet-Amerika',
      'us-west': 'Nyugat-Amerika',
      'us-south': 'Dél-Amerika'
      };
      const infoembed = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name}`)
      .setColor('#5CC5FF')
      .setTitle("**Szerver információk:**")
      .setThumbnail(message.guild.iconURL())
      .addFields(
        {
          name: '**Szerver neve:**',
          value: `${message.guild.name}`,
          inline: true
        },
        {
          name: '**Szerver ID:**',
          value: `${message.guild.id}`,
          inline: true
        },
        {
          name: '**Szerver Tulajdonosa:**',
          value: `${(await message.guild.fetchOwner()).user.username}`,
          inline: true
        },
        {
          name: '**Szerver készülte:**',
          value: `${message.guild.createdAt}`,
          inline: true
        },
        {
          name: '**Szerver regisztrációja:**',
          value: `${message.guild.verified}`,
          inline: true
        },
        {
          name: '**Szabályzati Beállítás:**',
          value: (message.guild.rulesChannel) ? `${message.guild.rulesChannel}` : 'Nincs',
          inline: true
        },
        {
          name: '**AFK időkorlát:**',
          value: `${message.guild.afkTimeout / 60} perc`,
          inline: true
        },
        {
          name: '**AFK Csatorna:**',
          value: (message.guild.afkChannel) ? `${message.guild.afkChannel.name}` : 'Nincs',
          inline: true
        },
        {
          name: '**Rendszer:**',
          value: (message.guild.systemChannel) ? `${message.guild.systemChannel}` : '`Nincs`',
          inline: true
        },
        {
          name: '**Partner:**',
          value: `${message.guild.partnered}`,
          inline: true
        },
        {
          name: '**Verifikált:**',
          value: `${message.guild.verified}`,
          inline: true
        },
        {
          name: '**Elkészítve:**',
          value: `${moment(message.guild.createdAt).format('MMM DD YYYY')}`,
          inline: true
        },
        {
          name: '**Tagok száma(botokkal):**',
          value: `${message.guild.memberCount}`,
          inline: true
        },
        {
          name: '**Tagok száma(botok nélkül):**',
          value: `${message.guild.members.cache.filter(m => !m.user.bot).size}`,
          inline: true
        },
      )
      .setTimestamp();

      message.channel.send({embeds: [infoembed]});
    }
}  