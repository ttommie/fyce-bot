const { readdirSync } = require('fs');

module.exports = (client) => {
	const commandFolders = readdirSync('./src/commands');
	for (const folders of commandFolders) {
		const commandFiles = readdirSync(`./src/commands/${folders}`).filter(files => files.endsWith('.js'));
		for (const files of commandFiles) {
			const command = require(`../commands/${folders}/${files}`);
			client.commands.set(command.data.name, command);
		}
	}
};