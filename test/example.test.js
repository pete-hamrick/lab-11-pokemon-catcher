// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getPokedex, clearPokedex, encounterPokemon, capturePokemon } from '../storage-utils.js';


const test = QUnit.test;


test('does getPokedex pull pokemon from localStorage as object?', (expect) => {
    //Arrange
    const fakePokedex = [
        { id: 1,
            pokemon: 'bulbasaur'
        }, 
        {
            id: 2,
            pokemon: 'ivysaur'
        }
    ];
    const fakePokedexString = JSON.stringify(fakePokedex);
    localStorage.setItem('RESULTS', fakePokedexString);

    const pokedex = getPokedex();
    expect.deepEqual(pokedex, fakePokedex);
});

test('does setPokedex push pokemon to localStorage?', (expect) => {
    const fakePokedex = [
        { id: 1, pokemon: 'bulbasaur' }, 
        { id: 2, pokemon: 'ivysaur' }
    ];
    const fakePokedexString = JSON.stringify(fakePokedex);
    localStorage.setItem('RESULTS', fakePokedexString);
    clearPokedex();

    const expected = [];
    const pokedex = getPokedex();
    expect.deepEqual(pokedex, expected);
});

test('does encounterPokemon create object if it is the first encounter', (expect) =>{
    localStorage.removeItem('RESULTS');
    const fakePokedex = [
        { id: 1, shown: 1, preferred: 0 }, 
    ];
    encounterPokemon(1);

    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);
    
    expect.deepEqual(results, fakePokedex);
});

test('does capturePokemon create object if it is the first capture?', (expect) =>{
    localStorage.removeItem('RESULTS');
    const fakePokedex = [
        { id: 1, shown: 1, preferred: 1 }, 
    ];
    capturePokemon(1);

    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);
    
    expect.deepEqual(results, fakePokedex);
});