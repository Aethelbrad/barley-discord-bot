const Discord = require('discord.js');

function commandsHandler(message) {
    const prefix = "!"; // Not sure where else to put this. OG was in config.json.
    const usedCommandRecently = new Set();
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'ping':
            if (!message.member.roles.find(r => r.name === "Supreme Leader of Pancakes")) {
                return message.channel
                .send("Huh??? You don't have permission.")
                .then(msg => msg.delete(5000));
            }
            message.channel.send("idfk ping");
            break;
        case 'youtube':
            message.channel.send("https://www.youtube.com/channel/UCuc2zkg73aAd8ARV8QkVU7g?view_as=subscriber");
            break;
        case 'koala':
            message.channel.send('This is a koala!', {files:       ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/480px-Koala_climbing_tree.jpg']});
            break;
        case 'info':
            if (args[1] === 'Version') {
                message.channel.send("Version " + version);
            } else {
                message.channel.send('Invalid Args');
            }
            break;  
        case 'clear':
            if (!args[1]) {
                return message.reply("Please provide second argument");
            }
            if (!message.member.roles.find(r => r.name === "Supreme Leader of Pancakes")) {
                return message.channel
                .send("Huh??? You don't have permission.")
                .then(msg => msg.delete(5000));
            }
            message.channel.bulkDelete(args[1]);
            break;    
        case 'help':
            message.channel.send("help - gets list of all commands" +
                "\n" + "embed - user info" +
                "\n" + "info - bot version" +
                "\n" + "youtube - my YT channel");
            break;    
        case 'howto':
            message.channel.send("https://www.youtube.com/watch?v=X_qg0Ut9nU8");
            break;    
        // CUSTOM COOLDOWN
        case 'cooldown':
            if (usedCommandRecently.has(message.author.id)) {
                message.reply("You cannot use that command just yet! What another 30 seconds!");
            } else {
                message.reply("You are not on cooldown this is a custom command!!");

                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
            break;    
        case 'embed':
            const embed = new Discord.RichEmbed()
                .setTitle('User Info')
                .addField('Player Name', message.author.username, true)
                .addField('Version', version, true)
                .addField('Current Server', message.guild.name)
                .setColor(0x4433CC)
                .setThumbnail(message.author.avatarURL)
                .setFooter('subscribe')
            message.channel.send(embed);
            break;        
        case 'bot':
            message.channel.send("!embed");
            break;
    }
}

module.exports.commandsHandler = commandsHandler;
