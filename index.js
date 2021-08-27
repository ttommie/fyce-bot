/*
* Programmer : Tommie
* Project : Fyce - Bot
* Desc: A small discord bot to practice building with node.js
*/

/* TODO */
// ADD COMMENTS TO EXPLAIN CODE

// REQUIRED PACKAGES
require('dotenv').config();
const fileSystem = require('fs');
const { Client, Collection, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fileSystem.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log(`${client.user.tag} is online!`);
});

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

client.login(process.env.TOKEN_KEY);