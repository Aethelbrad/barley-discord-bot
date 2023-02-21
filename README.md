# Barley Discord Bot

## Introduction

- This is a bot that I made for my Discord server. It's is used to moderate the server and to provide some fun features like random cat gifs, Chuck Norris jokes, and a music channel. It is written in JavaScript using the [discord.js](https://discord.js.org/#/) library. The bot is hosted with using [Heroku](https://www.heroku.com/). The bot is currently in development and is not ready for production.

### Features

#### Announcements

> **_NOTE:_**   The bot will send a message to the announcements channel from itch.io when a game jam is announced. The bot will also send a message when the game jam is over. That's it.

#### General

- `/help` - Lists all of the commands that the bot has
- `/ping` - Pings the bot
- `/uptime` - Shows the uptime of the bot

#### Moderation Commands

- `/ban` - Bans a user from the server
- `/kick` - Kicks a user from the server
- `/mute` - Mutes a user in the server
- `/unmute` - Unmutes a user in the server
- `/purge` - Deletes a number of messages from a channel
- `/warn` - Warns a user in the server
- `/warnings` - Lists the warnings for a user in the server

#### Fun Commands

- `/cats` - Sends a random cat picture
- `/norris` - Sends a random Chuck Norris joke
- `/weather` - Sends the weather for a city

#### Music Commands

> **_NOTE:_**   We will need to implement sharding to for the bot to play music in the music channel and still execute slash commands.

- `/play` - Plays a song in the music channel
- `/skip` - Skips the current song in the music channel
- `/stop` - Stops the music channel
- `/volume` - Changes the volume of the music channel

### References

- [Discord.js](https://discord.js.org/#/)
- [Discord.js Guide](https://discordjs.guide/)
- [Heroku](https://www.heroku.com/)
