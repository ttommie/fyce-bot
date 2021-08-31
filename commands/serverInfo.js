// REQUIRE PACKAGES
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// CREATE TEST EMBED
const serverInfoEmbed = new MessageEmbed();
serverInfoEmbed.setTitle('Server Info Title');
serverInfoEmbed.setColor('#333333');
serverInfoEmbed.setURL('https://discord.js.org/');
serverInfoEmbed.setAuthor('Tommie', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org');
serverInfoEmbed.setDescription('Server Info Description');
serverInfoEmbed.setThumbnail('https://i.imgur.com/AfFp7pu.png');

// EXPORT SERVERINFO COMMAND DATA TO NODE
module.exports = ({
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Basic Server Info.'),
	async execute(interaction) {
		await interaction.reply({ embeds: [serverInfoEmbed] });
	},
});