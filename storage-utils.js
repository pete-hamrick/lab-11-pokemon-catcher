// capturePokemon, encounterPokemon, getPokedex, setPokedex
// capturePokemon
//      will fire after the submit button click
//      will increment total plays
//      will increment total chosen
export function findById(items, id) {
    for (const item of items) {
        if (item.id === id) {
            return item;
        }
    }
}
const emptyPokedex = [];
export function clearPokedex() {
    localStorage.setItem('RESULTS', JSON.stringify(emptyPokedex));
}

// getPokedex
//      will pull pokemon from local storage
export function getPokedex() {
    let pokedexString = localStorage.getItem('RESULTS') || '[]';
    const pokedex = JSON.parse(pokedexString);
    return pokedex;
}

// setPokedex
//      set localStorage with renderRandomPokemon function
export function setPokedex(data) {
    localStorage.setItem('RESULTS', JSON.stringify(data));
}

// encounterPokemon
//      will fire during button click 
//      will use our renderRandomPokemon function
//      will increment times pokemon viewed
export function encounterPokemon(id) {
    // this will track encounters for future use
    // get results from local storage
    let results = getPokedex();
    // get the object id matching input id
    const pokemon = findById(results, id);
    // if no matching object -- create one
    if (!pokemon){
        const newPokemon = {
            id: id,
            shown: 1,
            preferred: 0
        };
        results.push(newPokemon);
    } else {
        pokemon.shown++;
    }
    setPokedex(results);
    // else pokemon.shown increment
    // rewrite the results to local storage(setPokedex)
}

export function capturePokemon(id) {
    // will track which pokemon were selected
    // get results from local storage
    // get the object id matching input id
    // if no matching object -- create one
    // else update the shown key
    // rewrite results to local storage
}