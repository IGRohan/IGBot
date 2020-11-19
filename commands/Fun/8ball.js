const { MessageEmbed } = require('discord.js');
const answers = require('../../data/8ball.json')

module.exports = {
    name: '8ball',
    description: "Returns a Yes/No/Maybe and those kind of Answers. Ask Away!",
    usage: "?8ball <question>",
    aliases: [],
    run: async(client, message, args) => {
        const question = args.join(" ")

        if(!question) {
            const eightBallError = new MessageEmbed()
            .setDescription('Please Provide a Question')
            .setColor('RED')
            return message.channel.send(eightBallError)
        }
        const answer = answers[Math.floor(Math.random() * answers.length)];

        const embed = new MessageEmbed()
        .setTitle("8Ball")
        .setColor("BLUE")
        .addField(`Question:`, question)
        .addField(`Answer:`, answer);
        

        message.channel.send(embed);
        
    }
}