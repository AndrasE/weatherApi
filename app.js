const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");

app.get("/", function(req, res) {

app.use(bodyParser.urlencoded({extended: true})) //necessary for post request

  res.sendFile(__dirname + "/index.html");

  app.post("/", function (req, res) {
    console.log(req.body.cityName); //check the parser works on name html
    const query = req.body.cityName;
    const apiKey = "1f305be04e274e79dc002005a1a93a72#"
    const units = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query +"&units=" + units +"&appid=" + apiKey;

    https.get(url, function(response) { //const url created so easier to see https.get and function
      console.log(response.statusCode); //just to print the status if its 200 ok
      response.on("data", function(data) {
        console.log(data); //the data with get back is hexadecimal so we need the next line
        const weatherData = JSON.parse(data); //turn hexa to JSON or javascript object
        console.log(weatherData); //its not in a flatpack now, easy to read
        const temp = weatherData.main.temp
        console.log(temp); //data in main in temp check with api viewer the data
        const weatherDescription = weatherData.weather[0].description //weather was array thats why 0
        console.log(weatherDescription);
        const icon = weatherData.weather[0].icon;
        const imageUrl = "http://openweathermap.org/img/wn/" + icon +"@2x.png"

        res.write("<p><b>The current weather is: "+ weatherDescription +".</b></p>");
        res.write("<h1>The temperature in " + query + " is: " + temp + "C. </h1>" );
        res.write("<img src=" + imageUrl + ">");
        res.send();
      })
    });
  });
  });

// res.send("its on boy") // taken off as only one res.send can exist

app.listen(3000, function(){
console.log("server is on")
})
