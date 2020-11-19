const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'addrole',
    description: "Adds the mentioned Role to the Mentioned user!",
    usage: "?addrole <role> <mentionMember>",
    run: async(client, message, args) => {

        if(!message.member.hasPermission("MANAGE_ROLES")) {
            const addroleError = new MessageEmbed()
            .setDescription("You Do Not Have Permissions to Add Roles")

            return message.channel.send(addroleError)
        }
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) {
            const addroleError2 = new MessageEmbed()
            .setDescription("I Do Not Have Permissions to Add Roles")

            return message.channel.send(addroleError2)
        }

        const mentionedRole = message.mentions.roles.first()
        const member = message.mentions.members.first()
        
        
        if(member.roles.cache.has(mentionedRole)) {
            const addroleError3 = new MessageEmbed()
            .setDescription(`${member} Already has the ${mentionedRole} Role.`)

            return message.channel.send(addroleError3)
        } 

        try{

        member.roles.add(mentionedRole)
        const addroleSuccess = new MessageEmbed()
        .setTitle('Addrole Success!')
        .setDescription(`Added ${mentionedRole} Role to ${member}`)
        .setColor("BLUE")

        message.channel.send(addroleSuccess)
       
        } catch(error) {
            console.log(error)
            message.channel.send("There was an Unexpected error while adding roles.")
        }

        
    }
}