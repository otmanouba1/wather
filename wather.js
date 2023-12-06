const input = document.querySelector(".input");
const watherIcons = {
  rain: "./icons/sun.png",
  cloudy: "./icons/raining",
  "clear-day": "./icons/cloudy (1).png",
  Clear: "./icons/cloudy (2).png",
};

const wather = () => {
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/londona?unitGroup=metric&key=QW7V7T2YZ54RJF6VSQGGBWUTQ&contentType=json";
  fetch(url, {
    method: "GET",
    headers: {},
  }).then((response) => {
    console.log(response.json);
  });
};

wather();

