// import React from "react";
// import ReactDOM from "react-dom";
// import Heading from "./components/Heading";
// import pi,{doublePi, triplePi} from "./components/Math";


// const date = new Date();
// const time = date.getHours();

// let greeting;

// const custom = {
//     color: ""
// };

// if(time < 12){
//     greeting = "Good morning";
//     custom.color = "red";
// }

// else if(time < 18){
//     greeting = "Good afternoon";
//     custom.color ="yellow";
// }

// else{
//     greeting = "Good night";
//     custom.color = "blue";
// }

// ReactDOM.render(<Heading />,
// document.getElementById("root"));




// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./components/App"






// ReactDOM.render(
  // <div>
    // {/* <h1>{pi}</h1>, */}
    // <h1>{doublePi()}</h1>,
    // <h1>{triplePi()}</h1>
    // </div>,

  // document.getElementById("root")
// );




// import React from "react";
// import ReactDOM from "react-dom";
// import {add, subtract, multiply, divide} from "./calculator"

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

// ReactDOM.render(
  // <ul>
    // <li>{add(1, 2)}</li>
    // <li>{multiply(2, 3)}</li>
    // <li>{subtract(7, 2)}</li>
    // <li>{divide(5, 2)}</li>
  // </ul>,
  // document.getElementById("root")
// );





//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
// https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

// ReactDOM.render(
//   <App />,
// document.getElementById("root"));


// import React from "react";
// import ReactDOM from "react-dom";
// function Card(props) {
//   return(
//     <div class="sty">
//     <h2>{props.name}</h2>
//     <img src={props.img}
//     alt="avatar_img"  />
//     <p>{props.tel}</p>
//     <p>{props.email}</p>

//     </div>
//   );
// }

// ReactDOM.render(
//   <div>
//     <h1>My Contacts</h1>

//     <h2>Beyonce</h2>
//     <img
//       src="https://cdn.britannica.com/51/188751-050-D4E1CFBC/Beyonce-2010.jpg"
//       alt="avatar_img" width={250}
//     />
//     <p>+123 456 789</p>
//     <p>b@beyonce.com</p>

//     <h2>Jack Bauer</h2>
//     <img
//       src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
//       alt="avatar_img"
//     />
//     <p>+987 654 321</p>
//     <p>jack@nowhere.com</p>

//     <Card name="Jack Bauer" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" tel="+987 654 321" email="jack@nowhere.com" />
//     <Card name="Chuck Norris" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" tel="78" email="456"></Card>
//     <h2>Chuck Norris</h2>
//     <img
//       src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
//       alt="avatar_img"
//     />
//     <p>+918 372 574</p>
//     <p>gmail@chucknorris.com</p>
//   </div>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
// https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
// let time = new Date().toLocaleTimeString();
// console.log(time);
// function say(){
  
//   console.log("hi");
// }
// setInterval(say, 1000);

// var numbers = [3, 4, 2, 1, 5];


// const newnumbers = numbers.findIndex(num => num > 3);
// console.log(newnumbers);


// import emojipedia from "./emojipedia";

// function meaning(mean){
//   return mean.meaning.substring(0,10);
// }
// const means = emojipedia.map(meaning);
// console.log(means);




// import React from "react";
// import ReactDOM from "react-dom";
// import cars from "./practice";

// const [honda, tesla] = cars;
// console.log(honda);

// const {coloursByPopularity: [hondaTopColour], speedStats: {topSpeed: hondaTopSpeed}} = honda;
// const {coloursByPopularity: [teslaTopColour], speedStats: {topSpeed: teslaTopSpeed}} = tesla;

// console.log(speedStats);

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );






