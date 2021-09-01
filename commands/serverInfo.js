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
		serverInfoEmbed.setTitle('Server Information');
		serverInfoEmbed.setColor('#36393F');
		serverInfoEmbed.setURL('https://discord.js.org/');
		serverInfoEmbed.setAuthor('Fyce Bot - /serverinfo', interaction.user.avatarURL(), /* AVATAR ICON HERE */ 'https://github.com/ttommie/fyce-bot/');
		serverInfoEmbed.setThumbnail(guild.iconURL());

		await interaction.reply({ embeds: [serverInfoEmbed] });
	},
});

/* INFO TO DISPLAY */
// NAME | REGION | OWNER
// USERCNT | MEMBERCNT | BOTCNT
// TEXT-CHANCNT | VOICE-CHANCNT | ROLESCNT
// CREATION DATE OF SERVER