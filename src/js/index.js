const fetchPlace = document.getElementById("fetch-1");

// API Sourse https://newsapi.org/ lust add & and specificaton from API descripton.
fetch(
  `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&language=en&apiKey=0dc1e3eba8ec482b8a93b4c3b6d7eecc`
)
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json.articles);

    fetchPlace.innerHTML = `<img src='${json.articles[0].urlToImage}'/> <h1>${json.articles[0].title}</h1> <p>${json.articles[0].description}</p> <a href='${json.articles[0].url}' target='_blank'>Read More </a>`;
  });

console.log(fetchPlace);

// Do the reafing part at read more, pop window.

// Wether API
const fetchPlaceTwo = document.getElementById("fetch-2");

// API Sourse https://newsapi.org/ lust add & and specificaton from API descripton.
fetch(
  `http://api.weatherapi.com/v1/current.json?key=23420647a7354abb83b83735212212&q=Prague&aqi=yes`
)
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json);
    const img = json.current.condition.icon;
    fetchPlaceTwo.style.background = "url(" + img + ")";
    // fetchPlaceTwo.style.backgroundRepeat = "no-repeat";

    console.log(fetchPlaceTwo);
    fetchPlaceTwo.innerHTML = `<h1>${json.location.name}, ${json.location.country}
    </h1><h3>${json.current.condition.text}</h3> <p> Humidity:${json.current.humidity}</p><p> Temperature:${json.current.temp_c}</p><p> wind:${json.current.wind_kph}</p>`;
  });

//
// Stock API
const fetchPlaceThree = document.getElementById("fetch-3");
const stock = document.getElementsByName("stock").value;
console.log(stock);
// API Sourse https://newsapi.org/ lust add & and specificaton from API descripton.
fetch(
  `https://api.polygon.io/v1/open-close/MSFT/2021-12-21?adjusted=true&apiKey=8TvIu_PxBWFhvO4vQ8iTPtCAf4pYF4Gn`
)
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json);

    console.log(fetchPlaceThree);
    fetchPlaceThree.innerHTML = `<h1>${json.symbol}</h1>
    <p>Open:${json.open}</p>
    <p>Close:${json.close}</p>
    <p>High:${json.high}</p>
    <p>Low:${json.low}</p>
    
    `;
  });

//
