const Canvacord = require("canvacord/src/Canvacord")
const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'slap',
    description: "Slap Someone, What else did you expect?",
    usage: '?slap <mention>',
    run: async(client, message, args) => {
        const member =  message.mentions.users.first()
        const mentionedMemberAvatar = member.displayAvatarURL({dynamic: false, format: "png"})
        const messageAuthorAvatar = message.author.displayAvatarURL({dynamic: false, format: "png"})

        let image = await Canvacord.slap(messageAuthorAvatar, mentionedMemberAvatar)

        let slap = new MessageAttachment(image, "slap.png")

        message.channel.send(slap)
    }
}