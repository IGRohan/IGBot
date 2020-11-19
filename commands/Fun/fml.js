const { Client } = require("blague.xyz");
const { VDM } = require("blague.xyz/lib/VDM");
const { MessageEmbed, Message } = require("discord.js");
const joker = new Client(process.env.BlagueApi, {
    defaultLang: "EN" //  The default language for jokes and fml  
});

module.exports = {
    name: 'fml',
    description: "Gives You A FML story",
    category: 'fun',
    run: async(client, message, args) => {
        joker.randomVDM().then((vdm) => {
            const embed = new MessageEmbed()
            .setDescription(vdm.content)
            .setColor('#04EEFF')

            message.channel.send(embed)
        })
    }
}