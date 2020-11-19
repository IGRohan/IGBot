const { MessageEmbed } = require("discord.js");
const db = require('quick.db');;

module.exports = {
    name: 'leaderboard',
    description: "Check Who's leading the charts in terms of IGBank Balance!",
    usage: "?leaderboard",
    aliases: ['level', 'levels'],
    run: async(client, message, args) => {
        let money = db.startsWith(`bank_${message.guild.id}`, {sort: '.data'});
        let content = "";

        for(let i = 0; i < money.length; i++) {
            let user = client.users.cache.get(money[i].ID.split('_')[2]).username

            content += `${i+1}. ${user} - \$${money[i].data} \n`

        }

        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(`${message.guild.name}\'s Leaderboard`)
        .setDescription(`${content}`)
        .setTimestamp()

        message.channel.send(embed)
    }
}