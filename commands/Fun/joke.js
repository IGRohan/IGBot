const { Client } = require("blague.xyz");
const { MessageEmbed } = require("discord.js");
const joker = new Client(process.env.blagueApi, {
    defaultLang: "EN" //  The default language for jokes and fml  
});


module.exports = {
    name: 'joke',
    description: "Gives a random joke",
    run: async (client, message, args) => {
        joker.randomJoke().then((joke) => {

            const embed = new MessageEmbed()
                .setDescription(joke.toDiscordSpoils())
                .setColor('#04EEFF')

            message.reply(embed)

        });





    }
}
