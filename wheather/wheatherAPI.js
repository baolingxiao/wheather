// Replace 'your_api_key_here' with your actual API key from OpenWeather
const apiKey = '51ab22f7a18d745a5e9643499d80baee';
const city = 'Charlotte'; // You can change this to any city you want

// Build the API URL
const apiUrl = `https://api.openweathermap.org/data/3.0/onecall/day_summary?lat={lat}&lon={lon}&date={date}&appid={apikey}`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract necessary data from the API response
        const temp = data.main.temp;
        const tempMax = data.main.temp_max;
        const tempMin = data.main.temp_min;
        const condition = data.weather[0].description;
        const weatherIcon = data.weather[0].icon;

        // Update the HTML elements with the fetched data
        document.getElementById('city').innerText = data.name;
        document.getElementById('temp').innerText = temp;
        document.getElementById('temp-max').innerText = tempMax;
        document.getElementById('temp-min').innerText = tempMin;
        document.getElementById('condition').innerText = condition;

        // Set the weather icon (OpenWeather provides an icon code, you can use it to fetch the corresponding image)
        document.getElementById('weather-icon').style.backgroundImage = `url(http://openweathermap.org/img/wn/${weatherIcon}@2x.png)`;
    } catch (error) {
        console.error('Error fetching the weather data:', error);
    }
}

// Call the function to fetch and display the weather data
getWeather();
