const fs = require("node:fs");
const path = require("node:path");
const { Client, Intents, Collection } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands", "user");

const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(path.join(commandsPath, file));
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
      content: "Command execution failed.",
      ephemeral: true,
    });
  }
});

client.login(token);
