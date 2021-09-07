const { Client, Intents, MessageEmbed } = require("discord.js");
const { token, APItoken } = require("./config.json");
const axios = require("axios");
const prefix = "!";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
}); // intents: intents

client.on("ready", () => {
  console.log("\u001b[1;32m" + client.user.tag + " is online!"); // ANSI color codes to work with VSC console. %c works in Chrome Debug.
  client.user.setActivity("How To Be A Better Bot", { type: "WATCHING" });
});

// Event Listener for when a message is sent
client.on("messageCreate", async message => {
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(' ');

    switch (args[0]) {
        case "w":
        await axios
            .get(
            `http://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=${APItoken}`
            )
            .then((response) => {
            const apiData = response;
            const embed = new MessageEmbed()
                .setTitle(`${args}`)
                .setDescription(`${Math.ceil(apiData.data.main.temp)} degrees Fahrenheit`)
                .addField("Humidity", `${apiData.data.main.humidity}%`)
                message.channel.send({ embeds: [embed] });
                console.log(response);
            })
            .catch((err) => {
            console.log(err);
            });
        break;
    };
});
client.login(token);
