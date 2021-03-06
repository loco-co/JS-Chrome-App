const API_KEY = "54a68cbf2e9169c471beb54afe94e598";

function onGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url).then(response => response.json())
    .then(object => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${object.weather[0].description}\n${object.main.temp} ºC`;
        city.innerText = object.name;
        weather.classList.add("white");
        city.classList.add("white");
    });
}

function onGeofail() {
    alert("Error Occured. No weather for You.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeofail);