const fs = require("node:fs");
const path = require("node:path");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientId, guildId, token } = require("./config.json");

// This is the array that will hold all the commands
const commands = [];

// create a const that equals the path to the commands folder and its subfolders
const commandsPath = path.join(__dirname, "commands");

// This will get all the files in the commands folder that end with .js
const commandFiles = fs
// This line will get all the files in the commands folder
  .readdirSync(commandsPath)
  // this line will filter out all the files that don't end with .js
  .filter((file) => file.endsWith(".js"));

// This for loop will push all the commands into the commands array
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  commands.push(command.data.toJSON());
}

// This will register the commands to the bot
const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
