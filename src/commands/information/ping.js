// REQUIRE PACKAGES
const { SlashCommandBuilder } = require('@discordjs/builders');

// EXPORT PING COMMAND DATA TO NODE
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('**Pong**!\n*This is a test command to verify the bot is up*');
	},
};