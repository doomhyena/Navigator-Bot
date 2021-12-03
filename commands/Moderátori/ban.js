const Discord = require("discord.js");

module.exports = {
    name: "ban",
    aliases: [""],
    categories: "Moderátori",
    permissions: "Taagok kitiltása",
    description: "Kitiltja a megadott embert",
    cooldown: "",
    usage: "<@felhasználó> <indok>",
    run: async (bot, message, args) => {
      message.delete();

      if(!message.member.permissions.has(`BAN_MEMBERS`)) return message.reply({content: `Ehhez nincs jogod!`});

      let banMember = message.mentions.members.first();
      let banreason = args.slice(1).join(" ");
      let prefix = '='
  
  
      if(!banMember) {
              let parancsEmbed = new Discord.MessageEmbed()
              .setTitle("Parancs használata:")
              .addField(`\`${prefix}ban <@név> [indok]\``, "˘˘˘")
              .setColor("BLUE")
              .setDescription("HIBA: Kérlek add meg a felhasználót!")
        
              message.channel.send({embeds: [parancsEmbed]});
          }
          if (!banreason) {
              let parancsEmbed = new Discord.MessageEmbed()
              .setTitle("Parancs használata:")
              .addField(`\`${prefix}bam <@név> [indok]\``, "˘˘˘")
              .setColor("BLUE")
              .setDescription("HIBA: Kérlek add meg az indokot!")
        
              message.channel.send({embeds: [parancsEmbed]});
          } else {
              let BanEmbed = new Discord.MessageEmbed()
              .setTitle("BAN")
              .setColor("RED")
              .setDescription(`**Bannolta:** ${message.author.tag}\n**Bannolva lett:** ${banMember.user.tag}\n**Ban indoka:** ${banreason}`)
    
                  message.channel.send({embeds: [BanEmbed]});
  
                  message.guild.members.ban(banMember, {reason: `${banreason}`})
          }
  }
}