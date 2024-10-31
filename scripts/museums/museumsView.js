class MuseumsView {
    constructor(museums) {

        function displaymuseums() {
            if ("content" in document.createElement("template")) {

                const museumsSelector = document.querySelector("#museums");
                const templateSelector = document.querySelector("#museumsTemplate");

                const clone = templateSelector.content.cloneNode(true);

                const museumsArticle = clone.querySelector("#museumsArticle");
                const museumsArticleH2 = clone.querySelector("#museumsArticle h2");
                const museumsArticleP = clone.querySelector("#museumsArticle p");

                if (museums.image) {
                    const museumsImage = clone.querySelector("#museumsArticle img");
                    museumsImage.src = museums.image;
                } else {
                    const museumsImgDiv = clone.querySelector("#museumsArticle div");
                    museumsImgDiv.classList.add("hidden");
                }

                museumsArticleH2.innerHTML = museums.name;
                museumsArticleP.innerHTML = museums.description;
                
                museumsSelector.appendChild(museumsArticle);
            }
        }

        displaymuseums();

    }
}