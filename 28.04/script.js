let searchButton = document.getElementById("search-button");
let movieTitleInput = document.getElementById("movie-title-input");
let movieResults = document.getElementById("movie-results");

function generateMovieCard(movieData) {
  let html = "";
  html += `
    <div class="card-body">
        <div class="card-body-up">
            <div class="card-img"><img src="${movieData.Poster}" alt=""></div>
            <div class="card-items">
            <h2>${movieData.Title}</h2>
            <h5><i class="fa-solid fa-star" style="color: #ffb92a;"></i>   ${movieData.imdbRating}</h5>
            <p>${movieData.Rated}</p>
            <p>${movieData.Year}</p>
            <p>${movieData.Metascore}</p>
            <div class="btns">${movieData.Genre.split(',').map(genre => {
              return `<span class="btn">${genre.trim()}</span>`
            }).join('  ')}
           

            </div>
        </div>
        </div>
        <div class="movie-info">
                <h4>Plot:</h4>
                <p>${movieData.Plot}</p>
                <h4>Cast:</h4>
                <p>${movieData.Actors}</p>
        </div>
        </div>`;
  return html;
}

searchButton.addEventListener("click", function () {
  let movieTitle = movieTitleInput.value;
  let apiUrl = "http://www.omdbapi.com/?t=" + movieTitle + "&apikey=27958444";
  axios.get(apiUrl)
      .then(function (res) {
          var movieCardHtml = generateMovieCard(res.data);
          movieResults.innerHTML = movieCardHtml;
          movieTitleInput.value = "";        })
    });


    
