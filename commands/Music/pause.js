const { MessageEmbed, MessageManager } = require("discord.js")

module.exports = {
    name: 'pause',
    description: "Pause Music",
    usage: "?pause",
    aliases: [],
    run: async(client, message, args) => {
        if (!message.member.voice.channel) {
            const pauseError = new MessageEmbed()
              .setDescription("You Need to be in a Voice Channel to pause Music!")
              .setColor("RED")
            return message.channel.send(pauseError)
        }
        if(!client.distube.isPlaying(message)) {
            const pauseError2 = new MessageEmbed()
            .setDescription("There is Nothing Playing")
            .setColor("RED")
            return message.channel.send(pauseError2)
        }
        if(client.distube.isPaused(message)) {
            const pauseError3 = new MessageEmbed()
            .setDescription('The Music is Already Paused!')
            .setColor("RED")
            return message.channel.send(pauseError3)
        }

        client.distube.pause(message)
        const embed = new MessageEmbed()
        .setDescription('Paused!')
        .setColor("BLUE")
        message.channel.send(embed)
    }
}