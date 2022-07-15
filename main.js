// As you complete this section, be sure to test along the way using Postman and console.logs
// Inside the callback passed to the .then, loop over the residents array returned on the results. It’s full of URLs.
// In the loop, make another get request for each URL in the array.
// You’ll have another .then that has its own callback, inside which you should create an h2 element whose content is the name of the resident that you just requested. Append the h2 to your HTML document.
// 

// for(let i=0; i<res.data.residents.length; i++){
//     axios.get(res.data.residents[i]).then(res=>{
//         const h2= document.createElement('h2')
//        console.log( res.data.name) 
//        h2.textContent = res.data.name
//         document.body.appendChild(h2)
//     })
// }
// })

// }

//const { default: axios } = require("axios")

const resBtn = document.querySelector('.res-btn')

function getresidents(Alderaan) { 
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then(res => {
        console.log(res.data.results[0].residents)
        const {residents}=res.data.results[0]
        for (let i=0; i<residents.length; i++){
            axios.get(residents[i]).then(res =>{
                console.log(res.data.name)
                let h2 =document.createElement('h2');
                h2.textContent=res.data.name
                document.body.appendChild(h2)
            })
        }
    })
    console.log('button clicked')
}
resBtn.addEventListener('click',getresidents)


