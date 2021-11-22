const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { brotliCompress } = require("zlib");
const prefix = `=`

module.exports = {
    name: "help",
    aliases: [""],
    categories: "Általános",
    permissions: "",
    description: "Kiírja a bot összes parancsát!",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {

        const roleColor =
        message.guild.me.displayHexColor === "#000000"
          ? "#ffffff"
          : message.guild.me.displayHexColor;
  
      if (!args[0]) {
        let categories = [];
  
        readdirSync("./commands/").forEach((dir) => {
          const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
            file.endsWith(".js")
          );
  
          const cmds = commands.map((command) => {
            let file = require(`../../commands/${dir}/${command}`);
  
            if (!file.name) return "Nincs parancs név.";
  
            let name = file.name.replace(".js", "");
  
            return `\`${name}\``;
          });
  
          let data = new Object();
  
          data = {
            name: dir.toUpperCase(),
            value: cmds.length === 0 ? "Nincsenek a parancsok" : cmds.join(" "),
          };
  
          categories.push(data);
        });
  
        const embed = new MessageEmbed()
          .setTitle("📬 Kell segítség? Itt vannak a parancsaim:")
          .addFields(categories)
          .setDescription(
            `Ha bővebb információt akarsz megtudni egy parancsról akkor használd: ${prefix}info <parancs neve>`
          )
          .setFooter(
            ` A segítséget kérte: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
          .setColor(roleColor);
        return message.channel.send({ embeds: [embed] })
    }
  }
}