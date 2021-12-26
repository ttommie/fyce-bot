module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`${client.user.tag} is online!`);
		client.user.setPresence({ status: 'idle' });
		client.user.setActivity({ name: `Over ${client.users.cache.size - 1}`, type: 'WATCHING' });
	},
};