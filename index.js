// Define our query as a multi-line string
var query = `
query ($id: Int) {
  Media (id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
  }
}
`;

var variables = {
    id: 15125
};

var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

// Make the HTTP API request
fetch(url, options)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError);

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

// Function to handle the API data
function handleData(data) {
    console.log(data);
    var animeTitle = data.data.Media.title.romaji;
    document.getElementById('anime-title').textContent = animeTitle;
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}
