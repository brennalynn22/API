const { default: axios } = require("axios");

let button = document.querySelector('button');

// function buttonHandler(){
//     console.log('button clicked')
// }
function getresidents(Alderaan) { 
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then(res => {
        console.log(res.data.results[0].residents)
        const {residents}=res.data.results[0] 
        for (let i=0; i<residents.length;i++){
            axios.get(residents[i]).then(res => {
                console.log(res.data.name)
                let h2 = document.createElement('h2');
                h2.textContent = res.data.name
            })
        }
    })
   // console.log('button clicked')
}

button.addEventListener.addEventListener('click', buttonHandler)