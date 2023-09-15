  // Define the AniList API endpoint
  var apiUrl = 'https://graphql.anilist.co';

  // GraphQL query to retrieve top 5 popular anime
  var topPopularQuery = `
    query {
      Page(page: 1, perPage: 5) {
        media(sort: POPULARITY_DESC, type: ANIME) {
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
        }
      }
    }
  `;

 // Function to fetch and display top 5 popular anime
async function fetchAndDisplayTopPopularAnime() {
    try {
      const response = await axios.post(apiUrl, {
        query: topPopularQuery,
      });
  
      const topPopularAnime = response.data.data.Page.media;
  
      // Update the HTML with the top 5 popular anime
      const topPopularList = document.getElementById('top-popular-list');
      topPopularList.innerHTML = ''; // Clear existing content
  
      topPopularAnime.forEach((anime, index) => {
        const animeTitle =
          anime.title.english || anime.title.romaji || anime.title.native;
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <div>
            <img class="anime-image" src="${anime.coverImage.medium}" alt="${animeTitle}">
          </div>
          <div>
            <a href="#" data-title="${animeTitle}" data-description="${anime.description}" data-image="${anime.coverImage.large}" onclick="openModal(this)">No.${index + 1} ${animeTitle}</a>
          </div>
        `;
        topPopularList.appendChild(listItem);
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Call the function when the DOM is loaded
  document.addEventListener('DOMContentLoaded', function () {
    // Call the function to fetch and display top 5 popular anime
    fetchAndDisplayTopPopularAnime();
  });

  // Function to open the Bulma modal
  function openModal(link) {
    const modal = document.getElementById('anime-modal');
    const title = link.getAttribute('data-title');
    const description = link.getAttribute('data-description');
    const image = link.getAttribute('data-image');

    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').innerHTML = description;
    document.getElementById('modal-image').innerHTML = `<img src="${image}" alt="${title}" class="anime-image">`;

    modal.classList.add('is-active');

    // Close modal when close button or overlay is clicked
    document.getElementById('close-modal').addEventListener('click', closeModal);
    document.getElementById('close-modal-button').addEventListener('click', closeModal);
  }

  // Function to close the Bulma modal
  function closeModal() {
    const modal = document.getElementById('anime-modal');
    modal.classList.remove('is-active');
  }