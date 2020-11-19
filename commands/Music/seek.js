const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'seek',
    description: "Set the playing time to another position",
    usage: "?seek <amount in seconds>",
    aliases: [],
    run: async(client, message, args) => {
        if (!message.member.voice.channel) {
            const seekError = new MessageEmbed()
              .setDescription("You Need to be in a Voice Channel to seek through Music!")
              .setColor("RED")
            return message.channel.send(seekError)
        }
        if(!client.distube.isPlaying(message)) {
            const seekError2 = new MessageEmbed()
            .setDescription("There is Nothing Playing")
            .setColor("RED")
            return message.channel.send(seekError2)
        }
        if(isNaN(args[0])) {
            const seekError3 = new MessageEmbed()
            .setDescription('Please Enter a Valid Number of second(s) to Seek!')
            .setColor("RED")
            return message.channel.send(seekError3)
        }

        const seekAmount = args[0] * 1000 

        client.distube.seek(message, seekAmount)
        message.react('✅')
    }
}