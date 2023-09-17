
// function showPopup(title, description, imageSrc) {
//     const popup = document.getElementById('popup');
//     const popupTitle = document.getElementById('popupTitle');
//     const popupDescription = document.getElementById('popupDescription');
//     const popupImage = document.getElementById('popupImage');

//     popupTitle.textContent = title;
//     popupDescription.textContent = description;
//     popupImage.src = imageSrc;

//     popup.classList.add('is-active');
// }

// function closePopup() {
//     const popup = document.getElementById('popup');
//     popup.classList.remove('is-active');
// }

// const animeData = [
//     {
//         title: "Anime Title 1",
//         description: "Description of Anime 1",
//         imageSrc: "anime1.jpg",
//         likes: 0,
//         dislikes: 0,
//         totalLikes: 0,     
//         totalDislikes: 0,  
//     },
//     // Add data for other anime sections here
//     {
//         title: "Anime Title 2",
//         description: "Description of Anime 2",
//         imageSrc: "anime2.jpg",
//         likes: 0,
//         dislikes: 0,
//         totalLikes: 0,     
//         totalDislikes: 0,  
//     },
//     {
//         title: "Anime Title 3",
//         description: "Description of Anime 3",
//         imageSrc: "anime3.jpg",
//         likes: 0,
//         dislikes: 0,
//         totalLikes: 0,     
//         totalDislikes: 0,  
//     },
//     {
//         title: "Anime Title ",
//         description: "Description of Anime ",
//         imageSrc: "anime.jpg",
//         likes: 0,
//         dislikes: 0,
//         totalLikes: 0,     
//         totalDislikes: 0,  
//     },
// ];

// function likeAnime(index) {
//     if (animeData[index - 1]) {
//         animeData[index - 1].likes++;
//         animeData[index - 1].totalLikes++;
//         updateAnimeSection(index);
//     }
// }

// function dislikeAnime(index) {
//     if (animeData[index - 1]) {
//         animeData[index - 1].dislikes++;
//         animeData[index - 1].totalDislikes++;
//         updateAnimeSection(index);
//     }
// }

// function updateAnimeSection(index) {
//     const animeSection = document.querySelector(`.column.is-one-quarter:nth-child(${index})`);
//     const anime = animeData[index - 1];

//     if (animeSection && anime) {
//         const likeButton = animeSection.querySelector('.button.is-success');
//         const dislikeButton = animeSection.querySelector('.button.is-danger');
//         const likesCounter = animeSection.querySelector('.likes-counter');
//         const totalLikes = animeSection.querySelector('.total-likes');
//         const totalDislikes = animeSection.querySelector('.total-dislikes');

//         if (likeButton && dislikeButton && likesCounter && totalLikes && totalDislikes) {
//             likeButton.textContent = `Like (${anime.likes})`;
//             dislikeButton.textContent = `Dislike (${anime.dislikes})`;
//             likesCounter.textContent = `Likes: ${anime.likes - anime.dislikes}`; 
//             totalLikes.textContent = anime.totalLikes;
//             totalDislikes.textContent = anime.totalDislikes;
//         }
//     }
// }


// // Initialize the anime sections
// animeData.forEach((anime, index) => {
//     updateAnimeSection(index + 1);
// });
