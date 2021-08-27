// REQUIRED PACKAGES
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();

// CREATE A LIST VARIABLE CALLED COMMANDS
const commands = [];

// PUST THE COMMAND FILES FOUND INTO THE LIST VARIABLE
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN_KEY);

// BACK END WORK FOR UPLOADING COMMANDS TO THE GUILD
(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
			{ body: commands },
		);

		console.log('Successfully registered application commands.');
	}
	catch (err) {
		console.error('Error:' + err);
	}
})();