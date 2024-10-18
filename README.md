<h3 align="center">
  <a href="https://weatherapicall-f7a0d6ebd9f7.herokuapp.com" target="_blank" rel="noopener noreferrer">
  <img src="https://github.com/AndrasE/raw-readme/blob/main/weatherapi-readme-img.png?raw=true" width="170px">
  </a>
<br/>
  Simple weatherApi Ejs app with Bodyparser, Express
</h3>

## Hello there 👋

As part of my studies on **[Udemy](https://www.udemy.com/course/the-complete-web-development-bootcamp)**, I developed an app that makes API calls to **[Openweather](https://openweathermap.org/)** using BodyParser, Express, and EJS.

The project originally handled API responses with res.write(), but I enhanced it by adding Bootstrap 5 for styling and EJS for better handling of potential user input errors like typos. I styled the app with a sleek, transparent design over a pretty background, making it a great standalone project. In the future, I plan to rebuild it with React and React Native, including a 5-day forecast feature for added functionality at the click of a button.

<div align="center">
<img src="https://github.com/AndrasE/raw-readme/blob/3f12481a9b01c5f8168b43dddb24da6dbcdfdfde/weatherapi.webp" width="320">
</div>

Key Features:

- **API Integration** - Fetches weather data from OpenWeather using BodyParser and Express.
- **Dynamic UI** - Displays results dynamically with EJS, allowing for personalized content.
- **Error Handling** Manages input errors (e.g., typos) for smoother user experience.
- **Aesthetic Styling**: Features a transparent, visually appealing background.

## Run 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Start with cloning this repo on your local machine via cli or github-desktop:

`
$ git clone https://github.com/AndrasE/weatherapi
$ cd PROJECTNAME
`

To install and set up the library, run:

`
$ npm install -S myLib
`

Or if you prefer using Yarn:

`
$ yarn add --dev myLib
`

Add your own credentials:

`
add own credentials or .env
`

Serving the app:

`
$ node app.js or nodemon app.js
`
