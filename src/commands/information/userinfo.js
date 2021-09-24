// REQUIRE PACKAGES
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

// EXPORT SERVERINFO COMMAND DATA TO NODE
module.exports = ({
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Display a users profile information.')
		.addUserOption(option =>
			option.setName('target')
				.setDescription('Target a user... 👥')
				.setRequired(false)),
	async execute(interaction) {
		// REFERENCE THE TARGET
		let member = interaction.options.getMember('target');
		// IF NO TARGET ASSIGN THE USER TO THE VARAIBLE
		if (interaction.options.getUser('target') === null) {
			member = interaction.member;
		}
		// CREATE TEST EMBED
		const whoisEmbed = new MessageEmbed();
		whoisEmbed.setColor('#36393F');
		whoisEmbed.setAuthor('Fyce Bot - /userinfo', member.user.avatarURL(), 'https://github.com/ttommie/fyce-bot/');
		whoisEmbed.setDescription(`${member}`);
		whoisEmbed.setThumbnail(`${member.user.displayAvatarURL()}`);
		whoisEmbed.addFields(
			{ name: 'Register Date', value: `${moment(member.user.createdAt).format('ddd/MMM/YY, h:ss A')}`, inline: true },
			{ name: '\u200b', value: '\u200b', inline: true },
			{ name: 'Joined Date', value: `${moment(member.JoinedAt).format('ddd/MMM/YYYY, h:ss A')}`, inline: true },
			{ name: 'Name', value: `${member.user.username}`, inline: true },
			{ name: '\u200b', value: '\u200b', inline: true },
			{ name: 'Nickame', value: `${member.nickname !== null ? `${member.nickname}` : 'None'}`, inline: true },
			{ name: 'Roles', value: `${member.roles.cache.map(roles => `${roles}`).join(' ')}`, inline: false },
		);
		whoisEmbed.setFooter(`Client ID: ${member.id}`);
		await interaction.reply({ embeds: [whoisEmbed] });
	},
});