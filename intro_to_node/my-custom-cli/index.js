// #!/usr/bin/env node
// const yargs = require("yargs");
// const {argv} = yargs(process.argv);
// console.log(process.argv);

const inquirer = require("inquirer");
const print = async(poke) => {
    const response = await fetch (
        `https://pokeapi.co/api/v2/pokemon/${poke}`
    );
    const pokemon = await response.json();
    // console.log(pokemon);
    const moves = pokemon.moves.map(({ move }) => move.name);
    console.log(moves.slice(0,5))
}  

const prompt = inquirer.createPromptModule()
prompt([{
    type:"input",
    name:"pokemon",
    message:"Enter pokemon name:"
}]).then((answers) => {
    console.log(answers);
    const pokemon= answers.pokemon;
    print(pokemon);

})



// console.log("niva");