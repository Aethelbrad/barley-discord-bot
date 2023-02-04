// index.js is the main file that will run the bot
const fs = require("node:fs");
const path = require("node:path");
const { Client, Intents, Collection } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// this is the path to the commands folder
client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
// this is the path to the user folder in the commands folder
// const userCommandsPath = path.join(__dirname, "user");

const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

// this for loop will load all the commands into the client.commands collection
//  and will run the command.execute function
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // Set a new item in the Collection with the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

client.once("ready", () => {
  console.log("\u001b[1;35m Barley is online");
  client.user.setActivity("Whale Sounds", { type: "LISTENING" });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "Command execution failed. You idiot!",
      ephemeral: true,
    });
  }
});

client.login(token);
