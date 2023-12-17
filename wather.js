const input = document.querySelector(".input");
const temp = document.querySelector(".temp");
const hourlyTemp = document.querySelector(".hourly-temp");
const filesLike =document.querySelector('.files-like')
const wekly=document.querySelector('.wekkly')
const time=document.querySelector('.time')
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    wather(input.value);
  }
});
const city=''

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
    if(data.days[0].hours.length<=10){
      i+=3
      
    } else if(data.days[0].hours.length>=20){
      i+=7
      
    }
    else{
      i+=5
    }
      
    }
    filesLike.innerHTML=''
    for (let i = 0; i < data.days[0].hours.length; i++) {
   
      
      filesLike.innerHTML+=`
      <div>  <p>${data.days[0].hours[i].datetime}</p>
       <h5>files like</h5>
       <p>${data.days[0].hours[i].feelslike}</p></div>`
       if(data.days[0].hours.length<=10){
        i+=3
        
      }else if(data.days[0].hours.length>=20){
        i+=7
        
      }
      else{
        i+=5
      }
      
}
wekly.innerHTML=''
for (let i = 0; i < data.days.length-8; i++) {
  let date = new Date(data.days[i].datetime)
  let Nesxtday=date.toLocaleDateString('en-EN',{ weekday: 'long' })
 

wekly.innerHTML+=`
<div >
  <p>${Nesxtday}</p>
  <img src="iconses/${data.days[i].icon}.svg" alt="" /> 
</div>`

}
};



window.addEventListener('load',()=>{
  fetch('http://ip-api.com/json/?fields=61439').then(res=>res.json()).then(data=> wather(data.city))
 
})



const clock=setInterval(
  function timer(){
  let date = new Date()
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  time.textContent=hours+':'+min+':'+sec
  } ,1000);
  

