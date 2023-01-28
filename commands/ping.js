const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with server info"),
  async execute(interaction) {
    await interaction.reply(
      `Server name: ${interaction.guild.name}
	  \nTotal members: ${interaction.guild.memberCount}
	  \nServer created: ${interaction.guild.createdAt.toLocaleString()}
    \nBarley Uptime: ${process.uptime().toLocaleString()} seconds, or ${( process.uptime() / 60 ).toLocaleString()} minutes, or ${( process.uptime() / 3600 ).toLocaleString()} hours, or ${( process.uptime() / 86400 ).toLocaleString()} days`
    );
  },
};
