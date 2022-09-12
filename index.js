fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=cbb53a38daad4a38723daab094adb724')
.then ((res) => res.json())
.then((movie) =>  {
    console.log(movie.results, "fetched form database");
    for(let i = 0; i < movie.results.length; i++){
        renderMovies(movie.results[i]);
    }

});
function renderMovies(movie) {
    let panel = document.querySelector(".genreButton")
    let image = document.createElement("img")
    //span.innerText = movie.title
    image.src = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
    panel.append(image)

image.addEventListener("click", () => {
    console.log("clicked movie")
    renderDetails(movie)

// image.addEventListener("mouseover", () => {

// })
 /////hellllooooooo
})
}


function mouseHighlight () {
    
}



// function renderDetails(movie) {
// let displayInfoPanel = document.querySelector('#movieInfo');
// //let name = document.querySelector("#original_title");
// //name.innerText = movie.original_title
// let releaseDate = document.querySelector("#release_date")
// let voteAverage = document.querySelector("#vote_average")
// let description = document.querySelector("#overview")

// }

