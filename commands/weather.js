const { SlashCommandBuilder } = require('@discordjs/builders');
const { weatherToken } = require('../config.json');
const axios = require("axios");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Get the weather for a city')
        .addStringOption(option => option.setName('city').setDescription('The city to get the weather for').setRequired(true)),
    async execute(interaction) {
        const city = interaction.options.getString('city');
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherToken}`;
        const response = await axios.get(url);
        const data = response.data;
        const embed = {
            title: `Weather in ${data.name}`,
            description: data.weather[0].description,
            fields: [
                {
                    name: "Temperature",
                    value: `${data.main.temp.toFixed()}°C/${(data.main.temp * 9 / 5 + 32).toFixed()}°F`,
                    inline: true
                }
            ],
            thumbnail: {
                url: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            }
        }
        await interaction.reply({ embeds: [embed] });
    },
};