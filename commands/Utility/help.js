const { MessageEmbed } = require("discord.js")


module.exports = {
    name: 'help',
    description: "Gives You a List of Commands that you can Use!",
    aliases: ['h'],
    run: async(client, message, args) => {
        const name = args[0]
        const command = client.commands.get(name) || client.commands.find(c => c.aliases && c.aliases.includes(name))

        if (!command) {
            const embed = new MessageEmbed()
                .setTitle('IGBot Commands')
                //.setDescription(`${client.commands.map(c => c.name).join("\n  ")}`)
                .addField(':ninja: Moderation/Admin', "`kick`, `mute`, `unmute`, `ban`, `unban`,`forceban`, `clear`, `addrole`, `warn` ,\
`warnings`, `backup`, `ctopic`, `lockchannel`, `unlockchannel`, `setwelcome`, `disablewelcome` ")
                .addField(':first_place: Fun', "`ascii`, `joke`, `fml`, `meme`, `triggered`, `changemymind`, `kiss`, `slap`, `shit`,\
`advice`,`wouldyourather`, `compliment`")
                .addField(':tools: Utility', "`help`, `config`, `weather`, `serverinfo`, `userinfo`, `channelinfo`, `botstats`, `ping`,\
 `invites`, `morse`,`avatar`, `bmi`, `translate`, `calculator`")
                .addField(':money_with_wings: Economy', "`balance`, `daily`, `work`, `leaderboard`, `pay`, `deposit`, `withdraw`, `rob`,\
")
                .addField(':man_detective: Owner', "`botinfo`")
                .addField(':headphones: Music', "`join`, `leave`, `play`, `stop`, `skip`, `volume`, `queue`, `pause`, `resume`, `loop`,\
`autoplay`, `filter` ")
                .setColor('BLUE')
                .setFooter(`Use ?help <command> to get more info about it!`)
                

            return message.channel.send(embed)

        }

        var data = []

        data.push(`**Name:** ${command.name}`)

        //if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(", ")}`)
        if (command.description) data.push(`**Description:** ${command.description}`)
        if (command.cooldown) data.push(`**Cooldown:** ${command.cooldown} Second(s)`)
        if (command.usage) data.push(`**Usage:** ${command.usage}`)

       const dataEmbed = new MessageEmbed()
       .setTitle(`Command Info - ${command.name}`)
       .setDescription(data)
       .setColor("BLUE")

       return message.channel.send(dataEmbed)

    }
}