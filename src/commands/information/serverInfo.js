// REQUIRE PACKAGES
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// EXPORT SERVERINFO COMMAND DATA TO NODE
module.exports = ({
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Basic Server Info.'),
	async execute(interaction) {
		// REFERENCE THE GUILD
		const guild = interaction.guild;
		// CREATE TEST EMBED
		const serverInfoEmbed = new MessageEmbed();
		serverInfoEmbed.setColor('#36393F');
		serverInfoEmbed.setAuthor('Fyce Bot - /serverinfo', interaction.user.avatarURL(), 'https://github.com/ttommie/fyce-bot/');
		serverInfoEmbed.setTitle('Server Information');
		serverInfoEmbed.setThumbnail(guild.iconURL());
		serverInfoEmbed.addFields(
			{ name: 'Name', value: `${guild.name}`, inline: true },
			{ name: '\u200B', value: '\u200B', inline: true },
			{ name: 'Owner', value: `<@${guild.ownerId}>`, inline: true },
			{ name: 'Total Members', value: `${guild.memberCount}`, inline: true },
			{ name: 'Users Count', value: `${guild.members.cache.filter(member => !member.user.bot).size}`, inline: true },
			{ name: 'Bots Count', value: `${guild.members.cache.filter(member => member.user.bot).size}`, inline: true },
			{ name: 'Text Channels', value: `${guild.channels.cache.filter(channels => channels.type === 'GUILD_TEXT').size}`, inline: true },
			{ name: 'Voice Channels', value: `${guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size}`, inline: true },
			{ name: 'Roles Count', value: `${guild.roles.cache.size}`, inline: true },
		);
		serverInfoEmbed.setFooter(`${guild.name} - Date Created`);
		serverInfoEmbed.setTimestamp(`${guild.createdAt.toUTCString().substr(0, 16)}`);

		await interaction.reply({ embeds: [serverInfoEmbed] });
	},
});