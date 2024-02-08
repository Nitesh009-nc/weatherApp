const apiKey = "e47811dd1fbdd1f9af2e94c4f1ea9892";

async function fetchData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );
  const data = await response.json();
  console.log(data);
  updateUI(data);
}
const cityElement = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visibility-distance");
const descriptionText = document.querySelector(".description");
const date = document.querySelector(".date");

function updateUI(data) {
  cityElement.textContent = data.name;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  windSpeed.textContent = `${data.wind.speed} km/h`;
  humidity.textContent = `${data.main.humidity}%`;
  visibility.textContent = `${data.visibility / 1000} km`;
  descriptionText.textContent = data.weather[0].main;

  const currentDate = new Date();
  date.textContent = currentDate.toDateString();
}

const formElement = document.querySelector(".search-form");
const inputElement = document.querySelector(".city-name");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  const city = inputElement.value;
  if (city !== "") {
    fetchData(city);
  }
});
