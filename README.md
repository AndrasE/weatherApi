<br>
<p align="center">
  <a href="https://weatherapicall-f7a0d6ebd9f7.herokuapp.com" target="_blank" rel="noopener noreferrer">
  <img src="https://github.com/AndrasE/raw-readme/blob/main/weatherapi-readme-img.png?raw=true" width="260px">
  </a>
</p>
<h3 align="center">
  Simple weatherApi app 
  <br>
  Bodyparser, Express with Ejs
</h3>

## Hello there 👋

<p>As part of my studies on <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp" target="_blank" rel="noopener noreferrer">Udemy</a>, I developed an app that makes <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank" rel="noopener noreferrer">API</a> calls to <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">Openweather</a> using BodyParser, Express, and EJS. </p> 
<p>The project originally handled API responses with res.write(), but I enhanced it by adding Bootstrap 5 for styling and EJS for better handling of potential user input errors like typos. I styled the app with a sleek, transparent design over a pretty background, making it a great standalone project. In the future, I plan to rebuild it with React and React Native, including a 5-day forecast feature for added functionality at the click of a button.</p>

<p> 
Key Features: 
  <li>API Integration - Fetches weather data from OpenWeather using BodyParser and Express.
  </li> <li>Dynamic UI - Displays results dynamically with EJS, allowing for personalized content.
  </li> <li>Error Handling: Manages input errors (e.g., typos) for smoother user experience. </li> 
  <li>Aesthetic Styling: Features a transparent, visually appealing background. </li> </p>

## Run 🚀
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Start with cloning this repo on your local machine via cli or github-desktop:

```sh
$ git clone https://github.com/AndrasE/weatherapi
$ cd PROJECTNAME
```
To install and set up the library, run:
```sh
$ npm install -S myLib
```

Or if you prefer using Yarn:
```sh
$ yarn add --dev myLib
```

Add your own credentials:
```sh
add own credentials or .env
```
Serving the app:
```sh
$ node app.js or nodemon app.js
```
