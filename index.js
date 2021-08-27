/*
* Programmer : Tommie
* Project : Fyce - Bot
* Desc: A small discord bot to practice building with node.js
*/

// REQUIRED PACKAGES
require('dotenv').config();
const fileSystem = require('fs');
const { Client, Collection, Intents } = require('discord.js');

// CREATE CLIENT INSTANCE
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// CREATE COLLECTION OF COMMANDS
client.commands = new Collection();

// SORT THROUGH COMMAND FOLDER TO LOOK FOR .JS FILES
const commandFiles = fileSystem.readdirSync('./commands').filter(file => file.endsWith('.js'));

// STORE COMMAND FILES FOUND INTO AN ARRAY
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// CONSOLE LOG WHEN CLIENT IS ONLINE
client.once('ready', () => {
	console.log(`${client.user.tag} is online!`);
});

// CHECK IF THE COMMAND THE USER ENTERED EXIST
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (err) {
		console.error('Error: ' + err);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// LOGIN INTO CLIENT INSTANCE USING TOKEN
client.login(process.env.TOKEN_KEY);