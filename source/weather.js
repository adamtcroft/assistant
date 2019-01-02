function kelvinToFahrenheit(temperature){
    let degreesFLong = (temperature*1.8)-459.67;
    let degreesFShort = degreesFLong.toFixed(0);
    return degreesFShort;
}

function getWeather()
{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=cde7fcd43b214a47ce744ebad5ada619"

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        let weatherDescription = data.weather[0].description;
        let tempMaxKelvin = data.main.temp_max;
        let tempMinKelvin = data.main.temp_min;
        let tempMax = kelvinToFahrenheit(tempMaxKelvin);
        let tempMin = kelvinToFahrenheit(tempMinKelvin);

        let weatherElement = document.getElementById("weather");
        weatherElement.innerHTML = "Today's weather in Seattle is "
        + weatherDescription
        + "<img src='https://openweathermap.org/img/w/"
        + data.weather[0].icon
        + ".png' height='3%' width='3%'>"
        + " with a high of " + tempMax
        + " and a low of " + tempMin;
    });
}

getWeather();