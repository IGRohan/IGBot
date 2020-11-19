const db = require('quick.db');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'withdraw',
    description: "Withdraw Money from Your IGBank Account!",
    usage: "?withdraw <amount>",
    run: async (client, message, args) => {
        let member = message.author;
        let bankBalance = db.fetch(`bank_${message.guild.id}_${member.id}`)

        if (!args[0]) {
            const withdrawError = new MessageEmbed()
                .setDescription("You Need to Give a Valid Amount to Withdraw")
                .setColor("BLUE")

            return message.channel.send(withdrawError)
        }
        if (isNaN(args[0])) {
            const withdrawError2 = new MessageEmbed()
                .setDescription("That is not a Valid amount!")
                .setColor("BLUE")

            return message.channel.send(withdrawError2)
        }
        if(args[0] > bankBalance) {
            const withdrawError3 = new MessageEmbed()
                .setDescription("You Do Not Have That Much Money in Your IGBank Account")
                .setColor("BLUE")

            return message.channel.send(withdrawError3)
        }
        if(args[0] > 250) {
            const withdrawError4 = new MessageEmbed()
                .setDescription("You Can Only Withdraw \$250 at once.")
                .setColor("BLUE")

            return message.channel.send(withdrawError4)
        }

        
        db.subtract(`bank_${message.guild.id}_${member.id}`, args[0])
        db.add(`money_${message.guild.id}_${member.id}`, args[0])
        let cashBalance = db.fetch(`money_${message.guild.id}_${member.id}`)

        const withdrawSuccess = new MessageEmbed()
        .setDescription(`Successfully Withdrawn \$${args[0]} from your Bank. \n Your current Cash Balance is \$${cashBalance}`)
        .setColor("BLUE")

        message.channel.send(withdrawSuccess)

    }
}