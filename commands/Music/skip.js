const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'skip',
    description: "Skips Music in a Queue",
    usage: "?skip",
    aliases: [],
    run: async(client, message, args)=> {
        if (!message.member.voice.channel) {
            const skipError = new MessageEmbed()
              .setDescription("You Need to be in a Voice Channel to skip music!")
              .setColor("RED")
            return message.channel.send(skipError)
        }
        if(!client.distube.isPlaying(message)) {
            const skipError2 = new MessageEmbed()
            .setDescription("There is Nothing Playing")
            .setColor("RED")
            return message.channel.send(skipError2)
        }

        let queue = client.distube.skip(message)

        const embed = new MessageEmbed()
        .setDescription(`Skipped!`)
        .setColor("BLUE")

        message.channel.send(embed)
    }
}