
const url = 'https://pokeapi.co/api/v2/pokemon/{id or name}/'
const options = {
    method: 'GET',
};

document.addEventListener('button',() => {
    const button = document.querySelector('#button')
    button.addEventListener('click', async () => {
        const pokemonDataDiv = document.getElementById('pokemonData')
        const randomId = Math.floor(Math.random()*1118) +1
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/${randomId}')
            const randomPokemon = response.data
            const name = document.createElement('h2')
            name.textContent = `Pokemon: ${randomPokemon.name}`
            const sprite = document.createElement('img')
            sprite.src = randomPokemon.sprites.front_default;
            sprite.alt - `${randomPokemon.name} sprite`

            pokemonDataDiv.appendChild(name);
            pokemonDataDiv.appendChild(id);
            pokemonDataDiv.appendChild(sprite);
        } catch (error) {
            console.error('Error fetching Pokémon:', error);
        }
    });
});


// button.addEventListener('click', (fetchRandomPokemon) => {
//     console.log('click')
//     async function fetchRandomPokemon() {
//         // const pokemonDataDiv = document.getElementById('pokemonData')
//         const randomId = Math.floor(Math.random() * 1118) + 1
//         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
//         try {
//             const randomPokemon = await P.getPokemonSpeciesByName[randomId]
//         } catch (error) {
//             throw error
//         }
//     } return fetchRandomPokemon
// })





