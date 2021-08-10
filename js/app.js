// Variables
const btnBuscarBatalla = document.getElementById("btnBuscarBatalla");
const contenedor = document.getElementById("contenedor");


consultarPokemones();


// Eventos
btnBuscarBatalla.addEventListener("click", function(){
    consultarPokemones();
});




//Funciones

function llamarApi(id,num){
    urlAPI = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(urlAPI)
    .then(response => response.json())
    .then(data => {
        
        crearPokemon(data,num);

    })
    .catch(err => console.log("No se pudo conectar a la API, error: "+ err) );
}



function consultarPokemones(){
    let numeroRandom1 =  Math.round(Math.random()*150);
    let numeroRandom2 =  Math.round(Math.random()*150);

    llamarApi(numeroRandom1,1)
    llamarApi(numeroRandom2,2)
}


function crearPokemon(data,num){
    const parrafo1 = document.getElementById("parrafo-1");
    const imgPoke1 = document.getElementById("imgPoke1");
    if (num == 1) {
        parrafo1.innerText = data.name;
        imgPoke1.setAttribute("src",`${data.sprites.front_default}`)
    }
    
    const parrafo2 = document.getElementById("parrafo-2");
    const imgPoke2 = document.getElementById("imgPoke2");
    if (num == 2) {
        parrafo2.innerText = data.name;
        imgPoke2.setAttribute("src",`${data.sprites.front_default}`)
    } 
}
