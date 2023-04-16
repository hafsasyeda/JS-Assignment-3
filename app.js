document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const form = document.querySelector("#preferencesForm");
  
    // Get the recommendation section element
    const recommendationSection = document.querySelector("#recommendationSection");
  
    // Get the error message element
    const errorMessage = document.querySelector("#errorMessage");
  
    // Get the movie data
    const movies = [
      {
        title: "The Shawshank Redemption",
        genre: "Drama",
        rating: 9.3,
        releaseYear: 1994,
      },
      {
        title: "The Godfather",
        genre: "Crime",
        rating: 9.2,
        releaseYear: 1972,
      },
      {
        title: "The Godfather: Part II",
        genre: "Crime",
        rating: 9.0,
        releaseYear: 1974,
      },
      {
        title: "The Dark Knight",
        genre: "Action",
        rating: 9.0,
        releaseYear: 2008,
      },
      {
        title: "12 Angry Men",
        genre: "Drama",
        rating: 8.9,
        releaseYear: 1957,
      },
      {
        title: "Schindler's List",
        genre: "Biography",
        rating: 8.9,
        releaseYear: 1993,
      },
      {
        title: "The Lord of the Rings: The Return of the King",
        genre: "Action",
        rating: 8.9,
        releaseYear: 2003,
      },
      {
        title: "Pulp Fiction",
        genre: "Crime",
        rating: 8.9,
        releaseYear: 1994,
      },
      {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        genre: "Action",
        rating: 8.8,
        releaseYear: 2001,
      },
      {
        title: "Forrest Gump",
        genre: "Drama",
        rating: 8.8,
        releaseYear: 1994,
      },
    ];
  
    // Define the function that generates movie recommendations based on user preferences
    function generateRecommendations(genre, rating, releaseYear) {
      // Filter the movies based on user preferences
      const filteredMovies = movies.filter(function (movie) {
        return (
          movie.genre === genre &&
          movie.rating >= rating &&
          movie.releaseYear >= releaseYear
        );
      });
  
      // Sort the filtered movies by release year in descending order
      const sortedMovies = filteredMovies.sort(function (a, b) {
        return b.releaseYear - a.releaseYear;
      });
  
      // If there are no recommendations, show the error message
      if (sortedMovies.length === 0) {
        errorMessage.style.display = "block";
        recommendationSection.style.display = "none";
      } else {
        // If there are recommendations, hide the error message and display them
        errorMessage.style.display = "none";
        recommendationSection.style.display = "block";
  
        // Get the recommendation list element
        const recommendationList = document.querySelector("#recommendationList");
  
        // Clear the recommendation list
        recommendationList.innerHTML = "";
  
        // Iterate through the sorted movies and add them to the recommendation list
        sortedMovies.forEach(function (movie) {
          const movieElement = document.createElement("li");
          movieElement.textContent = `${movie.title} (${movie.releaseYear})`;
          recommendationList.appendChild(movieElement);
        });
      }
 
   }
})
