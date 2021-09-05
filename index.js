const Discord = require('discord.js');
const commands = require('./commands/commands');
const {
    token,
    prefix
} = require('./config.json');
const client = new Discord.Client();



client.once('ready', () => {
	console.log( "\u001b[1;32mONLINE" );// ANSI color codes to work with VSC console. %c works in Chrome Debug.
    client.user.setActivity( 'Neuromancer by William Gibson' , { type: 'LISTENING' }).catch(console.error);   
    client.guilds.forEach((guild) => {
        console.log("\u001b[1;35m", guild.name + "'s " + "server");
    })
});

// client.on('message');

client.login(token);