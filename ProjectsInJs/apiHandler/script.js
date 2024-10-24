document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const clickbutton = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityname = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const desctext = document.getElementById("description");
    const errormsg = document.getElementById("error-message");
    const KEY = "";

// we listen.
clickbutton.addEventListener("click", async() => {

    if(cityInput.value == ""){
        return;
    }
    // we cook constant to hold user input city.
    const userInputCity = cityInput.value.trim();
    try {
        const fetchedData = await fetchweatherData(userInputCity)
        displayweatherdata(fetchedData);
         // server is always in another continent.
    } catch (error) {
         throwerror();
}
})

async function fetchweatherData(city){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`;
  let superman = await fetch(url); //"you can call this superman". ALSO: "I WILL WAIT TILL THE PROMISE IS FULLFILLED. ONLY THEN WILL PROCEED FUTHER DEPENDING ON WHETHER PROMISE WAS BROKEN OR COMPLTED."
  if(superman.ok == false){
    throw new Error("Error fetching Data.");
    return;
  }
  const AllTheRecivedData = await superman.json()
  console.log(AllTheRecivedData);
  return AllTheRecivedData;
}


function displayweatherdata(data){
    weatherInfo.className="";
    errormsg.className = "hidden";
    const { name, main, weather } = data
    cityname.textContent = name;
    temperature.textContent = `${main.temp}°C`;
    desctext.textContent = weather[0].description;

    console.log(desctext.textContent);
}


function throwerror(){
    weatherInfo.className = "hidden";
    errormsg.className = "";
    cityInput.value = "";
}
})