const input = document.querySelector(".input");
const temp = document.querySelector(".temp");
const hourlyTemp = document.querySelector(".hourly-temp");
const filesLike =document.querySelector('.files-like')
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    wather(input.value);
  }
});
const wather = (cityname) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityname}?&key=QW7V7T2YZ54RJF6VSQGGBWUTQ&contentType=json`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => editHtml(data));
    // console.log(data);
};
const editHtml = (data) => {
  // const watherIconType =JSON.stringify( data.currentConditions.icon)
  console.log(data.currentConditions.icon);

  temp.innerHTML = `
    <h1>${data.resolvedAddress}</h1>
    <img src="iconses/${data.currentConditions.icon}.svg" alt="" />
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
    hourlyTemp.innerHTML=''
    for (let i = 0; i < data.days[0].hours.length; i++) {
      hourlyTemp.innerHTML+= `<div>
      <p>${data.days[0].hours[i].datetime}</p>
      <img src="iconses/${data.days[0].hours[i].icon}.svg" alt="" />
    </div>`
    if(data.days[0].hours.length>=20){
      i+=6
      
    } else if(data.days[0].hours.length>=10){
      i+=3
      
    }
      
    }
    filesLike.innerHTML=''
    for (let i = 0; i < data.days[0].hours.length; i++) {
   
      
      filesLike.innerHTML+=`
      <div>  <p>${data.days[0].hours[i].datetime}</p>
       <h5>files like</h5>
       <p>${data.days[0].hours[i].feelslike}</p></div>`
       if(data.days[0].hours.length>=20){
        i+=6
        
      } else if(data.days[0].hours.length>=10){
        i+=3
        
      }
      
}
   
    // console.log(data.days[0].hours.length);
};








// `
//     <div>
//     <p>${data.days[0].hours[0].datetime}</p>
//     <img src="iconses/${data.days[0].hours[0].icon}.svg" alt="" />
//   </div>
//   <div>
//     <p>${data.days[0].hours[3].datetime}</p>
//     <img src="iconses/${data.days[0].hours[3].icon}.svg" alt="" />
//   </div>
 
//     `