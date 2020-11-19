const { MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: 'buy',
    description: "Buy Items from the Shop!",
    aliases: [],
    usage: "?buy [item]",
    run: async(client, message, args) => {
        let purchase = args.join(" ")
        let cash = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(!purchase) {
            const buyError = new MessageEmbed()
            .setDescription("You Need to Provide an Item you want to Purchase!")
            .setColor("BLUE")

            return message.channel.send(buyError)
        }
        let items = await db.fetch(`items_${message.guild.id}_${message.author.id}`, {items: []})

        if(purchase == 'Thief Outfit') {
            if(cash < 50) {
                const purchaseError = new MessageEmbed()
                .setDescription("You Don\'t Have Enough Money to Buy a Thief Outfit!")
                .setColor("BLUE")

                return message.channel.send(purchaseError)
            }

            db.subtract(`money_${message.guild.id}_${message.author.id}`, 50)
            db.push(`items_${message.guild.id}_${message.author.id}`, "Thief Outfit")

            const purchaseThiefOutfitSuccess = new MessageEmbed()
            .setDescription(`Successfuly Bought One Thief Outfit for \$50`)
            .setColor("BLUE")

            message.channel.send(purchaseThiefOutfitSuccess)
        }

        if(purchase == 'Car') {
            if(cash < 150) {
                const purchaseError2 = new MessageEmbed()
                .setDescription("You Don\'t Have Enough Money to Buy a Car")
                .setColor("BLUE")

                return message.channel.send(purchaseError2)
            }

            db.subtract(`money_${message.guild.id}_${message.author.id}`, 150)
            db.push(`items_${message.guild.id}_${message.author.id}`, 'Car')

            const purchaseCarSuccess = new MessageEmbed()
            .setDescription(`Successfuly Bought One Car for \$150`)
            .setColor("BLUE")

            message.channel.send(purchaseCarSuccess)
        }
    }
}