// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});// test('does renderRandomPokemon give you 3 different pokemon?', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const fakeResult = {

//     }
//     const expected = pokemon1 !== pokemon2 && pokemon1 !== pokemon3 && pokemon2 !== pokemon3;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = renderRandomPokemon();

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.deepEqual(actual, expected);
// });
