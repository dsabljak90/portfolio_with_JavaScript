const fetchPlace = document.getElementById("fetch-1");

const activityType = "relaxation";
const activityParticipants = 1;
const maxEffort = 0.3;
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
