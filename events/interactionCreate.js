const bot = require("../index");

bot.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()) {
        await interaction.defer().catch(() => {});

        const cmd = bot.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "Valami gáz van!" });

        const args = [];
        interaction.options.array().map((x)=> {
            args.push(x.value);
        });

        cmd.run(bot, interaction, args);
    }
});
