module.exports = {
	name: 'interactionCreate',
	once: false,
	async execute(interaction) {
		if (!interaction.isCommand()) return;

		// FETCH THE NAME OF THE COMMAND AND ASIGN IT TO A VARIABLE CALLED COMMAND
		const command = interaction.client.commands.get(interaction.commandName);
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
	},
};