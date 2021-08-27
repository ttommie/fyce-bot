// REQUIRE PACKAGES
const { SlashCommandBuilder } = require('@discordjs/builders');

// EXPORT SERVER INFO COMMAND DATA TO NODE
module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Replies with Server Information!'),
	async execute(interaction) {
		await interaction.reply(`**SERVER NAME**: ${interaction.guild.name}\n **TOTAL MEMBERS**: ${interaction.guild.memberCount}`);
	},
};