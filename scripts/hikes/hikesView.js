class HikesView {
    constructor(hikes) {

        function displayHikes() {
            if ("content" in document.createElement("template")) {

                const hikesSelector = document.querySelector("#hikes");
                const templateSelector = document.querySelector("#hikesTemplate");

                const clone = templateSelector.content.cloneNode(true);

                const hikesArticle = clone.querySelector("#hikesArticle");
                const hikesArticleH2 = clone.querySelector("#hikesArticle h2");
                const hikesArticleP = clone.querySelector("#hikesArticle p");

                if (hikes.image) {
                    const hikesImage = clone.querySelector("#hikesArticle img");
                    hikesImage.src = hikes.image;
                } else {
                    const hikesImgDiv = clone.querySelector("#hikesArticle div");
                    hikesImgDiv.classList.add("hidden");
                }

                hikesArticleH2.innerHTML = hikes.name;
                hikesArticleP.innerHTML = hikes.description;
                
                hikesSelector.appendChild(hikesArticle);
            }
        }

        displayHikes();

    }
}