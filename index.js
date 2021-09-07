const { Client, Intents, MessageEmbed } = require("discord.js");
const { token, APItoken } = require("./config.json");
const axios = require("axios");
const prefix = "!";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  disableMentions: "everyone",
});

client.on("ready", () => {
  console.log("\u001b[1;32m" + client.user.tag + " is online!"); // ANSI color codes to work with VSC console. %c works in Chrome Debug.
  client.user.setActivity("How To Be A Better Bot", { type: "WATCHING" });
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  city = message.content.slice(prefix.length).trim();
  if (city.length === 0) return;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APItoken}`;
  axios.get(url).then((res) => {
    console.log(city.charAt(0).toUpperCase() + city.slice(1) + " has a current temperature of " + Math.round(res.data.main.temp) + "°F");
  });
});

client.login(token);