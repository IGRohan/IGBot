const Canvacord = require("canvacord/src/Canvacord")
const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'kiss',
    description: "Kiss other member. virtually.",
    usage: "?kiss <mentionSomeone>",
    run: async(client, message, args) => {
        const member = message.mentions.users.first()
        const mentionedMemberAvatar = member.displayAvatarURL({dynamic: false, format: "png"})
        const messageAuthorAvatar = message.author.displayAvatarURL({dynamic: false, format: "png"})

        let image = await Canvacord.kiss(mentionedMemberAvatar, messageAuthorAvatar)

        let kiss = new MessageAttachment(image, "kiss.png")

        message.channel.send(kiss)

    }
}