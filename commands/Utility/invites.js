const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'invites',
    description: "Gives You the list of top 5 people with most invites to your server!",
    usage: "?invites",
    aliases: ['inv'],
    run: async(client, message, args) => {
        message.guild.fetchInvites().then((invites) => {
            const inviteCounter = {}


            invites.forEach((invite => {
                const { uses, inviter } = invite
                const { username, discriminator } = inviter

                const name = `${inviter}`

                inviteCounter[name] = (inviteCounter[name] || 0) + uses
             }))

             let replyText = new MessageEmbed()
             .setDescription('Invites: \n')
             .setColor("BLUE")

             const sortedInvites = Object.keys(inviteCounter).sort((a, b) => inviteCounter[b] - inviteCounter[a])

             if (sortedInvites.length > 5) sortedInvites.length = 5
             else if(sortedInvites.length > 5) sortedInvites.length = sortedInvites.length


             for(const invite of sortedInvites) {
                 const count = inviteCounter[invite]
                 replyText.description += `\n${invite} has invited ${count} member(s)!`
             }
             message.channel.send(replyText)


        })
    }
}