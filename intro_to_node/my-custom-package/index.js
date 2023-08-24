// const upperCase = require("upper-case").upperCase;

// function greet(name){
//     console.log(upperCase(`Hello ${name}`));
// }
// greet("niva!");
// module.exports= greet;

const print = async(poke) => {
    const response = await fetch (
        `https://pokeapi.co/api/v2/pokemon/${poke}`
    );
    const pokemon = await response.json;
    const moves = pokemon.moves.map(({move}) => move.name);
    console.log(moves.slice(0,5))
}    
print("charmander");