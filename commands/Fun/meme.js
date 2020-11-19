const randomPuppy = require('random-puppy')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'meme',
    description: "Sends A Random Meme!",
    usage: "?meme",
    run: async(client, message, args) => {

        const subReddits = ['memes' , 'dankmemes']
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)


        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setImage(img)
        .setTitle(`Meme from ${random}`)
        .setURL(`https://reddit.com/r/${random}`)


    
    message.channel.send(embed);

    }
}