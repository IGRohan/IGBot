const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client();
const mongoose = require("mongoose");
const ytdl = require("ytdl-core");
// const queue = new Map()
const Distube = require("distube");
const config = require('./config/config.json')



const fs = require("fs");

client.distube = new Distube(client, {
  searchSongs: false,
  leaveOnFinish: false,
  leaveOnStop: false,
});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.emotes = config.emoji

//Command Handler
function getDirectories() {
  return fs.readdirSync("./commands").filter(function subFolders(file) {
    return fs.statSync("./commands/" + file).isDirectory();
  });
}
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const folder of getDirectories()) {
  const folderFiles = fs
    .readdirSync("./commands/" + folder)
    .filter((file) => file.endsWith(".js"));
  for (const file of folderFiles) {
    commandFiles.push([folder, file]);
  }
}
for (const file of commandFiles) {
  let command;
  if (Array.isArray(file)) {
    command = require(`./commands/${file[0]}/${file[1]}`);
  } else {
    command = require(`./commands/${file}`);
  }

  client.commands.set(command.name, command);
  console.log(`✅ Success! Loaded Command ${command.name} `);
}

// Ready Event


const mongo_url = process.env.mongo_url;
client.once("ready", () => {
  console.log("IGBot is online!");

  mongoose
    .connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Connected to IGBot Database"));
});

//Message Event
client.on("message", async (message) => {
  if (!message.guild) return;
  const prefix = process.env.prefix;
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  

  // if(!cmd) return;
  const cmd =
    client.commands.get(command) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(command));
  if (cmd) cmd.run(client, message, args);

  if (message.content.startsWith(`${prefix}check`)) {
    message.react("✅");
  }

  
  //Commands Execution Ends Here

  //Setting Bot's Status
  
  client.user.setPresence({
    activity: {
      type: "WATCHING",
      name: `${prefix}help`,
    },
  });

});



const status = (queue) =>
  `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"
  }\` | Loop: \`${queue.repeatMode
    ? queue.repeatMode == 2
      ? "All Queue"
      : "This Song"
    : "Off"
  }\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

client.distube
  .on("playSong", (message, queue, song) => {
    const playSongEmbed = new Discord.MessageEmbed()
      .setTitle('Started Playing')
      .setDescription(`[${song.name}](${song.url})`)
      .addField('**Views:**', song.views)
      .addField('**Duration:**', song.formattedDuration)
      .addField('**Status**', status(queue))
      .setThumbnail(song.thumbnail)
      .setColor("BLUE")
    message.channel.send(playSongEmbed)
  })
  .on("addSong", (message, queue, song) =>
    message.channel.send(
      `${client.emotes.success} | Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    )
  )
  .on("playList", (message, queue, playlist, song) =>
    message.channel.send(
      `${client.emotes.play} | Play \`${playlist.title}\` playlist (${playlist.total_items
      } songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration
      }\`\n${status(queue)}`
    )
  )
  .on("addList", (message, queue, playlist) =>
    message.channel.send(
      `${client.emotes.success} | Added \`${playlist.title}\` playlist (${playlist.total_items
      } songs) to queue\n${status(queue)}`
    )
  )
  // DisTubeOptions.searchSongs = true
  .on("searchResult", (message, result) => {
    let i = 0;
    message.channel.send(
      `**Choose an option from below**\n${result
        .map(
          (song) => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``
        )
        .join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`
    );
  })
  // DisTubeOptions.searchSongs = true
  .on("searchCancel", (message) =>
    message.channel.send(`${client.emotes.error} | Searching canceled`)
  )
  .on("error", (message, err) =>
    message.channel.send(
      `${client.emotes.error} | An error encountered: ${err}`
    )
  );


client.login(process.env.token);
