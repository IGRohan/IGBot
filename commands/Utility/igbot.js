const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'igbot',
    description: "Gives the Invite Link for this Bot to add it to your server!",
    usage: "?igbot",
    aliases: ['ig'],
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setDescription('You Can Invite me to Your server using the \'Click Me\' Button \n\n [Click Me](https://discord.com/api/oauth2/authorize?client_id=785838473550233631&permissions=8&scope=bot)')
        .setColor("BLUE")
        
        
        message.channel.send(embed)
    }
}