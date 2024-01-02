let search = document.getElementById("Search_btn");
let result = document.getElementById("result")
let country = document.getElementById("country-name");

search.addEventListener("click", () => {

    let countryName = country.value;
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        //    console.log(data);

        //Method to convert array to string
        // const a = data[0].borders;
        // const b = a.toString();
        // console.log(b);
            result.innerHTML = `
<img src = "${data[0].flags.svg}" class = "flag-img">
  <h2>${data[0].name.common}</h2>
  <div class = "wrapper">
        <div class = "data-wrapper">
           <h4>Capital:</h4>
           <span> ${data[0].capital[0]} </span>
           </div>
  </div>

  <div class = "wrapper">
        <div class = "data-wrapper">
        <h4>Continents:</h4>
        <span> ${data[0].continents[0]} </span>
           </div>
  </div>


  <div class = "wrapper">
        <div class = "data-wrapper">
        <h4>Population:</h4>
        <span> ${data[0].population} </span>
           </div>
  </div>

  <div class = "wrapper">
        <div class = "data-wrapper">
        <h4>Languages:</h4>
        <span> ${Object.values(data[0].languages).toString().split(",").join(",")} </span>
           </div>
  </div>
  

  <div class = "wrapper">
  <div class = "data-wrapper">
  <h4>Time Zone:</h4>
  <span> ${data[0].timezones[0]} </span>
     </div>
</div>
  


<div class = "wrapper">
  <div class = "data-wrapper">
  <h4>Border:</h4>
  <span> ${data[0].borders.toString()} </span>
     </div>
</div>
  
  <div class = "wrapper">
        <div class = "data-wrapper">
        <h4>Area:</h4>
        <span>${data[0].area}</span>
           </div>
  </div>
  
`;
        })
        .catch(() => {
            result.innerHTML = `<h3>Enter Valid Name</h3>`
        })
});
