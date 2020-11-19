const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'wouldyourather',
    description: "Sends a Would You Rather question",
    usage: "?wouldyourather",
    aliases: ['wyr'],
    run: async(client, message, args) => {

        const replies = require('../../data/wouldyourather.json')
        const reply = replies[Math.floor(Math.random() * replies.length)]

        const embed = new MessageEmbed()
        .setTitle('Would you rather?')
        .setDescription(reply)
        .setColor("BLUE")

        message.channel.send(embed)

    }
}