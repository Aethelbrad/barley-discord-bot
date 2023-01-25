const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require("axios");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('Replies with random cat gif'),
	async execute(interaction) {
		const response = await axios.get("https://api.thecatapi.com/v1/images/search");
		const cat = response.data[0].url;
		await interaction.reply(cat);

	},
};