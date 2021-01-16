const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'deletecommand',
    description: "Deletes a custom command.",
    usage: "?deletecommand <Command Name>",
    aliases: ['delcmd'],
    run: async(client, message, args) => {

        if(!message.member.hasPermission('ADMINISTRATOR')) {
            if(!message.author.id === message.guild.ownerID) {
                return message.channel.send(`You do not have permissions to delete this command.`)
            }
        }

        if(!args[0]) return message.channel.send(`You Need to give a command to delete!\n\n\`deletecommand <Command Name>\``)
        let commandName = args[0].toLowerCase()

        let database = db.get(`guildConfigurations_${message.guild.id}.commands`)
        if(database) {
            let data = database.find(x => x.name === commandName.toLowerCase())
            if(!data) return message.channel.send(`Unable to find the command \`${commandName}\``)

            let value = database.indexOf(data)
            delete database[value]

            var filter = database.filter(x => {
                return x != null && x != ''
            })

            db.set(`guildConfigurations_${message.guild.id}.commands`, filter)
            const embed = new MessageEmbed()
            .setTitle(`Command Deleted`)
            .setDescription(`Successfully Deleted **${commandName}** command`)
            .setColor('BLUE')

            return message.channel.send(embed)
        }
        else {
            return message.channel.send(`I was unable to find that command.`)
        }
    }
}