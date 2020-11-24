const { Client } = require("discord.js")
const db = require('quick.db')

module.exports = (client) => {
    client.on('guildMemberAdd', (member) => {
        
        let guildConfig = db.get(`guildConfigurations_${member.guild.id}.welcome`)
        const channelId = db.get(`Welcome_Channel_${member.guild.id}`)
        if(channelId === null) return;
        if(guildConfig === null) guildConfig = 'disabled'
        if(guildConfig === 'disabled') return;
        const text = `Welcome to ${member.guild.name} Server <@${member.id}>`
        const channel = member.guild.channels.cache.get(channelId)
        channel.send(text)
    })
}