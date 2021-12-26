/*
* Programmer : Tommie
* Project : Fyce - Bot
* Desc: A small discord bot to practice building with node.js
*/

// REQUIRED PACKAGES
require('dotenv').config();
const { Client, Collection, Intents, Discord } = require('discord.js');

// CREATE CLIENT INSTANCE
const client = new Client({ intents: [ Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

// CREATE COLLECTION OF COMMANDS
client.commands = new Collection();

// REQUIRE ALL HANDLERS
['eventsHandler', 'commandsHandler'].forEach(handler => {
	require(`./handlers/${handler}`)(client, Discord);
});

// LOGIN INTO CLIENT INSTANCE USING TOKEN
client.login(process.env.TOKEN_KEY);