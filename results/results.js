import { getPokedex, findById } from '../storage-utils.js';
import pokemon from '../data/pokemon.js';

const resultsArea = document.getElementById('results-area');
// const resultsList = document.createElement('div');

// resultsArea.appendChild(resultsList);

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