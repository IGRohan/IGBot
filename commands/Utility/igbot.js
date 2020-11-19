const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'invite',
    description: "Gives the Invite Link for this Bot to add it to your server!",
    usage: "?igbot",
    aliases: ['ig'],
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setDescription('You Can Invite me to Your server using the \'Click Me\' Button \n\n [Click Me](https://discord.com/api/oauth2/authorize?client_id=695343098485669918&permissions=2147483639&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fcallback&scope=bot)')
        .setColor("BLUE")
        
        
        message.channel.send(embed)
    }
}