const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'config',
    description: "Check Server Configurations. (Enabled and Disabled Plugins)",
    usage: "?config",
    aliases: [],
    run: async(client, message, args) => {
        let welcomePlugin = db.get(`guildConfigurations_${message.guild.id}.welcome`)
        if(welcomePlugin === null) welcomePlugin = 'Disabled'
        let welcomeChannel = db.get(`Welcome_Channel_${message.guild.id}`)
        if(welcomeChannel === null) welcomeChannel = 'None'
        if(welcomeChannel !== null) welcomeChannel = `<#${welcomeChannel}>`
        

        const embed = new MessageEmbed()
        .setAuthor(`Server Configurations`)
        .addField(`Plugins`, [
            `**❯ Welcome Plugin:** ${welcomePlugin}`
        ])
        .addField(`Channels`, [
            `**❯ Welcome Channel:** ${welcomeChannel}`
        ])
        .setColor("BLUE")
        
        
        message.channel.send(embed)
    }
}