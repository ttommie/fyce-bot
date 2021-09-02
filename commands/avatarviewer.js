// REQUIRE PACKAGES
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// EXPORT SERVERINFO COMMAND DATA TO NODE
module.exports = ({
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Display a players avatar.'),
	async execute(interaction) {
		// REFERENCE THE USER
		const user = interaction.user;
		// CREATE TEST EMBED
		const avatarViewerEmbed = new MessageEmbed();
		avatarViewerEmbed.setColor('#36393F');
		avatarViewerEmbed.setTitle(`${user.tag}'s Avatar`);
		avatarViewerEmbed.setAuthor('Fyce Bot - /avatar', user.avatarURL(), 'https://github.com/ttommie/fyce-bot/');
		avatarViewerEmbed.setImage(user.displayAvatarURL({ dynamic: true, size: 256 }));

		await interaction.reply({ embeds: [avatarViewerEmbed] });
	},
});

/* TODO */
// Add args for @ing other users
// Add dynamic changing setTitle

// NEXT COMMIT
// Mention the reference to the user.