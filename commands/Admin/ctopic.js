const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ctopic',
    description: "Change the Channel Topic by Just a command \n Using the command without a channel mentioned will change the topic of the channel you're executing the command in",
    usage: "?ctopic <#Channel>",
    aliases: ['channeltopic'],
    run: async(client, message, args) => {
        let channel = message.mentions.channels.first()
        let topic;
        
        if(!message.member.hasPermission('MANAGE_CHANNELS')) {
            const ctopicError = new MessageEmbed()
            .setDescription('You don\'t have permission to change channel topic!')
            .setColor('RED')
            return message.channel.send(ctopicError)
        }

        if(!channel) {
            channel = message.channel 
            topic = args.join(" ")
        } else {
            topic = args.slice(1).join(" ").trim()
        }

        if(!topic) {
            const ctopicError2 = new MessageEmbed()
            .setDescription('Please provide a new topic!')
            .setColor("RED")

            return message.channel.send(ctopicError2)
        }

        await channel.setTopic(topic)
        const embed = new MessageEmbed()
        .setDescription(`Successfully Set the Topic for ${channel} to: \n\n ${topic}`)
        .setColor('BLUE')

        message.channel.send(embed)
    }
}