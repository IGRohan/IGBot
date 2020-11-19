const translate = require('@k3rn31p4nic/google-translate-api')
const { MessageEmbed } = require('discord.js')
const { languages } = require("@k3rn31p4nic/google-translate-api")

module.exports = {
    name: 'translate',
    description: "Translate Text",
    usage: "?translate <language> <text>",
    aliases: [],
    run: async(client, message, args) => {


        await translate(args.slice(1).join(" "), { to: args[0]}).then((result) => {
            const embed = new MessageEmbed()
            .setTitle('Translation')
            .setDescription(result.text)
            .setColor("BLUE")

            return message.channel.send(embed)
        }).catch(error => {
            const translateError = new MessageEmbed()
            .setDescription(error)
            .setColor("RED")

            return message.channel.send(translateError)
        })
    }
}