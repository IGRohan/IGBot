const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'igbot',
    description: "Gives the Invite Link for this Bot to add it to your server!",
    usage: "?igbot",
    aliases: ['ig'],
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setDescription('You Can Invite me to Your server using the \'Click Me\' Button \n\n [Click Me](https://discord.com/oauth2/authorize?client_id=695343098485669918&scope=bot&permissions=8)')
        .setColor("BLUE")
        
        
        message.channel.send(embed)
    }
}