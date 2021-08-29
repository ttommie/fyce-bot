// REQUIRE PACKAGES
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// CREATE TEST EMBED
const serverInfoEmbed = new MessageEmbed();
serverInfoEmbed.setTitle('Some Title');
serverInfoEmbed.setColor('#0099ff');
serverInfoEmbed.setTitle('Some title');
serverInfoEmbed.setURL('https://discord.js.org/');
serverInfoEmbed.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org');
serverInfoEmbed.setDescription('Some description here');
serverInfoEmbed.setThumbnail('https://i.imgur.com/AfFp7pu.png');

// EXPORT PING COMMAND DATA TO NODE
module.exports = ({
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Basic Server Info.'),
	async execute(interaction) {
		await interaction.reply('Test Reply');
	},
});