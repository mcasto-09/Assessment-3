import { pokemonRandomizer } from "../api";

const button = document.querySelector('#button');
button.addEventListener('click', () => {
    console.log('click')
    axios.get('../server.js/pokemon').then((result) => {
        P.getCharacteristicById(1)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log('There was an ERROR: ', error);
            });
        })
})

console.log(button)