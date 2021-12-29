// Navigation manipulation
let scrollPosition = 0;
console.log(window.pageYOffset);
const removeElement = function () {
  const currentPosition = window.pageYOffset;
  if (currentPosition > scrollPosition) {
    document.getElementById("nav").style.visibility = "hidden";
  } else {
    document.getElementById("nav").style.visibility = "visible";
  }
  scrollPosition = currentPosition <= 0 ? 0 : currentPosition;
};

window.addEventListener("scroll", removeElement);

// Buttons

const contactButton = document.getElementById("contactButton");
const scroll = function (where) {
  document.getElementById(where).scrollIntoView({
    behavior: "smooth",
  });
};
contactButton.onclick = function () {
  scroll("contact");
};

//Contact form
const firstName = document.getElementById("firstNameForm");
const lastName = document.getElementById("lastNameForm");
const userEmail = document.getElementById("emailForm");
const userPhone = document.getElementById("phoneForm");
const userMessage = document.getElementById("messageForm");
let contactFormSubmitButton = document.getElementById(
  "contactFormSubmitButton"
);

const contactSubmit = function () {
  firstName.value &&
  lastName.value &&
  userEmail.value &&
  userPhone.value &&
  userMessage.value
    ? (contactFormSubmitButton.innerText = `Your form is submitted`)
    : (contactFormSubmitButton.innerText = `Please fullfil all fields`);
};
contactFormSubmitButton.onclick = function () {
  contactSubmit();
};

//Color change

// News API

// API Sourse https://newsapi.org/ lust add & and specificaton from API descripton.

const fetchPlace = document.getElementById("fetch-1");
fetch(
  `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&language=en&apiKey=0dc1e3eba8ec482b8a93b4c3b6d7eecc`
)
  .then((resp) => resp.json())
  .then((json) => {
    fetchPlace.innerHTML = `<img src='${json.articles[0].urlToImage}'/> <h1>${json.articles[0].title}</h1> <p>${json.articles[0].description}</p> <a href='${json.articles[0].url}' target='_blank'>Read More </a>`;
  });

// Wether API
const fetchPlaceTwo = document.getElementById("fetch-2");

// API Source https://newsapi.org/ lust add & and specificaton from API description.
fetch(
  `http://api.weatherapi.com/v1/current.json?key=23420647a7354abb83b83735212212&q=Prague&aqi=yes`
)
  .then((resp) => resp.json())
  .then((json) => {
    const img = json.current.condition.icon;
    // fetchPlaceTwo.style.background = "url(" + img + ")";
    fetchPlaceTwo.style.backgroundRepeat = "no-repeat, cover";

    fetchPlaceTwo.innerHTML = `<img src='${img}'/><h1>${json.location.name}, ${json.location.country}
    </h1><h3>${json.current.condition.text}</h3> <p> Humidity : ${json.current.humidity} %</p><p> Temperature : ${json.current.temp_c} C&#176</p><p> Wind: ${json.current.wind_kph} kph</p>`;
  });
//
// Stock API

// Setting date alternative

const currentDay = String(new Date().getDate() - 1);
const currentMonth = String(new Date().getMonth() + 1);
const currentYear = String(new Date().getFullYear());
const lastDate = `${currentYear}-${currentMonth}-${currentDay}`;

const fetchPlaceThree = document.getElementById("fetch-3");
function setStock() {
  const stockList = document.getElementById("stocks");
  const stockDate = document.getElementById("stockDate");
  const stock = stockList.value;
  const date = stockDate.value || lastDate;
  console.log(date);
  // API Source https://newsapi.org/ lust add & and specification from API description.

  fetch(
    `https://api.polygon.io/v1/open-close/${stock}/${date}?adjusted=true&apiKey=8TvIu_PxBWFhvO4vQ8iTPtCAf4pYF4Gn`
  )
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json);
      json.status === "OK"
        ? (fetchPlaceThree.innerHTML = `<h1>${json.symbol}</h1>
    <p>Open:${json.open}</p>
    <p>Close:${json.close}</p>
    <p>High:${json.high}</p>
    <p>Low:${json.low}</p>  
    `)
        : (fetchPlaceThree.innerHTML = `<h1> The chosen day NYSE was closed.</h1> <h1> Please chose another date.</h1>`);
    });
}

const stockList = (document.getElementById("setStockButton").onclick =
  function () {
    setStock();
  });

// API Source https://newsapi.org/ lust add & and specifications from API description.

fetch(
  `https://api.polygon.io/v1/open-close/MSFT/2021-12-21?adjusted=true&apiKey=8TvIu_PxBWFhvO4vQ8iTPtCAf4pYF4Gn`
)
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json);

    console.log(fetchPlaceThree);
    fetchPlaceThree.innerHTML = `
    
    <h1>NYSE Info</h1>
    <h1>${json.symbol}</h1>
    <p>Open:${json.open}</p>
    <p>Close:${json.close}</p>
    <p>High:${json.high}</p>
    <p>Low:${json.low}</p>
    `;
  });

//
