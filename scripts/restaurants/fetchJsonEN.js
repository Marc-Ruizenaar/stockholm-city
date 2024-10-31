function fetchJson() {
    fetch('../assets/content/restaurantsEN.json')
    .then((response) => response.json())
    .then((data) => {

        data.forEach(item => {
            const restaurants = new Restaurants(item);
            const restaurantsView = new RestaurantsView(restaurants);
        });

    });
}

fetchJson();