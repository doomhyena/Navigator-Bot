const schema = require('../../models/custom-commands');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "list",
    aliases: [""],
    categories: "Általános",
    permissions: "",
    description: "Kiírja az összes egyedi parancsot ezen a szerveren",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        const data  = await schema.find({ Guild: message.guild.id });
        if(!!data === false) return message.channel.send({content: 'Ezen a szerveren nincsen egyéni parancs!'});
        message.channel.send(
            new MessageEmbed()
                .setColor('BLUE')
                .setDescription(
                    data.map((cmd, i) => 
                        `${i + 1}: ${cmd.Command}`
                    ).join('\n')
                )
        )
    }
}