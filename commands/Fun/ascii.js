const { Message } = require('discord.js');
const figlet = require('figlet');

module.exports = {
    name: 'ascii',
    description: "Converts Given Text Into Ascii",
    usage: "?ascii <text>",
    run: async(client, message, args) => {
        if(!args[0]) return message.channel.send("`Please Provide A Text That You Wanna Convert`")

        msg = args.join(" "),


        figlet.text(msg, function (err, data) {
            if(err) {
                console.log(err)
            }

            if(data.length > 2000) return message.channel.send("`Please Provide Text Below 2000 Characters`")

            message.channel.send('```' + data + '```')
        })
    }
}

