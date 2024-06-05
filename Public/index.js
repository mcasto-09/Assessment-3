

const button = document.querySelector('#button');
button.addEventListener('click',() => {
    axios.get('/movies').then((result) => {
        console.log(result)
    }).catch((err) => {
        
    });
   
})

console.log(button)