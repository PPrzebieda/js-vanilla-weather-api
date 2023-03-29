//Select Elements
const icon = document.querySelector(".icon");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const city = document.querySelector(".city");

//App data

const weather = {};
weather.temperature = {
  unit: "celsius",
};

const KELVIN = 273;
const key = "ecaf716bbde7f51ed0fbdef35ab28cc9";
const lat = 50.049683;
const lon = 19.944544;

//Check if browser supports GEolocalization

// if ("geolocalization" in navigator) {
//   navigator.geolocalization.getCurrentPosition(setPosition, showError);
// } else {
//   notification.style.display = "block";
//   notification.innerHTML = `Browser doesnt support`;
// }

// //Set user position

// function setPosition(position) {
//   let latitude = position.coord.latitude;
//   let longitude = position.coord.longitude;

//   getWeather(latitude, longitude);
// }

// function showError(error) {
//   notification.style.display = "block";
//   notification.innerHTML = `${error.message}`;
// }

function getWeather() {
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

  console.log(api);

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      weather.temperature.value = Math.floor(data.main.temp - KELVIN);
      weather.icon = data.weather[0].icon;
      weather.description = data.weather[0].description;
      weather.city = data.name;
      weather.country = data.sys.country;

      console.log(data);
    })
    .then(function () {
      displayWeather();
    });
}

getWeather();

function displayWeather() {
  temperature.innerHTML = `${weather.temperature.value}°C`;
  icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png"/>`;
  description.innerHTML = `${weather.description}`;
  city.innerHTML = `${weather.city}, ${weather.country}`;
}

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={ecaf716bbde7f51ed0fbdef35ab28cc9}

// const geo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

// console.log(geo);

// http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=ecaf716bbde7f51ed0fbdef35ab28cc9

// http://api.openweathermap.org/geo/1.0/reverse?lat=50.049683&lon=19.944544&limit=5&appid=ecaf716bbde7f51ed0fbdef35ab28cc9

// https://api.openweathermap.org/data/2.5/weather?lat=50.049683&lon=19.944544&appid=ecaf716bbde7f51ed0fbdef35ab28cc9
