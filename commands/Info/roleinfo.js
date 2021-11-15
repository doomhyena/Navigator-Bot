const Discord = require(`discord.js`);
const permission = require('discord.js');
const moment = require("moment");

module.exports = {
    name: "roleinfo",
    aliases: ["ri"],
    categories: "Info",
    permissions: "",
    description: "Kiírja a rang információit.",
    cooldown: "",
    usage: "<@rang>",
    run: async(bot, message, args) => {
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);

        const permissions = {
            "ADMINISTRATOR": "Adminisztrátor",
            "VIEW_AUDIT_LOG": "Napló megtekintése",
            "VIEW_GUILD_INSIGHTS": "Szerver betekintések megtekintése",
            "MANAGE_GUILD": "Szerver kezelése",
            "MANAGE_ROLES": "Rangok kezelése",
            "MANAGE_CHANNELS": "Csatornák kezeláse",
            "KICK_MEMBERS": "Tagok kirúgása",
            "BAN_MEMBERS": "Tagok kitíltása",
            "CREATE_INSTANT_INVITE": "Meghívó létrehozása",
            "CHANGE_NICKNAME": "Becenév szerkesztése",
            "MANAGE_NICKNAMES": "Becenevek kezelése",
            "MANAGE_EMOJIS": "Emotikonok kezelése",
            "MANAGE_WEBHOOKS": "Webhook-ok kezelése",
            "VIEW_CHANNEL": "Csatornák megtekintése",
            "SEND_MESSAGES": "Üzenetek küldése",
            "SEND_TTS_MESSAGES": "TTS üzenet küldése",
            "MANAGE_MESSAGES": "Üzenetek kezeláse",
            "EMBED_LINKS": "embed linkek küldése",
            "ATTACH_FILES": "Beágyazott fájlok küldése",
            "READ_MESSAGE_HISTORY": "Üzenetelőzmények visszaolvasása",
            "MENTION_EVERYONE": "@everyone és @here megemlítése",
            "USE_EXTERNAL_EMOJIS": "Külső emotikonok használata",
            "ADD_REACTIONS": "Reakció hozzáadása",
            "CONNECT": "Csatlakozás",
            "SPEAK": "Beszéd",
            "STREAM": "Videó",
            "MUTE_MEMBERS": "Emberek némítása",
            "DEAFEN_MEMBERS": "Emberek sűketétíse",
            "MOVE_MEMBERS": "Emberek mozgatása",
            "USE_VAD": "Hangtevékenység használata",
            "PRIORITY_SPEAKER": "Elsősébbségi Megszólaló"
        }

        const yesno = {
            true: '`Igen`',
            false: '`Nem`'
        }

        if(!role)
        return message.reply({content: `Kérlek adj meg egy rangot!`})

        const rolePermissions = role.permissions.toArray();
        const finalPermissions = [];
        for (const permission in permissions) {
            if (rolePermissions.includes(permission)) finalPermissions.push(`✔️ ${permissions[permission]}`);
            else finalPermissions.push(`❌ ${permissions[permission]}`);
        }

        const position = `\`${message.guild.roles.cache.size - role.position}\`/\`${message.guild.roles.cache.size}\``;

        let embed = new Discord.MessageEmbed()
        .setTitle(`Rang infók:`)
        .addField('Név:', `<@&${role.id}>`, true)
        .addField('ID:', `\`${role.id}\``, true)
        .addField('Pozíció:', `${position}`, true)
        .addField('Megjelőlhetőség:', yesno[role.mentionable], true)
        .addField('Bot Rang:', yesno[role.managed], true)
        .addField('Láthatóság:', yesno[role.hoist], true)
        .addField('Szín:', `\`${role.hexColor.toUpperCase()}\``, true)
        .addField('Készítés időpontja:', `\`${moment(role.createdAt).format('DD/MMM/YYYY')}\``, true)
        .addField('Jogok:', `\`\`\`diff\n${finalPermissions.join('\n')}\`\`\``)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send({ embeds: [embed] });
    }
}