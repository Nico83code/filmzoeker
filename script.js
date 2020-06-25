

const filtered = data.Movies.filter((movie) => {
  return movie.Year >= 2014;
});
// console.log("filterd", filtered);

const avengers = data.Movies.filter((movie) => {
  return movie.Title.includes("Avengers");
});
// console.log("avengers", avengers);

const xmen = data.Movies.filter((movie) => {
  return movie.Title.includes("X-Men");
});
// console.log("xmen", xmen);

const princess = data.Movies.filter((movie) => {
  return movie.Title.includes("Princess");
});
//   console.log("princess", princess);

const batman = data.Movies.filter((movie) => {
  return movie.Title.includes("Batman");
});
//   console.log("batman", batman);
const movieList = document
  .getElementById("movieList")
  .getElementsByTagName("ul")[0];
const navLinks = document.querySelector(".nav_links");
const navClick = navLinks.addEventListener("click", (event) => {
  switch (event.target.id) {
    case "latest":
      movieList.innerHTML = "";
      return filtered.forEach((movie) => {
        const addMoviesToDom = document.createElement("li");
        const newPoster = document.createElement("img");
        const newUrl = document.createElement("a");
        const movieList = document
          .getElementById("movieList")
          .getElementsByTagName("ul")[0];
        movieList.appendChild(addMoviesToDom);
        addMoviesToDom.appendChild(newUrl);
        newUrl.setAttribute(
          "href",
          `https://www.imdb.com/title/${movie.imdbID}`
        );
        newUrl.appendChild(newPoster);
        newPoster.setAttribute("src", `${movie.Poster}`);
      });
    case "avenger":
      movieList.innerHTML = "";
      return avengers.forEach((movie) => {
        const addMoviesToDom = document.createElement("li");
        const newPoster = document.createElement("img");
        const newUrl = document.createElement("a");
        const movieList = document
          .getElementById("movieList")
          .getElementsByTagName("ul")[0];
        movieList.appendChild(addMoviesToDom);
        addMoviesToDom.appendChild(newUrl);
        newUrl.setAttribute(
          "href",
          `https://www.imdb.com/title/${movie.imdbID}`
        );
        newUrl.appendChild(newPoster);
        newPoster.setAttribute("src", `${movie.Poster}`);
      });

    case "xmen":
      movieList.innerHTML = "";

      return xmen.forEach((movie) => {
        const addMoviesToDom = document.createElement("li");
        const newPoster = document.createElement("img");
        const newUrl = document.createElement("a");
        const movieList = document
          .getElementById("movieList")
          .getElementsByTagName("ul")[0];
        movieList.appendChild(addMoviesToDom);
        addMoviesToDom.appendChild(newUrl);
        newUrl.setAttribute(
          "href",
          `https://www.imdb.com/title/${movie.imdbID}`
        );
        newUrl.appendChild(newPoster);
        newPoster.setAttribute("src", `${movie.Poster}`);
      });
    case "princess":
      movieList.innerHTML = "";

      return princess.forEach((movie) => {
        const addMoviesToDom = document.createElement("li");
        const newPoster = document.createElement("img");
        const newUrl = document.createElement("a");
        const movieList = document
          .getElementById("movieList")
          .getElementsByTagName("ul")[0];
        movieList.appendChild(addMoviesToDom);
        addMoviesToDom.appendChild(newUrl);
        newUrl.setAttribute(
          "href",
          `https://www.imdb.com/title/${movie.imdbID}`
        );
        newUrl.appendChild(newPoster);
        newPoster.setAttribute("src", `${movie.Poster}`);
      });
    case "batman":
      movieList.innerHTML = "";

      return batman.forEach((movie) => {
        const addMoviesToDom = document.createElement("li");
        const newPoster = document.createElement("img");
        const newUrl = document.createElement("a");
        const movieList = document
          .getElementById("movieList")
          .getElementsByTagName("ul")[0];
        movieList.appendChild(addMoviesToDom);
        addMoviesToDom.appendChild(newUrl);
        newUrl.setAttribute(
          "href",
          `https://www.imdb.com/title/${movie.imdbID}`
        );
        newUrl.appendChild(newPoster);
        newPoster.setAttribute("src", `${movie.Poster}`);
      });
    case "searchbar":
      movieList.innerHTML = "";


      const searchBar = document.getElementById("searchbar");

      searchBar.addEventListener("keyup", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredMovies = data.Movies.filter((movie) => {
          return movie.Title.toLowerCase().includes(searchTerm);
        });
        movieList.innerHTML = "";
        filteredMovies.forEach((movie) => {
          const addMoviesToDom = document.createElement("li");
          const newPoster = document.createElement("img");
          const newUrl = document.createElement("a");
          const movieList = document
            .getElementById("movieList")
            .getElementsByTagName("ul")[0];
          movieList.appendChild(addMoviesToDom);
          addMoviesToDom.appendChild(newUrl);
          newUrl.setAttribute(
            "href",
            `https://www.imdb.com/title/${movie.imdbID}`
          );
          newUrl.appendChild(newPoster);
          newPoster.setAttribute("src", `${movie.Poster}`);
        });
      });
  }
});

