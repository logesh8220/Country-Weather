
let dat;
const countryedata = async () => {
  const respo = await fetch('https://restcountries.com/v3.1/all')
  const data = await respo.json();
  console.log(data[1])
  dat = data
  let nav = document.createElement("div")
  nav.innerHTML = `<nav class="bg-primary">
  <div class="container-fluid">
  <p class="h1 text-center" style="color: white ">Country Detials</p>
  </div>
  </nav>`
  let div0 = document.createElement("div")
  div0.className = "row d-flex justify-content-center"
  document.body.append(nav)
  document.body.append(div0)
  data.forEach(data => {
    let divtion = document.createElement("div")
    divtion.className = "card col-lg-4 col-sm-12 text-center m-4 bg-primary"
    divtion.innerHTML = `<div class="card-header bg-dark text-light">${data.name.common}</div> <img class = "p-5" imgs src="${data.flags.png}" alt="flag">`
    div0.appendChild(divtion)
    let div1 = document.createElement("div")
    div1.className = "card-body text-light"
    div1.innerHTML = `<h5 id="cap">Capital: ${data.capital}</h5><h5>Region: ${data.region}</h5><h5>CountryCode: ${data.cca2}</h5>`
    divtion.appendChild(div1)
    let btn = document.createElement("div")
    btn.innerHTML = `<a href="Search.html" ><button class="wbutton"> Click For Weather</button>`
    div1.appendChild(btn)

    const cityname = document.querySelector(".wbutton")
    cityname.addEventListener("click", () => {
      city = data.capital
      console.log(city)
    })
  })
}


document.addEventListener('DOMContentLoaded', countryedata)
// let button = document.querySelector(".button")
// let inputValue = document.querySelector(".inputValue")
// button.addEventListener("click",function(){
//    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=37207e336f41a9b2b94d65e7669d2535`)
//  .then(response => response.json())
//  .then(data => console.log(data))
//  .catch(err=>alert("wrong ccity name"))
// })
