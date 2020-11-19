const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'bmi',
    description: "Calculate Your BMI",
    usage: "?bmi <weight in kilograms> <height in centimetres>",
    aliases: [],
    run: async(client, message, args) => {

        const weight = args[0];
        const height = args[1];

        if(!args[1]) {
            const bmiError = new MessageEmbed()
            .setDescription('You Have either forgot to give weight or height. Please reuse the command with proper format.\
\n\n(Format: ?bmi <weight in kilograms> <height in centimetres>)')
            .setColor("BLUE")

            return message.channel.send(bmiError)
        }

        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        let category;
        if(bmi < 18.5) category = "Underweight"
        if(bmi > 24.9) category = "Overweight"
        if(bmi > 30) category = "Obesity"
        if(bmi < 24.9 && bmi > 18.5) category = "Normal"

        const embed = new MessageEmbed()
        .setTitle(`${message.author.username}\'s BMI`)
        .addField('Weight', weight)
        .addField('Height', height)
        .addField('BMI' , bmi)
        .addField('Category' , category)
        .setColor("BLUE")

        message.channel.send(embed)
    }
}