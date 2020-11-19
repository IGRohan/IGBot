const mongoose = require("mongoose");
const warnSchema = require("../../models/warnSchema");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "unwarn",
  description: "Unwarn someone who was warned",
  usage: "?unwarn [warn ID] <@mention>",
  aliases: [],
  run: async (client, message, args) => {
    const mentionedUser = message.mentions.users.first();

    if (!message.member.hasPermission("KICK_MEMBERS", "BAN_MEMBERS")) {
      const unwarnError = new MessageEmbed()
        .setDescription("You do not have Permission to Unwarn someone")
        .setColor("RED");
      return message.channel.send(unwarnError);
    } else if (!mentionedUser) {
      const unwarnError2 = new MessageEmbed()
        .setDescription("You Need to mention a Member in order to Unwarn them")
        .setColor("RED");
      return message.channel.send(unwarnError2);
    }

    const reason = args.slice(2).join(" ") || "Not Specified";

    const warnDoc = await warnSchema
      .findOne({
        guildID: message.guild.id,
        memberID: mentionedUser.id,
      })
      .catch((err) => console.log(err));

    if (!warnDoc || !warnDoc.warnings.length) {
      const unwarnError3 = new MessageEmbed()
        .setDescription(`${mentionedUser} does not have any warnings`)
        .setColor("RED");
      return message.channel.send(unwarnError3);
    }

    const warnID = parseInt(args[0]);
    if(!warnID) {
        const noWarnID = new MessageEmbed()
        .setDescription('No WarnID Specified! Please provide a warn ID to clear.\n To check warn ID, use ?warnings <@mention> \n The correct usage of this command is ?unwarn [warnID] <@mention>')
        .setColor("RED")
        return message.channel.send(noWarnID)
    }

    if (warnID <= 0 || warnID > warnDoc.warnings.length) {
      const unwarnError4 = new MessageEmbed()
        .setDescription(
          "This is an invalid warning ID. \n To check warn ID, use ?warnings <@mention>"
        )
        .setColor("RED");
      return message.channel.send(unwarnError4);
    }

    warnDoc.warnings.splice(warnID - 1, warnID !== 1 ? warnID - 1 : 1);

    await warnDoc.save().catch((err) => console.log(err));

    const embed = new MessageEmbed()
      .setDescription(
        `Unwarned ${mentionedUser} \n **Reason:** ${reason ? `**${reason}**` : ""}`)
      .setColor("BLUE");

    message.channel.send(embed);
  },
};
