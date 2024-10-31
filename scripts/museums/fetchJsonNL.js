function fetchJson() {
    fetch('../assets/content/museums/museumsNL.json')
    .then((response) => response.json())
    .then((data) => {

        data.forEach(item => {
            const museums = new Museums(item);
            const museumsView = new MuseumsView(museums);
        });

    });
}

fetchJson();