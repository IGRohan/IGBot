## Before You Begin

1. Make sure you have installed [Node.js](https://nodejs.org/en/) v14 or higher, [Git](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) and [MongoDB](./tutorials/mongodb/index).
2. Clone this repository with `git clone https://github.com/IGRohan/IGBot.git`.
3. Run `cd IGBot` to move in the folder that Git has just created.

## Edit the configuration

You need to clone the `.env.example` file and to rename it to `.env`. You will then have to complete it with your informations.
The `.env.example` file will look something like this - 

```json
{
    token= ""
    prefix= "?"
    mongo_url= ""
    blagueApi= ""
}
```


Some Important Information:

*   [Token](https://discord.com/developers/applications): Ofcourse, Your Bot Token.
*   [Mongo-URL](./tutorials/mongodb/index): MongoDB Database connection string to store data
*   [BlagueAPI](https://blague.xyz/login): API key is used for the `joke` & `fml` command



> Emojis used by this bot are default emojis, due to which all of the reponses it gives whether it be on any server, the emojis won't mess up. 
You May change them according to your needs!

## Install dependencies

1. **FFMPEG:** Install FFMPEG by running the following command `npm install -g ffmpeg-static`
2. Open an **ADMIN** command prompt, or PowerShell.
3. Run the following command `npm install -g --production windows-build-tools`.
4. And to install all the others dependencies, run `npm install`.

## Launch the bot

1. Run `node index.js`
2. Enjoy!



