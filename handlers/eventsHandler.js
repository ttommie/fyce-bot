const { readdirSync } = require('fs');

module.exports = (client, Discord) => {
	const eventsFolders = readdirSync('./events');
	for (const folders of eventsFolders) {
		const eventFiles = readdirSync(`./events/${folders}`).filter(files => files.endsWith('.js'));
		for (const files of eventFiles) {
			const event = require(`../events/${folders}/${files}`);
			if (event.once) {
				client.once(event.name, (...args) => event.execute(...args, client, Discord));
			}
			else {
				client.on(event.name, (...args) => event.execute(...args, client, Discord));
			}
		}
	}
};