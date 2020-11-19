const { MessageEmbed, version: djsversion } = require('discord.js')
const ms = require('ms')
const os = require('os')
const { utc } = require('moment')
const moment = require('moment')
const version = require('../../package.json')


module.exports = {
    name: 'botstats',
    description: "Gives You In-Depth Stats for IGBot",
    usage: "?botstats",
    aliases: ['botinfo', 'botstat'],
    run: async(client, message, args) => {
        function formatBytes(bytes) {
            if (bytes === 0) return '0 Bytes';
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            const i = Math.floor(Math.log(bytes) / Math.log(1024));
            return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
        }
		const uptime = moment
		.duration(client.uptime)
		.format(" D [days], H [hrs], m [mins], s [secs]");
        const core = os.cpus()[0];
        const embed = new MessageEmbed()
			.setThumbnail(client.user.displayAvatarURL())
			.setColor(message.guild.me.displayHexColor || 'BLUE')
			.addField('General', [
				`**❯ Client:** ${client.user.tag} (${client.user.id})`,
				`**❯ Commands:** ${client.commands.size}`,
				`**❯ Servers:** ${client.guilds.cache.size.toLocaleString()} `,
				`**❯ Users:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
				`**❯ Channels:** ${client.channels.cache.size.toLocaleString()}`,
				`**❯ Creation Date:** ${utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
				`**❯ Node.js:** ${process.version}`,
				`**❯ Version:** v${version.version}`,
				`**❯ Discord.js:** v${djsversion}`,
				`**❯ Uptime:** ${uptime}`,
				'\u200b'
			])
			.addField('System', [
				`**❯ Platform:** ${process.platform}`,
				`**❯ Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
				`**❯ CPU:**`,
				`\u3000 __Cores:__ ${os.cpus().length}`,
				`\u3000 __Model:__ ${core.model}`,
				`\u3000 __Speed:__ ${core.speed}MHz`,
				`**❯ Memory:**`,
				`\u3000 __Total:__ ${formatBytes(process.memoryUsage().heapTotal)}`,
				`\u3000 __Used:__ ${formatBytes(process.memoryUsage().heapUsed)}`
			])
            .setTimestamp();
            
            message.channel.send(embed)
    }

    
}


