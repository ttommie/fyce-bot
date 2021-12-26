const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'guildMemberAdd',
	once: false,
	execute(member) {
		// CREATE MESSAGE EMBED
		const welcomeEmbed = new MessageEmbed();
		welcomeEmbed.setColor('#36393F');
		welcomeEmbed.setAuthor('Fyce Bot - welcome', member.user.avatarURL(), 'https://github.com/ttommie/fyce-bot/');
		welcomeEmbed.setDescription(`Hello ${member}, Enjoy your stay!`);

		// SEND MESSAGE TO CHANNEL CALLED 'weclome'
		member.guild.channels.cache.find(c => c.name === 'welcome').send({ embeds: [welcomeEmbed] });
	},
};