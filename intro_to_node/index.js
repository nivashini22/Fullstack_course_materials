// var supervillains = require('supervillains');
// var mySupervillainname = supervillains.all;
// console.log(mySupervillainname);


// const superHero = require('./super-hero');
// console.log(superHero.getName());
// superHero.setName('Superman');
// console.log(superHero.getName());

// const newSuperHero = require('./super-hero');
// console.log(newSuperHero.getName());


// const data = require("./data");
// console.log(data.address.street);

// const path = require("path");

// console.log(__filename);
// console.log(__dirname);


// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));


// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));

// console.log(path.format(path.parse(__filename)));
// console.log(path.parse(__filename));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute('./data.json'));


// console.log(path.join('folder1','folder2','index.html'));
// console.log(path.join('folder1','folder2','../index.html'));
// console.log(path.resolve('folder1','folder2','index.html'));



// function greet(name){
//     console.log(name);
// }

// function greet1(greetfn){
//    const name="Niva";
//     greetfn(name);
// }

// greet1(greet);

// A function which is passed as argument to another function is the callback function

// const EventEmitter= require('events');

// const emitter = new EventEmitter();

// emitter.on('order-pizza',(size,topping) => {
//     console.log(`Order received !  ${size} pizza with ${topping}`)
// })

// emitter.emit('order-pizza','large','mushrooms');

//event name



// const DrinkMachine=require("./drink-machine")
// const PizzaShop= require('./pizza-shop');

// const pizzaShop = new PizzaShop();
// const drinkMachine= new DrinkMachine();
// pizzaShop.on("order",(size) => {
//     console.log(`Order received ! ${size} pizza`);
//     drinkMachine.serveDrink(size);

// })

// pizzaShop.order("large");
// pizzaShop.displayOrderNumber();

// const buffer = new Buffer.from("Niva");
// buffer.write("shini");

// console.log(buffer.toJSON());
// console.log(buffer);


// const fs = require("node:fs");

// const fileContents = fs.readFileSync("./file1.txt","utf-8");
// console.log(fileContents);

// fs.readFile("./file1.txt","utf-8",(error,data) => {
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }

// })
// fs.writeFileSync("./greet.txt","hey!!!");
// fs.writeFileSync("./greet.txt","Hello",{flag:"a"});


// const fs= require("node:fs/promises");
// fs.readFile("./file2.txt","utf-8")
// .then((data) => console.log(data))
// .catch((error)=> console.log(error))

// async function readFile(){
//     try{
//         const data = await fs.readFile("greet.txt","utf-8");
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// readFile();


// const fs = require("node:fs");

// const readableStream = fs.createReadStream("./file1.txt",{
//   encoding:"utf-8",
// });

// const writeableStream = fs.createWriteStream("./file2.txt");

// readableStream.on("data",(chunk) => {
//     console.log(chunk);
//     writeableStream.write(chunk);
// })

// readableStream.pipe(writeableStream);

// const http = require("http");
// const fs = require("fs");


//  const server =http.createServer((req,res) => {
//     const name="Fiaz";

    // const superHero ={
    //     firstName:"Niva",
    //     lastName:"Shini"
    // }
   // res.writeHead(200);
   // set a response status
   //200 is the http status code
//    res.end(JSON.stringify(superHero));
// let html = fs.readFileSync("./index.html","utf-8")
// html =html.replace("{{name}}",name);
//    res.end("<h1>hiii</h1>");
   // res.end(html);
// })

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// const crypto = require("crypto");
// crypto.pbkdf2


// console.log("hi");
// process.newTick(() => console.log("eee"));
// console.log("hello");






