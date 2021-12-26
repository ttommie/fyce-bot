// REQUIRE PACKAGES
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// EXPORT PING COMMAND DATA TO NODE
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong! 🏓'),
	async execute(interaction) {
		const pingEmbed = new MessageEmbed();
		pingEmbed.setColor('#36393F');
		pingEmbed.setAuthor('Fyce Bot - /ping', interaction.user.avatarURL(), 'https://github.com/ttommie/fyce-bot/');
		pingEmbed.setTitle('Ping Information');
		pingEmbed.setDescription(`API Latency is **${Math.round(interaction.client.ws.ping)}** ms`);
		await interaction.reply({ embeds: [pingEmbed] });
	},
};