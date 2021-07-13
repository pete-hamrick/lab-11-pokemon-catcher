// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getPokedex, clearPokedex } from '../storage-utils.js';


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
    clearPokedex();

    const expected = [];
    const pokedex = getPokedex();
    expect.deepEqual(pokedex, expected);
});
