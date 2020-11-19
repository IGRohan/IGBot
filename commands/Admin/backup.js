const backup = require("discord-backup");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "backup",
  description: "Creates a backup for your server",
  usage: "?backup [create/load/remove]",
  aliases: [],
  run: async (client, message, args) => {
    let server = message.guild.id;
    const action = args[0];

    if (!message.member.hasPermission("ADMINISTRATOR")) {
      const backupError = new MessageEmbed()
        .setDescription("You do not Have Permissions to create a backup")
        .setColor("RED");
      return message.channel.send(backupError);
    }
    if (!action) {
      const backupActions = new MessageEmbed()
        .setDescription(
          "No Action Specified. Here are all the actions:- \n\n 1. backup create: Creates a Backup for your server \n 2. backup load: Loads the backup in the server \n 3. backup list: Sends you a list of backups that you have created"
        )
        .setColor("RED");
      return message.channel.send(backupActions);
    }

    if (action == "create") {
      try {
        const m = await message.channel.send(
          ":arrows_counterclockwise: Making a Backup. Please Wait."
        );
        backup
          .create(message.guild, {
            jsonSave: true,
            jsonBeautify: true,
          })
          .then((backups) => {
            message.channel.send(
              `Backup has been created! Backup ID has been sent to ${message.member}`
            );
            message.member.send(
              `Backup for ${message.guild.name} has been created. \n\n Backup ID: \`${backups.id}\` \n Make sure to copy and save this somewhere.`
            );
            m.delete();
          });
      } catch (err) {
        console.log(err);
        message.channel.send(
          "There was an unexpected error while creating a backup"
        );
      }
    }

    if (action == "load") {
      const Id = args[1];
      if(!Id) return message.channel.send('Please provide a Backup ID')
      if(isNaN(Id)) return message.channel.send('Invalid ID')
    
      backup.load(Id, message.guild).then(backup.remove(args[1]));
    }
    
  },
};
