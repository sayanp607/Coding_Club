const apiKey = "a0d9b364c06cc321523b5c0a24351d6b";

async function getWeather() {
  const city = document.getElementById("searchInput").value;
  if (!city) return;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    updateWeatherCard(data);
  } catch (error) {
    alert(error.message);
    document.getElementById("weatherCard").classList.add("hidden");
  }
}

function updateWeatherCard(data) {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  document.getElementById("currentTime").textContent = formattedTime;
  document.getElementById("cityName").textContent = data.name;
  document.getElementById("temperature").textContent = data.main.temp;
  document.getElementById("humidity").textContent = data.main.humidity;
  document.getElementById("weatherCard").classList.remove("hidden");
  document.getElementById("feelsLike").textContent = data.main.feels_like;
  console.log(data);
}
