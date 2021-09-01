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

// REQUIRE THE .JS COMMAND FILES FROM THE COMMAND FOLDER
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// COMMAND HANDLER
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	// FETCH THE NAME OF THE COMMAND AND ASIGN IT TO A VARIABLE CALLED COMMAND
	const command = client.commands.get(interaction.commandName);

	// IF THE COMMAND DOES NOT EXIST IT WILL RETURN WITH UNDEFINED
	if (!command) return;

	try {
		// IF EXIST IT WILL CALL THE EXECUTE OF THE COMMAND
		await command.execute(interaction);
	}
	catch (err) {
		// IF THERE WAS AN ERROR LOG THAT ERROR IN CONSOLE
		console.log('Error: ' + err);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

const eventFiles = fileSystem.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// LOGIN INTO CLIENT INSTANCE USING TOKEN
client.login(process.env.TOKEN_KEY);