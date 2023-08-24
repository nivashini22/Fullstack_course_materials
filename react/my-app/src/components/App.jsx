// import React from "react";
// import Header from "./Header";
// import Note from "./Note";
// import Footer from "./Footer";

// function App(){
//     return (
//     <div>
//     <Header />
//     <Note />
//     <Footer />
   
//   </div>
//     );
// }
// export default App;

// import React from "react";
// import Card from "./Card";
// import contacts from "../contact";

// function createcard(contact){
//   return <Card key={contact.id}
//   name={contact.name}
//   img={contact.imgURL}
//   tel={contact.phone}
//   email={contact.email}
//    />
// }

// function App() {
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>
//       {contacts.map(createcard)};
      /* <Card 
      name = {contacts[0].name}
      img = {contacts[0].imgURL}
      tel={contacts[0].phone}
      email={contacts[0].email}
      />
       <Card 
      name = {contacts[1].name}
      img = {contacts[1].imgURL}
      tel={contacts[1].phone}
      email={contacts[1].email}
      />

<Card 
      name = {contacts[2].name}
      img = {contacts[2].imgURL}
      tel={contacts[2].phone}
      email={contacts[2].email}
      /> */


     
//     </div>
//   );
// }

// export default App;


// 

// import React from "react";
// import Entry from "./Entry";
// import emojipedia from "../emojipedia";



// function App() {
//   return (
//     <div>
//       <h1>
//         <span>emojipedia</span>
//       </h1>
//       <dl className="dictionary">{emojipedia.map((emojiTerm) => {
//   return (
//     <Entry
//       key={emojiTerm.id}
//       emoji={emojiTerm.emoji}
//       name={emojiTerm.name}
//       description={emojiTerm.meaning}
//     />
//   );
// })}</dl>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Note from "./Note";
// import notes from "../Notes";

// function createnotes(nt){
//   return <Note title = {nt.title}
//   content = {nt.content} />
// }

// function App() {
//   return (
//     <div>
//       <Header />
//      {notes.map(createnotes)};      
//      <Footer />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Login from "./Login";
// var isloggedIn = false;


// function App() {
//   return <div className="container">{
    
//        isloggedIn ? <h1>Hello</h1> : <Login />
    

// }
 
//     </div>;
  
// }

// export default App;

// import React from "react";

// function strike(){
//       document.getElementById("root").style.textDecoration = "line-through";
// }
// function App(){
//       return(
//             <div>
//                   <p>buy</p>
//                   <button onClick={strike}>change</button>
                  
//                               </div>
//       )
// }


// export default App;


// 

// import React, { useState } from "react";
// console.log(time);

// function App() {

//   setInterval(increase, 1000);
// const time = new Date().toLocaleTimeString();

//   const [time2,settime]= useState(time);
//   function increase(){
//     const newtime = new Date().toLocaleTimeString();
//     settime(newtime);
//   }
//     return (
//     <div className="container">
//       <h1>{time2}</h1>
//       <button onClick={increase}>Get Time</button>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";

// function App() {
//   const[isclick,setclick]=useState("hello");
//   const [ismouse, setmouse]= useState(false);
//   function handleclick(){

//     setclick("submitted");
    
//   }
//   function mouseover(){
//     setmouse(true);
    
//   }
//   function mouseout(){
//     setmouse(false);

//   }
//   return (
//     <div className="container">
//       <h1>{isclick}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button style={{backgroundColor: ismouse ? "black" : "white"}}
//       onClick={handleclick}
//       onMouseOver={mouseover}
//       onMouseOut={mouseout} >Submit</button>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";

// function App() {
//   const [name,setname]=useState("");
//   const [name2,setname2]=useState("");
//   function handlechange(event){
//     setname(event.target.value);
//   }

//   function handlechange2(event){
//     setname2(name);
//     event.preventDefault();
//   }


//   return (
//     <div className="container">
      
//       <h1>Hello {name2}</h1>
//       <form onSubmit={handlechange2}>
//       <input onChange={handlechange} type="text" placeholder="What's your name?" value={name} />
//       <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;



// import React from "react";


// class App extends React.Component{
//   render(){
//     return <h1>Hello</h1>
//   }
// }
// export default App;


// import React, { useState } from "react";

// function App() {

//   const [fullname,setfullname]=useState(
//     {fname:"",
//       lname:""}
//   );


//   function handlechange(event){
//     const newvalue=event.target.value;
//     const inputname=event.target.name;
//     setfullname(prevValue =>{
//       if (inputname === "fname"){
//         return{
//           fname: newvalue,
//           lname:prevValue.lname
//         }
//       }else if (inputname === "lname"){
//         return{
//           fname:prevValue.fname,
//           lname:newvalue
//         }
//       }

//     })
       

//   }
 
//   return (
//     <div className="container">
//       <h1>Hello {fullname.fname} {fullname.lname}</h1>
//       <form>
//         <input onChange={handlechange} name="fname" placeholder="First Name" value={fullname.fname} />
//         <input onChange={handlechange} name="lname" placeholder="Last Name" value={fullname.lname}/>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";

// function App() {
//   const [contact, setContact] = useState({
//     fname: "",
//     lname: "",
//     email: ""
//   });



//   function handlechange(event){
//     const {name,value} =event.target;
//     setContact(prevValue=>{
//       return{
//         ...prevValue,
//         [name]: value
//       };
//     })
//   }
//   return (
//     <div className="container">
//       <h1>
//         Hello {contact.fname} {contact.lname}
//       </h1>
//       <p>{contact.email}</p>
//       <form>
//         <input onChange={handlechange} name="fname" placeholder="First Name" value={contact.fname} />
//         <input onChange={handlechange} name="lname" placeholder="Last Name" value={contact.lname}/>
//         <input onChange={handlechange} name="email" placeholder="Email" value={contact.email} />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import Todo from "./Todo";

// function App() {
//   const [list,setlist] = useState("");
//   const [items,setitems] = useState([]);

//   function handlechange(event){

//     setlist(event.target.value);

//   }
//   function handleclick(){
//     setitems((prevValue) =>{
//       return[...prevValue,list];
//     });
//     setlist("");

//   }

//   function deleteitem(id){
//     setitems(previtems =>{
//       return previtems.filter(
        
//           (item, index) => {
//             return index !== id;

//           }
        
//       )

//     });

//   }
//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         <input onChange={handlechange} type="text" value={list} />
//         <button onClick={handleclick} >
//           <span>Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//            {items.map((todoitem, index) => (
//              <Todo key={index} id={index} text={todoitem} onChecked={deleteitem}/>

//            )) }       
//            </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Todo from "./Todo";
// import InputArea from "./InputArea";

// function App() {
 
//   const [items, setItems] = useState([]);

  
//   function addItem(inputText) {
//     setItems(prevItems => {
//       return [...prevItems, inputText];
//     });
    
//   }

//   function deleteItem(id) {
//     setItems(prevItems => {
//       return prevItems.filter((item, index) => {
//         return index !== id;
//       });
//     });
//   }

//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <InputArea 
      
//       onadded={addItem}/>
      
//       <div>
//         <ul>
//           {items.map((todoItem, index) => (
//             <Todo
//               key={index}
//               id={index}
//               text={todoItem}
//               onChecked={deleteItem}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Note from "./Note";
// import CreateArea from "./CreateArea";

// function App() {
//   const[notes,setnotes] = useState([]);
//   function addnote(newnote){

//     setnotes(prevnotes =>{
//       return [...prevnotes, newnote];
//     });
//   }
// function deletenote(id){
//   setnotes(prevnotes =>{
//     return prevnotes.filter((noteitem, index)=>{
//       return index !== id;

//     })
//   })
// }


//   return (
//     <div>
//       <Header />
//       <CreateArea onAdd={addnote}/>
//       {notes.map((noteitem, index) => {
//         return <Note key = {index}
//         id={index}
//         title={noteitem.title} 
//         content={noteitem.content} 
//         ondelete={deletenote} />;
        

//       })}
//       <Footer />
//     </div>
//   );
// }

// export default App;



import React, { useState,useEffect } from "react";
import Header from "./Header";
import Addcontact from "./Addcontact";
import Contactlist from "./Contactlist";
function App(){
  const local_storage_key = "contacts";

  const[contacts, setcontacts] = useState([]);

  const addcontacthandler = (contact) =>{
    console.log(contact);
    setcontacts([...contacts,contact]);
  };
  useEffect(() =>{
    const retrivecontacts =JSON.parse(localStorage.getItem(local_storage_key));


  },[contacts]);
  useEffect(() =>{
    localStorage.setItem(local_storage_key,JSON.stringify(contacts));


  },[contacts]);
 
  return <div> 
  <Header/>
  <Addcontact addcontacthandler={addcontacthandler}/>
  <Contactlist contacts={contacts} />
  </ div>
}
export default App;