// REQUIRE PACKAGES
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// EXPORT SERVERINFO COMMAND DATA TO NODE
module.exports = ({
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Basic Server Info.'),
	async execute(interaction) {
		// CREATE TEST EMBED
		const serverInfoEmbed = new MessageEmbed();
		serverInfoEmbed.setTitle('Server Information');
		serverInfoEmbed.setColor('#36393F');
		serverInfoEmbed.setURL('https://discord.js.org/');
		serverInfoEmbed.setAuthor('Fyce Bot - /serverinfo', /* ICON IMAGE HERE */ 'https://github.com/ttommie/fyce-bot/');
		serverInfoEmbed.setDescription('Server Info Description');
		serverInfoEmbed.setThumbnail('https://i.imgur.com/AfFp7pu.png');


		await interaction.reply({ embeds: [serverInfoEmbed] });
	},
});

/* TO-DO */
// MAKE CONNECTION TO GUILD
// SET UP SERVER EMBED WITH GUILD INFORMATION