function fetchJson() {
    fetch(`../assets/content/hikes/hikesNL.json`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(item => {
                const hikes = new Hikes(item);
                const hikesView = new HikesView(hikes);
            });
        })
}

fetchJson();