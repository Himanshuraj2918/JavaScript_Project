let city = document.getElementById("citySrc");

let search = document.getElementById("searchBtn");

search.addEventListener("click", function () {
  let cityName = city.value;

  const url = `https://open-weather13.p.rapidapi.com/city/${cityName}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "07851383fdmsh4e2065c0ec35f08p1cd53fjsn2ef254f755b1",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
   console.log(data);
      const main_body = document.querySelector('.main_body')
      let src;
      switch (data.weather[0].main) {
        case "Mist":
          src = "./weather_Img/fog.png";

          break;
        case "Fog":
          src = "./weather_Img/fog.png";

          break;

        case "Haze":
          src = "./weather_Img/cloudy.png";

          break;

        case "Clouds":
          src = "./weather_Img/clouds.png";

          break;
        case "Clear":
          src = "./weather_Img/sun.png";

          break;
        case "Snow":
          src = "./weather_Img/snow.png";

          break;
        case "Thunderstorm":
          src = "./weather_Img/storm.png";
          break;
        case "Rain":
          src = "./weather_Img/rain.png";
          break;
        case "Drizzle":
          src = "./weather_Img/drizzle.png";
          break;
        case "Smoke":
          src = "./weather_Img/smoke.png";
          break;

        default:
          src = "./weather_Img/sun.png";
          break;
      }



      main_body.innerHTML = `
      
      <div>
      <div  class=" mt-10 flex justify-center items-center">
          <div  class="w-[150px] h-[150px]">
             <img class="image-box" src=${src} >
              
          </div>
      </div>
  </div>
  <div id="cityname" class="text-center mt-6 text-xl font-semibold">
  ${data.name}
  </div>
  <div class="mt-7 ml-4 flex">
      <h4 class="font-semibold">Temperature:</h4>
      <span class="ml-5" id="temp">${Math.round(((data.main.temp - 32) * 5) / 9)} Celsius </span>
  </div>

  <div class="mt-4 ml-4 flex">
      <h4 class="font-semibold">Humidity:</h4>
      <span class="ml-5" id="humidity"> ${data.main.humidity} </span>
  </div>
  <div class="mt-4 ml-4 flex">
      <h4 class="font-semibold">Visiblity:</h4>
      <span class="ml-5" id="visiblity"> ${data.visibility} </span>
  </div>
  <div class="mt-4 ml-4 flex">
      <h4 class="font-semibold">Weather:</h4>
      <span class="ml-5" id="weather"> ${data.weather[0].main} </span>
  </div>
 <div class="mt-4 ml-4 flex">
      <h4 class="font-semibold">Wind:</h4>
      <span class="ml-5" id="wind"> ${data.wind.speed} </span>
  </div>

      
      `
     
    });
});
