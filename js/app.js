const marvel = {
    render: () => {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c014daabe5e8a7fd1e54c114d6b28c63&hash=bebd173cfb8bf2b4fd822220d045a55a';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const hero of json.data.results) {
                    let urlHero = hero.urls[0].url;
                    let imageHero = hero.thumbnail.path + '.' + hero.thumbnail.extension;
                    let nameHero = hero.name;
                    contentHTML += `
                    <div class="col-md-4">
                       <a href="${urlHero}" target="_blank">
                         <img src="${imageHero}" alt="${nameHero}" class="img-thumbnail">
                       </a>
                      <h3 class="title">${nameHero}</h3>
                   </div>`;
                }
                container.innerHTML = contentHTML;
            })

    }
};

marvel.render();