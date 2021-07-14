// import functions and grab DOM elements
import pokemon from './data/pokemon.js';
import { capturePokemon, encounterPokemon, findById, getPokedex } from './storage-utils.js';

const pokemon1Radio = document.getElementById('pokemon1-radio');
const pokemon1Image = document.getElementById('pokemon1-img');
const pokemon1Stats = document.getElementById('pokemon1-stats');

const pokemon2Radio = document.getElementById('pokemon2-radio');
const pokemon2Image = document.getElementById('pokemon2-img');
const pokemon2Stats = document.getElementById('pokemon2-stats');

const pokemon3Radio = document.getElementById('pokemon3-radio');
const pokemon3Image = document.getElementById('pokemon3-img');
const pokemon3Stats = document.getElementById('pokemon3-stats');


const submitButton = document.getElementById('submit');
const playsCounter = document.getElementById('total-plays');
// initialize state
let totalPlays = 0;

function renderRandomPokemon(){
    // increment total plays
    totalPlays++;
    // generate 3 random indices of our pokemon array
    let randNum1 = Math.floor(Math.random() * pokemon.length);
    let randNum2 = Math.floor(Math.random() * pokemon.length);
    let randNum3 = Math.floor(Math.random() * pokemon.length);

    // keep generating random numbers until they don't match
    while (randNum1 === randNum2 || randNum1 === randNum3 || randNum2 === randNum3) {
        randNum2 = Math.floor(Math.random() * pokemon.length);
        randNum3 = Math.floor(Math.random() * pokemon.length); 
    }
    let pokemon1 = pokemon[randNum1];
    let pokemon2 = pokemon[randNum2];
    let pokemon3 = pokemon[randNum3];
    const pokedex = getPokedex();

    pokemon1Radio.value = pokemon1.id;
    pokemon1Radio.checked = false;
    pokemon1Image.src = pokemon1.url_image;
    encounterPokemon(pokemon1.id);
    let Poke1 = findById(pokedex, pokemon1.id);
    const p1Seen = Poke1.shown; 
    pokemon1Stats.textContent = `Appearances: ${p1Seen}`;
    
    
    pokemon2Radio.value = pokemon2.id;
    pokemon2Radio.checked = false;
    pokemon2Image.src = pokemon2.url_image;
    encounterPokemon(pokemon2.id);
    let Poke2 = findById(pokedex, pokemon2.id);
    const p2Seen = Poke2.shown; 
    pokemon2Stats.textContent = `Appearances: ${p2Seen}`;
    
    pokemon3Radio.value = pokemon3.id;
    pokemon3Radio.checked = false;
    pokemon3Image.src = pokemon3.url_image;
    encounterPokemon(pokemon3.id);
    let Poke3 = findById(pokedex, pokemon3.id);
    const p3Seen = Poke3.shown; 
    pokemon3Stats.textContent = `Appearances: ${p3Seen}`;
    
    playsCounter.textContent = `Total plays: ${totalPlays}`;
}
  // render the random pokemon
renderRandomPokemon();
// set event listeners 
submitButton.addEventListener('click', ()=> {
    const pokemonId = document.querySelector('input[type=radio]:checked');
    capturePokemon(pokemonId);
    if (totalPlays < 4){
        renderRandomPokemon();
    } else {
        alert('You have played enough!');
        // clearPokedex();
    }
    // get the chosen pokemon id (using input[type=radio]:checked selector)
    // update the preferred key on the chosen pokemon
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
