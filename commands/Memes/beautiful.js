const canvacord = require('canvacord/src/Canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'beautiful',
    description: 'Sends a \'Oh that, that is beautiful\' meme.',
    usage: 'beautiful <@mention>',
    aliases: [],
    run: async(client, message, args) => {
        const member = message.mentions.users.first() || message.author;
        const memberAvatar = member.displayAvatarURL({ dynamic: false, format: 'png' })

        const image = await canvacord.beautiful(memberAvatar)
        const beautiful = new MessageAttachment(image, 'beautiful.png')
        return message.channel.send(beautiful)
    }
}