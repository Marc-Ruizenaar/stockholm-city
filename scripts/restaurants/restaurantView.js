class RestaurantsView {
    constructor(restaurants) {

        function displayRestaurant() {
            if ("content" in document.createElement("template")) {

                const restaurantsSelector = document.querySelector("#restaurants");
                const templateSelector = document.querySelector("#restaurantsTemplate");

                const clone = templateSelector.content.cloneNode(true);

                const restaurantsArticle = clone.querySelector("#restaurantsArticle");
                const restaurantsArticleH2 = clone.querySelector("#restaurantsArticle h2");
                const restaurantsArticleP = clone.querySelector("#restaurantsArticle p");

                if (restaurants.image) {
                    const restaurantsImage = clone.querySelector("#restaurantsArticle img");
                    restaurantsImage.src = restaurants.image;
                } else {
                    const restaurantsImgDiv = clone.querySelector("#restaurantsArticle div");
                    restaurantsImgDiv.classList.add("hidden");
                }

                restaurantsArticleH2.innerHTML = restaurants.name;
                restaurantsArticleP.innerHTML = restaurants.description;
                
                restaurantsSelector.appendChild(restaurantsArticle);
            }
        }

        displayRestaurant();

    }
}