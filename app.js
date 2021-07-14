import pokemon from './data/pokemon.js';
import { capturePokemon, encounterPokemon, findById, getPokedex, clearPokedex } from './storage-utils.js';

const pokemon1Radio = document.getElementById('pokemon1-radio');
const pokemon1Image = document.getElementById('pokemon1-img');
const pokemon1Seen = document.getElementById('pokemon1-stats');
const pokemon1Captures = document.getElementById('pokemon1-captures');

const pokemon2Radio = document.getElementById('pokemon2-radio');
const pokemon2Image = document.getElementById('pokemon2-img');
const pokemon2Seen = document.getElementById('pokemon2-stats');
const pokemon2Captures = document.getElementById('pokemon2-captures');

const pokemon3Radio = document.getElementById('pokemon3-radio');
const pokemon3Image = document.getElementById('pokemon3-img');
const pokemon3Seen = document.getElementById('pokemon3-stats');
const pokemon3Captures = document.getElementById('pokemon3-captures');


const submitButton = document.getElementById('submit');
const playsCounter = document.getElementById('total-plays');

let totalPlays = 0;

function renderRandomPokemon(){
    totalPlays++;
  
    let randNum1 = Math.floor(Math.random() * pokemon.length);
    let randNum2 = Math.floor(Math.random() * pokemon.length);
    let randNum3 = Math.floor(Math.random() * pokemon.length);
  
    while (randNum1 === randNum2 || randNum1 === randNum3 || randNum2 === randNum3) {
        randNum2 = Math.floor(Math.random() * pokemon.length);
        randNum3 = Math.floor(Math.random() * pokemon.length); 
    }
    let pokemon1 = pokemon[randNum1];
    let pokemon2 = pokemon[randNum2];
    let pokemon3 = pokemon[randNum3];
    encounterPokemon(pokemon1.id);
    encounterPokemon(pokemon2.id);
    encounterPokemon(pokemon3.id);
    const pokedex = getPokedex();
    
    pokemon1Radio.value = pokemon1.id;
    pokemon1Radio.checked = false;
    pokemon1Image.src = pokemon1.url_image;
    let poke1 = findById(pokedex, pokemon1.id);
    const p1Seen = poke1.shown;
    const p1Captures = poke1.preferred; 
    pokemon1Seen.textContent = `Appearances: ${p1Seen}`;
    pokemon1Captures.textContent = `Captures: ${p1Captures}`;
    
    
    pokemon2Radio.value = pokemon2.id;
    pokemon2Radio.checked = false;
    pokemon2Image.src = pokemon2.url_image;
    let poke2 = findById(pokedex, pokemon2.id);
    const p2Seen = poke2.shown;
    const p2Captures = poke2.preferred; 
    pokemon2Seen.textContent = `Appearances: ${p2Seen}`;
    pokemon2Captures.textContent = `Captures: ${p2Captures}`;
    
    
    pokemon3Radio.value = pokemon3.id;
    pokemon3Radio.checked = false;
    pokemon3Image.src = pokemon3.url_image;
    let poke3 = findById(pokedex, pokemon3.id);
    const p3Seen = poke3.shown; 
    const p3Captures = poke3.preferred; 
    pokemon3Seen.textContent = `Appearances: ${p3Seen}`;
    pokemon3Captures.textContent = `Captures: ${p3Captures}`;
    
    playsCounter.textContent = `Total plays: ${totalPlays}`;
}
  
renderRandomPokemon();

// set event listeners 
submitButton.addEventListener('click', ()=> {
    const pokemonId = document.querySelector('input[type=radio]:checked');
    capturePokemon(pokemonId);
    if (totalPlays < 4){
        renderRandomPokemon();
    } else {
        alert('You have played enough!');
        clearPokedex();
    }
});
