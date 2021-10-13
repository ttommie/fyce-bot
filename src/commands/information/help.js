// REQUIRE PACKAGES
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

// EXPORT PING COMMAND DATA TO NODE
module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Help Command to provide proper usage of all commands for fyce-bot ❓'),
	async execute(interaction) {
		// CREATE A DROP DOWN MENU
		const row = new MessageActionRow()
			.addComponents(
				// CREATE THE SELECT MENU WITH OPTIONS
				new MessageSelectMenu()
					.setCustomId('select') // SET A CUSTOM ID TO REFERENCE THE MENU
					.setPlaceholder('Nothing Selected') // SET A PLACE HOLDER BEFORE A SELECTION IS MADE
					.addOptions([ // ADD DIFFERENT OPTIONS WITH VALUES
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);

		// SEND THE REPLY WITH A MESSAGE AND THE SELECT MENU
		await interaction.reply({ content: 'Help command under development', components: [row] });
	},
};