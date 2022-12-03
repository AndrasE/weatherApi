require(`dotenv`).config();
const express = require("express");
const https = require("https");
const favicon = require('serve-favicon')
const path = require('path')
const app = express();
const bodyParser = require("body-parser");


app.get("/", function (req, res) {

  app.set('view engine', 'ejs');
  app.use(express.static(__dirname + '/public'))
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
  app.use(bodyParser.urlencoded({ extended: true })) //necessary for post request

  res.sendFile(__dirname + "/index.html");

  app.post("/", function (req, res) {
    console.log(req.body.cityName); //check the parser works on name html
    const query = req.body.cityName;
    const apiKey = process.env.WEATHER_API_KEY
    const units = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + units + "&appid=" + apiKey;

    https.get(url, function (response) { //const url created so easier to see https.get and function
      console.log(response.statusCode); // to print the status if its 200 ok

      if (response.statusCode == 200) {
        response.on("data", function (data) {
          console.log(data); //the data with get back is hexadecimal so we need the next line
          const weatherData = JSON.parse(data); //turn hexa to JSON or javascript object
          console.log(weatherData); //its not in a flatpack now, easy to read
          const temp = weatherData.main.temp
          console.log(temp); //data in main in temp check with api viewer the data
          const feels_like = weatherData.main.feels_like;
          const wind = weatherData.wind.speed
          const country = weatherData.sys.country
          const humidity = weatherData.main.humidity

          const weatherDescription = weatherData.weather[0].description //weather was array thats why 0
          console.log(weatherDescription);
          const icon = weatherData.weather[0].icon;
          const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
          res.render("search", {
            city: query,
            country: country,
            imageUrl: imageUrl,
            temp: temp,
            feels_like: feels_like,
            wind: wind,
            humidity: humidity
          })
        })
      } else {
        res.render("err", {
          city: query
        }
        )
      }
    });
  });
});

// res.send("its on boy") // taken off as only one res.send can exist
let port = process.env.PORT;
if (port == null || port == "") { port = 3000; }
app.listen(port);
