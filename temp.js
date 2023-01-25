// axios
//   .get(
//     `http://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=${APItoken}`
//   )
//   .then((response) => {
//     const apiData = response;
//     const embed = new MessageEmbed()
//       .setTitle(`${args}`)
//       .setDescription(`${Math.ceil(apiData.data.main.temp)} degrees Fahrenheit`)
//       .addField("Humidity", `${apiData.data.main.humidity}%`);
//     message.channel.send({ embeds: [embed] });
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
