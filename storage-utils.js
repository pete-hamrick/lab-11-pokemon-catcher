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

export function setPokedex(data) {
    localStorage.setItem('RESULTS', JSON.stringify(data));
}

export function encounterPokemon(id) {
    let results = getPokedex();
    const pokemon = findById(results, id);
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
}

export function capturePokemon(id) {
    let results = getPokedex();
    const pokemon = findById(results, id);
    pokemon.preferred++;
    setPokedex(results);
}