// REQUIRE PACKAGES
const { SlashCommandBuilder } = require('@discordjs/builders');

// EXPORT USER INFO COMMAND DATA TO NODE
module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Replies with User Information!'),
	async execute(interaction) {
		await interaction.reply(`**USERS TAG**: ${interaction.user.tag}\n**USER ID**: ${interaction.user.id}`);
	},
};