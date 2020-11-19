const weather = require('weather-js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'weather',
    description: "Gives You The Weather For a specific Place",
    usage: "?weather [location]", 
    run: async(client, message, args) => {
        const ErrorEmbed  = new MessageEmbed()
        .setDescription("You Need To Specify A Location")
        .setColor("#f54242")

        weather.find({search: args.join(" "), degreeType: 'C'}, function(error, result) {
            if(error) return message.channel.send(error)
            if(!args[0]) return message.channel.send(ErrorEmbed)

            if( result === undefined || result.lenght === 0) return message.channel.send("**Invalid Location**")
            var current = result[0].current;
            var location = result[0].location;

            const weatherInfo = new MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather Report For ${current.observationpoint}`)
            .setImage(current.imageUrl)
            .setColor("#34ebc3")
            .addField("Timezone" , `UTC${location.timezone}`, true)
            .addField("Degree Type" , "Celcius", true)
            .addField("Temperature", `${current.temperature}` , true)
            .addField('Wind', `${current.winddisplay}` , true)
            .addField('Feels Like', `${current.feelslike}`, true)
            .addField('Humidity', `${current.humidity}` , true)


            message.channel.send(weatherInfo)
        })
    }
}