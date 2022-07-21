devition = document.createElement("div")
devition.innerHTML = `<nav class=" na">
<div class="container">
<p class="h1 text-center" style="color: white ">Countries Weather</p>
</div>
</nav>`
document.body.append(devition)
dev1 = document.createElement("div")
dev1.innerHTML = `<div class= ' container con'>
<input type="search" id="reset" placeholder="CityName/Country/Enter first letter capital" class="inputValue form-control" aria-label="Search">
<button type="submit" value="submit" class="button ">Search</button>
</div>`
document.body.appendChild(dev1)
let div4 = document.createElement("div")
let div5 = document.createElement("div")


let button = document.querySelector(".button")
let inputValue = document.querySelector(".inputValue")

button.addEventListener("click", async function () {
  const response = await fetch(`https://restcountries.com/v3.1/all`)
  const data = await response.json()
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inputValue.value}&appid=37207e336f41a9b2b94d65e7669d2535`)
  const dat = await res.json()
  console.log(dat)
  data.forEach(dataa => {
    if (inputValue.value == dataa.capital || (inputValue.value == dataa.name.common)) {
      div4.innerHTML = `<div class = "card text-center container ccontainer">
             <div class= "card-header p-5 chead"><h3>${dataa.name.common}</h3></div><img src="${dataa.flags.png}"><div><h5>City: ${dataa.capital}</h5><h5>Region: ${dataa.region}</h5><h5>Country Code: ${dataa.cca2}</h5></div>
             <button class="WeatherButton">Weather</button>
             </div>`
      dev1.appendChild(div4)
      let wet = document.querySelector(".WeatherButton")
      wet.addEventListener("click", () => {
        let div6 = document.createElement("div")
        div6.innerHTML = `
               <h3>Weather</h3><h5>Temp: ${dat.main.temp}°C</h5>
               <h5>Weather: ${dat.weather[0].main}</h5>
               <h5>Description: ${dat.weather[0].description}</h5>
               <h5>humidity: ${dat.main.humidity}</h5>
               <h5>pressure: ${dat.main.pressure}</h5>
               </div>`
        let app = document.querySelector(".ccontainer")
        app.appendChild(div6)
        wet.innerHTML = ""

      })
    }
    else {
      div5.innerHTML = `<div class = "card text-center container ccontainer">
              <div class= "card-header p-5 chead"><h3>${dat.name}</h3>
              <img src="https://img.freepik.com/premium-vector/weather-template-app-simple-style_23-2147552560.jpg?w=360">
               <hr>
               <h3>Weather</h3><h5>Temp: ${dat.main.temp}°C</h5>
               <h5>Weather: ${dat.weather[0].main}</h5>
               <h5>Description: ${dat.weather[0].description}</h5>
               <h5>humidity: ${dat.main.humidity}</h5>
               <h5>pressure: ${dat.main.pressure}</h5>
             </div>`
      dev1.appendChild(div5)
    }



    let clear = document.querySelector("#reset")
    clear.addEventListener("click", () => {
      div4.innerHTML = ""
      div5.innerHTML = ""

    })


  })

})


        // <hr><hr>
        // <h3>Weather</h3><h5>Temp: ${dat.main.temp}°C</h5><h5>Weather: ${dat.weather[0].main}</h5><h5>Sky: ${dat.weather[0].description}</h5>