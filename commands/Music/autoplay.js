const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'autoplay',
    description: "Toggles Autoplay to ON/OFF",
    usage: "?autoplay",
    aliases: ['autop'],
    run: async(client, message, args) => {
        if (!message.member.voice.channel) {
            const autoplayError = new MessageEmbed()
              .setDescription("You Need to be in a Voice Channel to toggle autoplay")
              .setColor("RED")
            return message.channel.send(autoplayError)
        }
        if(!client.distube.isPlaying(message)) {
            const autoplayError2 = new MessageEmbed()
            .setDescription("There is Nothing Playing")
            .setColor("RED")
            return message.channel.send(autoplayError2)
        }

        let mode = client.distube.toggleAutoplay(message)
        const embed = new MessageEmbed()
        .setDescription(`Autoplay Mode Set to:\`` + (mode ? "On" : "Off") + "\`")
        .setColor("BLUE")
        message.channel.send(embed)
    }
}