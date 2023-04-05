// this command shows a list of all commands and their descriptions
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const { join } = require('path');

// write the command
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Shows a list of all commands and their descriptions'),
    async execute(interaction) {
        // get all commands
        const commands = readdirSync(join(__dirname, '..', 'user')).filter(file => file.endsWith('.js'));

        // create an embed
        const embed = new MessageEmbed()
            .setTitle('List of all commands')
            .setColor('#0099ff');

        // add all commands to the embed
        for (const file of commands) {
            const command = require(join(__dirname, '..', 'user', `${file}`));
            embed.addField(`/${command.data.name}`, command.data.description);
        }

        // send the embed
        await interaction.reply({ embeds: [embed] });
    },
};
