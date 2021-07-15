import { getPokedex, findById } from '../storage-utils.js';

const resultsArea = document.getElementById('results-area');
// const resultsList = document.createElement('div');

// resultsArea.appendChild(resultsList);

const userPokedex = getPokedex();
let names = [];
let appearances = [];
let captured = [];

for (let item of userPokedex){
    const pokemon = findById(userPokedex, item.id);
    names.push(pokemon.pokemon);
    appearances.push(item.shown);
    captured.push(item.preferred);

    const pokemonImage = document.createElement('img');
    pokemonImage.src = `../data/${pokemon.url_image}`;

    const appearancesP = document.createElement('p');
    appearancesP.textContent = `Appeared: ${pokemon.shown} times`;
    
    const capturedP = document.createElement('p');
    capturedP.textContent = `Captured: ${pokemon.preferred} times`;

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');

    resultDiv.appendChild(pokemonImage);
    resultDiv.appendChild(appearancesP);
    resultDiv.appendChild(capturedP);

    resultsArea.appendChild(resultDiv);
    
}