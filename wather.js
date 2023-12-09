const input = document.querySelector(".input");
const temp = document.querySelector(".temp");
const hourlyTemp = document.querySelector(".hourly-temp");
const watherIcons = {
  'rain': "./icons/sun.png",
  "partly-cloudy-day": "./icons/raining",
  "cloudy": "./icons/cloudy (1).png",
  'Clear': "./icons/cloudy (2).png",
};
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    // console.log("hohoh");
    wather(input.value);
  }
});
const wather = (cityname) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityname}?&key=QW7V7T2YZ54RJF6VSQGGBWUTQ&contentType=json`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => editHtml(data));
};
const editHtml = (data) => {
  const watherIconType =JSON.stringify( data.currentConditions.icon)
  console.log(watherIconType);

  temp.innerHTML = `
    <h1>${data.resolvedAddress}</h1>
    <img src="${watherIcons.watherIconType}" alt="" />
    <div class="flex">
       <div> <h3>temp</h3>
        <p>${data.currentConditions.temp}</p>
        </div>
       <div>
       <h3>humidity</h3>
      <p>${data.currentConditions.humidity}</p>
       </div>
       <div>
       <h3>sunset</h3>
        <p>${data.currentConditions.sunset}</p>
     </div>
     
    
    </div>
    <div class="visiblenot">
      <h3>description</h3>
      <div><p>${data.description}</p></div>
    </div>
    `;
};
