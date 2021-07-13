// capturePokemon, encounterPokemon, getPokedex, setPokedex
// capturePokemon
//      will fire after the submit button click
//      will increment total plays
//      will increment total chosen
// encounterPokemon
//      will fire during button click 
//      will use our renderRandomPokemon function
//      will increment times pokemon viewed
// getPokedex
//      will pull pokemon from local storage
// setPokedex
//      set localStorage with rederRandomPokemon function
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

export function getPokedex() {
    let pokedexString = localStorage.getItem('RESULTS') || '[]';
    const pokedex = JSON.parse(pokedexString);
    return pokedex;
}

export function setPokedex() {

}