// Require the necessary discord.js classes
const { Client, Intents, MessageEmbed } = require('discord.js'); // MessageEmbed is the class that allows you to create embeds
const { token } = require('./config.json');
const prefix = "!";
const talkedRecently = new Set(); // Set is a collection of unique values
// const intents = new Discord.Intents(32767); // 32767 is the value for all intents

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); // intents: intents

// When the client is ready, run this code (only once)
client.on('ready', () => { 
    console.log( "\u001b[1;32m" + client.user.tag + " is online!" ); // ANSI color codes to work with VSC console. %c works in Chrome Debug.
    client.user.setActivity( "How To Be A Better Bot", { type: "WATCHING" } );
});

client.on('messageCreate', message => { 
    // If the message doesn't start with the prefix, return. 
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.substring(prefix.length).split(/ +/); // args is an array of strings. substring(config.prefix.length) removes the prefix from the message. split(/ +/) splits the message into an array of strings. Essentially this line gets rid of spaces in messages and makes it an array of strings.

    switch (args[0]) {
        case 'hello': message.reply("Hello!"); break; 
        case 'say': message.reply(args.slice(1).join("")); break;
        case 'w':
            const embed = new MessageEmbed()
                .setTitle("Weather")
                .setDescription("It's raining!")
                .setAuthor('Weather forcast for (current city)')
                .addField("Temperature", "It's currently (temperature) degrees")
                .addField("Wind", "It's currently (wind speed) mph")
                .addField("Humidity", "It's currently (humidity)%")
                .addField("Timezone", "It's currently (timezone)")
                .setColor(0x00AE86)
                .setFooter("Barley v0.1")
            message.reply({ embeds: [embed] }); // this statement sends the embed to the channel. I should probably fin
                break;
    }
});

// Login to Discord with your client's token
client.login(token);