const Discord = require(`discord.js`);
const inventory = require("../../models/inventory");
const items = require('../../bruh/shopitem');

module.exports = {
    name: "buy",
    aliases: [""],
    categories: "Pénz rendszer",
    permissions: "",
    description: "Vásárolni tudsz a boltoból",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        if (!args[0]) return message.channel.send({content: 'Kérlek adj meg egy tárgyat amit meg szeretnél vásárolni!'});
        const itembuy = args[0].toLowerCase();

        const validItem = !!items.find(
            (val) => val.item.toLowerCase() === itembuy
        );
        if (!validItem) return message.channel.send({content: 'Kérlek érvényes tárgyat válassz a boltból! Ami nincs kiírva boltban azt nem tudod megvenni!'});

        const itemPrice = items.find((val) => val.item.toLowerCase() === itembuy).price;
        const userbalance = await bot.bal(message.author.id);

        if(userbalance < itemPrice) return message.channel.send({content: `A te egyenleged csak: ${userbalance}, így sajnos nem tudod megvenni az adott tárgyat!`});

        const params = {
            Guild: message.guild.id,
            User: message.author.id
        }
        inventory.findOne(params, async(err, data) => {
            if (data) {
                const hasItem = Object.keys(data.Inventory).includes(itembuy);
                if(!hasItem) {
                    data.Inventory[itembuy] = 1;
                } else {
                    data.Inventory[itembuy]++;
                } await inventory.findOneAndUpdate(params, data);
            } else {
                new inventory({
                    Guild: message.guild.id,
                    User: message.author.id,
                    Inventory: {
                        [itembuy]: 1
                    }
                }).save();
            }
            message.reply({content: "A tranzakció sikeres volt!"})
        });
    }
}