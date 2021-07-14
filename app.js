// import functions and grab DOM elements
import pokemon from './data/pokemon.js';
import { capturePokemon, clearPokedex, encounterPokemon } from './storage-utils.js';

const pokemon1Radio = document.getElementById('pokemon1-radio');
const pokemon1Image = document.getElementById('pokemon1-img');

const pokemon2Radio = document.getElementById('pokemon2-radio');
const pokemon2Image = document.getElementById('pokemon2-img');

const pokemon3Radio = document.getElementById('pokemon3-radio');
const pokemon3Image = document.getElementById('pokemon3-img');

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

    pokemon1Radio.value = pokemon1.id;
    pokemon1Radio.checked = false;
    pokemon1Image.src = pokemon1.url_image;
    encounterPokemon(pokemon1.id);

    pokemon2Radio.value = pokemon2.id;
    pokemon2Radio.checked = false;
    pokemon2Image.src = pokemon2.url_image;
    encounterPokemon(pokemon2.id);

    pokemon3Radio.value = pokemon3.id;
    pokemon3Radio.checked = false;
    pokemon3Image.src = pokemon3.url_image;
    encounterPokemon(pokemon3.id);

    playsCounter.textContent = `Total plays: ${totalPlays}`;
}
  // render the random pokemon
renderRandomPokemon();
// set event listeners 
submitButton.addEventListener('click', ()=> {
    console.log('I know how to click a button');
    const pokemonId = document.querySelector('input[type=radio]:checked');
    capturePokemon(pokemonId);
    if (totalPlays < 2){
        renderRandomPokemon();
    } else {
        alert('You have played enough!');
        clearPokedex();
    }
    // get the chosen pokemon id (using input[type=radio]:checked selector)
    // update the preferred key on the chosen pokemon
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
