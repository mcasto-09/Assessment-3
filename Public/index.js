const url = 'https://pokeapi.co/api/v2/pokemon/{id or name}/'
const options = {
    method: 'GET',
};


const button = document.querySelector('#button')
button.addEventListener('click', () => {
    let pokemonNum = Math.floor(Math.random() * 1025) + 1
    let pokeURL = `https://pokeapi.co/api/v2/pokemon/${pokemonNum}`
    axios.get(pokeURL).then((response) => {
        document.querySelector(`#pokemonData`).innerText = response.data.name;
    }).catch(error => {
        console.error("Error fetching the Pokémon data:", error);
    });

})





