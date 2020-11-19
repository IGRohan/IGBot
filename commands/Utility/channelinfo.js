const moment = require('moment')
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'channelinfo',
    description: "Get info about the mentioned channel or current channel!",
    usage: "?channelinfo <#channel>",
    aliases: [],
    run: async(client, message, args) => {
        let channel = message.mentions.channels.first();

        if (!channel) {
            if (parseInt(args[0]) < 9223372036854775807n) {
              channel = message.guild.channels.cache.get(args[0]);
            } else channel = message.channel;
          }
      

        const formatDate = (date) => moment(date).format("MM/DD/YYYY")

        const topic = channel.topic ? channel.topic : "N/A";
        const channelId = channel.id
        const createdAt = formatDate(channel.createdAt)
        const type = channel.type === "text" ? "Text Channel" : "Voice Channel"

        const embed = new MessageEmbed()
        .setTitle(channel.name)
        .addField("Type", type, true)
        .addField("Topic", topic, true)
        .addField("ID:", channelId, true)
        .addField("Created On:", createdAt, true)
        .setColor("BLUE")

        message.channel.send(embed)
    }
}