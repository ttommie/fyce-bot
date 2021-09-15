// REQUIRE PACKAGES
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// EXPORT SERVERINFO COMMAND DATA TO NODE
module.exports = ({
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Display a users avatar.')
		.addUserOption(option =>
			option.setName('target')
				.setDescription('Target a user...')
				.setRequired(false)),
	async execute(interaction) {
		// REFERENCE THE TARGET
		let user = interaction.options.getUser('target');

		// IF NO TARGET ASSIGN THE USER TO THE VARAIBLE
		if (interaction.options.getUser('target') === null) {
			user = interaction.user;
		}
		// CREATE TEST EMBED
		const avatarViewerEmbed = new MessageEmbed();
		avatarViewerEmbed.setColor('#36393F');
		avatarViewerEmbed.setTitle(`${user.tag}'s Avatar`);
		avatarViewerEmbed.setAuthor('Fyce Bot - /avatar', user.avatarURL(), 'https://github.com/ttommie/fyce-bot/');
		avatarViewerEmbed.setImage(user.displayAvatarURL({ dynamic: true, size: 256 }));

		await interaction.reply({ embeds: [avatarViewerEmbed] });
	},
});