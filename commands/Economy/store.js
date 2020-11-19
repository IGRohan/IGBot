const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'store',
    description: "Basic Equipment Store",
    aliases: [],
    usage: "?store",
    run: async(client, message, args) => {

        const embed = new MessageEmbed()
        .setTitle('Store')
        .setColor("BLUE")
        .addField('**Thief Outfit**', "**You Can't rob anyone without this set!, Buy This for \$50** \n **Do `?buy Thief Outfit` to Buy**")
        .addField('**Car**', "**A Simple Car. Maybe to show off? Costs Just \$150** \n **Do `?buy Car` To buy**")
        

        message.channel.send(embed)
    }
}