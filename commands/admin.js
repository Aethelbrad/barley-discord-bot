const commands = {
    kick: ['Admin', 'Moderator'],
    ban: ['Admin'],
    mute: ['Admin', 'Moderator'],
  };
  
  command.on('kick', (message, args) => {
    // check if user has an allowed role for this command
    if (!message.member.roles.cache.some(role => commands.kick.includes(role.name))) {
      message.reply('You do not have permission to use this command');
      return;
    }
  
    // Kick code goes here
  });
  
  command.on('ban', (message, args) => {
    // check if user has an allowed role for this command
    if (!message.member.roles.cache.some(role => commands.ban.includes(role.name))) {
      message.reply('You do not have permission to use this command');
      return;
    }
  
    // Ban code goes here
  });
  
  command.on('mute', (message, args) => {
    // check if user has an allowed role for this command
    if (!message.member.roles.cache.some(role => commands.mute.includes(role.name))) {
      message.reply('You do not have permission to use this command');
      return;
    }
  
    // Mute code goes here
  });
  

  // Or alternatively, you can use the following code to check if the user has the required role:
    // Store a list of roles that are allowed to use the admin commands in a constant or variable.
const allowedRoles = ["Admin", "Moderator"];
// In your command handler, check if the user executing the command has any of the roles stored in the list.
if (interaction.member.roles.cache.some((role) => allowedRoles.includes(role.name))) {
  // If they do, execute the command.
  await command.execute(interaction);
} else {
  // If they don't, send a message saying they don't have permission.
  await interaction.reply("You do not have permission to use this command.");
}