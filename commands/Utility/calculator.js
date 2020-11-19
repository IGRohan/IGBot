const { MessageEmbed } = require('discord.js')
const math = require('mathjs')

module.exports = {
    name: 'calculator',
    description: "Calculator that can solve complex calculations!",
    usage: "?calculator <calculation> [?calculator 25 * 25]",
    aliases: ['calc'],
    run: async(client, message, args) => {

        if(!args[0]) {
            const calculatorError = new MessageEmbed()
            .setDescription(`No Calculation Specified`)
            .setColor('RED')

            return message.channel.send(calculatorError)
        }

        let result;

        try {
            result = math.evaluate(args.join(" ").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/"))
        } catch (error) {
            return message.channel.send(`Invalid Calculation`)
        }

        const embed = new MessageEmbed()
        .setAuthor(`Calculator`, client.user.displayAvatarURL())
        .addField(`Calculation`, `\`\`\`js\n${args.join("").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/")}\`\`\``)
        .addField(`Result`, `\`\`\`js\n${result}\`\`\``)
        .setColor("BLUE")

        message.channel.send(embed)
    }
}