  // Define the AniList API endpoint
  var apiUrl = 'https://graphql.anilist.co';

  // GraphQL query to retrieve anime information
  var query = `
  query ($id: Int) {
    Media (id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
      coverImage {
        large
        medium
      }
      description(asHtml: true)
      reviews {
        edges {
          node {
            body
          }
        }
      }
      characters(role: MAIN) {
        edges {
          node {
            name {
              full
            }
          }
        }
      }
    }
  }
  `;
  document.addEventListener("DOMContentLoaded", function () {
  // Check for null or undefined values
  function isNullOrUndefined(value) {
      return value === null || value === undefined;
  }

  // Create an anime card and display its information
  function createAnimeCard(data, sectionIndex) {
      var animeTitle = data.title.english || data.title.romaji || data.title.native;
      var animeDescription = data.description;
      // var reviews = data.reviews.edges;
      var mainCharacters = data.characters.edges;
      var coverImage = data.coverImage.large; 

      // Check if essential information is missing
      // Skip this anime and fetch data for the next on
      if (isNullOrUndefined(animeTitle) || isNullOrUndefined(coverImage)) {
          fetchRandomAnimeData(sectionIndex);
          return;
      }

      var animeSection = document.getElementsByClassName("anime-section")[sectionIndex];

      // anime title
      animeSection.querySelector(".anime-title").textContent = animeTitle;

      // anime cover image
      var coverImageElement = animeSection.querySelector(".anime-cover");
      coverImageElement.src = coverImage;

      // anime description 
      var descriptionElement = animeSection.querySelector(".anime-description");
      if (!isNullOrUndefined(animeDescription)) {
          descriptionElement.innerHTML = animeDescription;
      }

      // reviews 
      // var reviewsList = animeSection.querySelector(".anime-reviews");
      // reviews.forEach(function (review) {
      //     if (!isNullOrUndefined(review.node.body)) {
      //         var listItem = document.createElement("li");
      //         listItem.textContent = review.node.body;
      //         reviewsList.appendChild(listItem);
      //     }
      // });

      // main characters 
      var charactersList = animeSection.querySelector(".anime-characters");
      mainCharacters.forEach(function (character) {
          if (!isNullOrUndefined(character.node.name.full)) {
              var listItem = document.createElement("li");
              listItem.textContent = character.node.name.full;
              charactersList.appendChild(listItem);
          }
      });
  }

  // Fetch anime data with a specific ID for a given section
  function fetchAnimeDataWithID(id, sectionIndex) {
      var variables = {
          id: id
      };

      // Make the API request using Axios 
      // Create and display the anime card
      axios.post(apiUrl, {
          query: query,
          variables: variables
      })
      .then(function (response) {
          var data = response.data.data.Media;
          createAnimeCard(data, sectionIndex); 
      })
      .catch(function (error) {
          console.error(error);
      });
  }

  // Fetch data for a random anime for a given section
  function fetchRandomAnimeData(sectionIndex) {
      var minAnimeID = 1;  
      var maxAnimeID = 1000;  
      var randomAnimeID = Math.floor(Math.random() * (maxAnimeID - minAnimeID + 1)) + minAnimeID;
      fetchAnimeDataWithID(randomAnimeID, sectionIndex);
  }

  // Display 6 random animes
  for (var i = 0; i < 6; i++) {
      fetchRandomAnimeData(i);
  }

  // Reload Button Click Event
  document.getElementById('reload-button').addEventListener('click', function() {
    // Reload the current page
    location.reload();
  });

  for (var i = 0; i < 6; i++) {
      fetchRandomAnimeData(i);
  }
});
