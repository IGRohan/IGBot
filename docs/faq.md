# FAQ

## Developers questions

### Npm error : this is related to npm not being able to find a file.

If, when you try to install the modules with `npm install` this error appears, don't panic it is very easy to solve.  

![](https://i.goopics.net/ZYdZv.png)

It simply means that Git is not properly installed on your machine. Many tutorials are available on google for any type of operating system.

### Can I host the bot on Glitch?

Yes you can, only if you make a MongoDB cluster through the [Method posted here](./tutorials/mongodb/index)

### Can I host the bot on Heroku?

Yes, sure even if it will require you to be a little resourceful and time consuming.  
Here are some help links: 

*   [Use MongoDB with Heroku](https://scotch.io/tutorials/use-mongodb-with-a-node-application-on-heroku)
*   [Host a DiscordBot on Heroku](https://medium.com/@mason.spr/hosting-a-discord-js-bot-for-free-using-heroku-564c3da2d23f)

Good luck!

## Users questions

### Why don't the welcome messages get sent? 

You can configure welcome messages with `*setwelcome` and goodbye messages with `*setgoodbye`. 
If the welcome and/or goodbye messages don't get sent, type `*conf` to see your server configuration.
Check that IGBot has the permissions to send messages (and images if you have them enabled) in the channel that you have set as welcome channel. If all this is done and the message still doesn't get sent, [contact support](./contact/index)!

### How does auto-moderation work?

Auto moderation automatically removes Discord invitations. This prevents members from promoting their server in the chat.
If you have a salon dedicated to advertising, you have the possibility to disable auto moderation: `*automod off #channel`.

### The bot does not respond after sending a command

Check that the bot has the permissions to send messages and try again.  
If it still doesn't work, it's a bug, join the [support server](https://discord.atlanta-bot.fr)!  

## Any more questions? 
Join the [support server](https://discord.gg/NKQbh2sJ8W)!