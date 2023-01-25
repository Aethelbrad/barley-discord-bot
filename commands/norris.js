const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require("axios");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chucknorris')
		.setDescription('Replies with random dad joke'),
	async execute(interaction) {
		try {
			const response = await axios.get("https://api.chucknorris.io/jokes/random", { headers: { 'Accept': 'application/json' } });
			const norrisJoke = response.data.value;
			await interaction.reply(norrisJoke);
		} catch (error) {
			console.log(error);
			interaction.reply("Sorry, I couldn't find a Chuck Norris joke at this moment.");
		}
	},
};
