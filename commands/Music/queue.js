const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'queue',
    description: "Gives you the server queue list!",
    usage: "?queue",
    aliases: [],
    run: async(client, message, args) => {
        let queue = client.distube.getQueue(message);
        if (!queue) {
            const queueError = new MessageEmbed()
            .setDescription("There is Nothing Playing")
            .setColor("RED")
            return message.channel.send(queueError)
        }
        let q = queue.songs.map((song, i) => {
            return `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``
        }).join("\n");

        const embed = new MessageEmbed()
        .setDescription(`**Server Queue: ** \n\n  ${q}`)
        .setColor("BLUE")

        message.channel.send(embed)
    }
}