/*
* Programmer : Tommie
* Project : Fyce - Bot
* Desc: A small discord bot to practice building with node.js
*/

// REQUIRED PACKAGES
require('dotenv').config();
const { Client, Intents } = require('discord.js');

// CREATE A NEW CLIENT INSTANCE
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// ONCE THE CLIENT IS READY RUN THIS CODE ONCE
client.once('ready', () => {
	console.log(`${client.user.tag} is online!`);
});

// LOGIN INTO THE DISCORD CLIENT WITH GIVEN TOKEN
client.login(process.env.TOKEN_KEY);