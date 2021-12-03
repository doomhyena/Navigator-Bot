const bot = require('../index');
const AutoRoleSchema = require('../models/autorole');

bot.on("guildMemberAdd", async (member) => {
    AutoRoleSchema.findOne({ Guild: member.guild.id }, async (e, data) => {
        if (!data) return;
        const newuser = member.user;
        const role = member.guild.roles.cache.get(data.Role);

        member.roles.add(role)
    })
})