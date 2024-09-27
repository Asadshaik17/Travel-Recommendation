function clearSearch() {
    document.getElementById('searchField').value = '';
    searchResults.innerHTML = '';

}

function search() {
    const input = document.getElementById('searchField').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (input === 'beaches' || input === 'beach') {
        fetch('./travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                const places = data.beaches;
                console.log(places.imageUrl);
                for (place of places) {
                    searchResults.innerHTML += `<img src="${place.imageUrl}" class="resultimg">`;
                    searchResults.innerHTML += `<h2>${place.name}</h2>`;
                    searchResults.innerHTML += `<p>${place.description}</p>`;
                }
            })
            .catch(error => console.error(error));
    } else if (input === 'temples' || input === 'temple') {
        fetch('./travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                const places = data.temples;
                console.log(places);
                for (place of places) {
                    searchResults.innerHTML += `<img src="${place.imageUrl}" class="resultimg">`;
                    searchResults.innerHTML += `<h2>${place.name}</h2>`;
                    searchResults.innerHTML += `<p>${place.description}</p>`;
                }
            })
            .catch(error => console.error(error));
    }else {
        searchCountry();
    }
}

function searchCountry() {
    const input = document.getElementById('searchField').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (input !== 'beach' || input !== 'beaches' || input !== 'temple' || input !== 'temples') {
        fetch('./travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                const places = data.countries.find(item => item.name.toLowerCase() === input);
                const cities = places.cities;
                for (city of cities) {
                    searchResults.innerHTML += `<img src="${city.imageUrl}" class="resultimg">`;
                    searchResults.innerHTML += `<h2>${city.name}</h2>`;
                    searchResults.innerHTML += `<p>${city.description}</p>`;
                }
                
            })
            .catch(error => console.error(error));
        }
}