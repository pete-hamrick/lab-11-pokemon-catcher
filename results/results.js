import { getPokedex, findById, clearPokedex } from '../storage-utils.js';
import pokemon from '../data/pokemon.js';

const resultsArea = document.getElementById('results-area');
const resetButton = document.getElementById('reset-game');

const userPokedex = getPokedex();
let names = [];
let appearances = [];
let captured = [];

for (let item of userPokedex){
    const userPokemon = findById(pokemon, item.id);
    names.push(userPokemon.pokemon);
    appearances.push(item.shown);
    captured.push(item.preferred);
    
    const pokemonImage = document.createElement('img');
    pokemonImage.src = userPokemon.url_image;
    
    const nameP = document.createElement('p'); 
    nameP.textContent = `Pokemon: ${userPokemon.pokemon}`;

    const appearancesP = document.createElement('p');
    appearancesP.textContent = `Appeared: ${item.shown} times`;
    
    const capturedP = document.createElement('p');
    capturedP.textContent = `Captured: ${item.preferred} times`;
    
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');
    
    resultDiv.appendChild(pokemonImage);
    resultDiv.appendChild(nameP);
    resultDiv.appendChild(appearancesP);
    resultDiv.appendChild(capturedP);
    
    resultsArea.appendChild(resultDiv);
    
}

// Chart data functions
let nameArr = userPokedex.map(item => {
    const pokemonName = findById(pokemon, item.id);
    return pokemonName.pokemon;
});

let appearancesArr = userPokedex.map(item => {
    return item.shown;   
});

const capturesArr = userPokedex.map(item => {
    return item.preferred;
});
// Chart script
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nameArr,
        datasets: [{
            label: 'Appearances',
            data: appearancesArr,
            backgroundColor: [
                '#efcb6880',
            ],
            borderColor: [
                '#efcb68ff',
            ],
            borderWidth: 1
        }, {
            label: 'Captures',
            data: capturesArr,
            backgroundColor: [
                '#bb0a2166'
            ],
            borderColor: [
                '#bb0a21ff'
            ],
            borderWidth: 1
        }]
        
    },
    options: {
        indexAxis: 'y'
    }
});
resetButton.addEventListener('click', () =>{
    window.location.replace('../index.html');
    clearPokedex();
});