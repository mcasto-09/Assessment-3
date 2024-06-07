

const button = document.querySelector('#button');
button.addEventListener('click',() => {
    axios.get('../server.js/movies').then((result) => {
        
    }).catch((err) => {
        
    });
   
})

console.log(button)