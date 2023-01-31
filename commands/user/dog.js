const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require("axios");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('Replies with random dog gif'),
	async execute(interaction) {
		const response = await axios.get("https://api.thedogapi.com/v1/images/search");
		const dog = response.data[0].url;
		await interaction.reply(dog);

	},
};