const fs = require("node:fs");
const path = require("node:path");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientId, guildId, token } = require("./config.json");

const commands = [];

const commandsPath = path.join(__dirname, "commands", "user");

const commandFiles = fs
  .readdirSync(commandsPath, { withFileTypes: true })
  .filter((file) => file.isFile() && file.name.endsWith(".js"))
  .map((file) => path.join(commandsPath, file.name));

for (const file of commandFiles) {
  commands.push(require(file).data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
