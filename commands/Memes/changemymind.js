const Canvacord = require("canvacord/src/Canvacord")
const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'changemymind',
    description: "Sends a Customized Change My Mind meme",
    usage: "?changemymind <text>",
    run: async(client, message, args) => {
        let text = args.join(" ")

        let image =  await Canvacord.changemymind(text)

        let ChangeMyMind = new MessageAttachment(image, "cmm.png")

        message.channel.send(ChangeMyMind)
    }
}