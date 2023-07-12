// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
// 	}
// };

// fetch('https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=fishermans%20wharf&language=en', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));




const apiKey="07f80daf075cbea3b3810c246f3fb796";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon")

async function checkweather(city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	var data = await response.json();
	console.log(data);
	document.querySelector(".city").innerHTML=data.name;
	document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
	document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

if(data.weather[0].main=="Clouds"){
	weatherIcon.src = "clouds.png";
}
if(data.weather[0].main=="Clear"){
	weatherIcon.src = "clear.png";
}
if(data.weather[0].main=="Rain"){
	weatherIcon.src = "rain.png";
}
if(data.weather[0].main=="Drizzle"){
	weatherIcon.src = "cdrizzle.png";
}
if(data.weather[0].main=="Mist"){
	weatherIcon.src = "mist.png";
}
}


searchbtn.addEventListener("click",()=>{
	checkweather(searchbox.value);


})
