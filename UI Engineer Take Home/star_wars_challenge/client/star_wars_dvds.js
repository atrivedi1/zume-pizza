$(document).ready(function(){

    var appContainer = document.getElementById("app-container");
    
    //set up to add movies more dynamically in the future. would need to change data structure potentially if order is important
    var movies = {
        "A New Hope": { oldPrice: "$22.95", newPrice: "$15.00", stars: 4 },
        "The Empire Strikes Back": { oldPrice: "$22.95", newPrice: "$15.00", stars: 4 },
        "Return of the Jedi": { oldPrice: "$22.95", newPrice: "$15.00", stars: 4 },
        "The Phantom Menace": { oldPrice: "$22.95", newPrice: "$15.00", stars: 4 },
        "Attack of the Clones": { oldPrice: "$22.95", newPrice: "$15.00", stars: 4 },
        "Revenge of the Sith": { oldPrice: "$22.95", newPrice: "$15.00", stars: 4 },
        "The Force Awakens": { oldPrice: "$22.95", newPrice: "$15.00", stars: 4 },
        "The Last Jedi": { oldPrice: "$22.95", newPrice: "$15.00", stars: 4 },
    }

    //new movie function
    function newMovie(movieTitle) {
        //create new movie-div
        var newMovieContainer = document.createElement("div");
        newMovieContainer.setAttribute("class", "movie-container");

        //create new image
        var newMovieImage = document.createElement("img");
        newMovieImage.setAttribute("class", "movie-poster");
        newMovieImage.setAttribute("src", "../assets/poster.jpg");

        //create new title div
        var newMovieTitle = document.createElement("div");
        newMovieTitle.setAttribute("class", "movie-title");
        newMovieTitle.innerText = movieTitle;

        //create new star rating
        var newMovieStarRating = document.createElement("div");
        newMovieStarRating.setAttribute("class", "movie-star-rating");
        
        for(var i = 1; i <= 5; i++) {
            var movieStar = document.createElement("img");

            if(i <= movies[movieTitle].stars) {
               movieStar.setAttribute("src", "../assets/star_filled.png"); 
            } else {
                movieStar.setAttribute("src", "../assets/star_empty.png"); 
            }

            newMovieStarRating.appendChild(movieStar);
        }

        //create dvd price container
        var newMoviePriceContainer = document.createElement("div");
        newMoviePriceContainer.setAttribute("class", "dvd-price-container");

        var newMovieOldPrice = document.createElement("span");
        newMovieOldPrice.setAttribute("class", "old-dvd-price");
        newMovieOldPrice.innerText = movies[movieTitle].oldPrice;
        newMoviePriceContainer.appendChild(newMovieOldPrice);

        var newMovieReducedPrice = document.createElement("span");
        newMovieReducedPrice.setAttribute("class", "new-dvd-price");
        newMovieReducedPrice.innerText = movies[movieTitle].newPrice;
        newMoviePriceContainer.appendChild(newMovieReducedPrice);

        //create new button
        var newMoviePurchaseButton = document.createElement("button");
        newMoviePurchaseButton.setAttribute("class", "add-to-cart-button");
        newMoviePurchaseButton.innerText = "Add to Cart";
        
        //append to new movie-div
        newMovieContainer.append(newMovieImage);
        newMovieContainer.append(newMovieTitle);
        newMovieContainer.append(newMovieStarRating);
        newMovieContainer.append(newMoviePriceContainer);
        newMovieContainer.append(newMoviePurchaseButton);

        //append movie-dev to app-container
        appContainer.append(newMovieContainer);
    }

    //initMovies function
    function initMovies() {
        for(movie in movies){
            newMovie(movie);
        }
    }

    initMovies();
});