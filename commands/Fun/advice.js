const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'advice',
    description: "Gives an Advice",
    usage: "?advice",
    aliases: [],
    run: async(client, message, args) => {
        const data = await fetch("https://api.adviceslip.com/advice").then((res) => res.json())

        const embed = new MessageEmbed()
        .setDescription(data.slip.advice)
        .setColor("BLUE")

        message.channel.send(embed)
    }
}