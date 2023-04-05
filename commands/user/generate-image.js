const { GPT } = require('openai');
const { OPEN_AI_KEY } = require('../../config.json');

const openaiClient = new GPT(OPEN_AI_KEY);

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('generate-image')
        .setDescription('Generate an image based on a prompt.')
        .addStringOption(option => option.setName('prompt').setDescription('The prompt to generate the image from.')),
    async execute(interaction) {
        const prompt = interaction.options.getString('prompt');
        const model = 'image-alpha-001';
        const response = await openaiClient.complete({
            engine: model,
            prompt,
            max_tokens: 1024,
            n: 1,
            stop: ['\n'],
            temperature: 0.5,
        });
        const image = response.data.choices[0].text;
        const attachment = new MessageAttachment(image);
        await interaction.reply({ files: [attachment] });
    },
}; 