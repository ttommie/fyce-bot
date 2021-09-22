// REQUIRE PACKAGES
const { readdirSync } = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

// EXPORT PING COMMAND DATA TO NODE
module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Help Command to provide proper usage of all commands for fyce-bot'),
	async execute(interaction) {
		// DEFINE A DIRECTORIES VARIABLE
		var directories = []
		// REFERENCE COMMAND FOLDER
		const commandFolder = readdirSync('./src/commands');

		// FOR EACH FOLDER WITHIN THE COMMAND FOLDER PUSH IT TO THE ARRAY
		for (const folders of commandFolder) {
			directories.push(folders.toUpperCase()) 
		}
		
		// CONSOLE LOG TO TEST IF WE ARE PROPERLY GETTING ALL FILE DIRECTORIES
		console.log(directories)

		await interaction.reply('Help command under development');
	},
};