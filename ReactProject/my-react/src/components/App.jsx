import React, { useState,useEffect } from "react";
import { uuid } from "uuidv4";
import Header from "./Header";
import Addcontact from "./Addcontact";
import Contactlist from "./Contactlist";

function App(){
  const local_storage_key = "contacts";

  const[contacts, setcontacts] = useState([]);

  const addcontacthandler = (contact) =>{
    console.log(contact);
    setcontacts([...contacts,{ id: uuid(), ...contacts} ]);
  };

  const removecontact = (id) => {
    const newcontact = contacts.filter((contact) => {
      return contact.id !== id;
    })
  }
  useEffect(() =>{
    const retrivecontacts =JSON.parse(localStorage.getItem(local_storage_key));
    if (retrivecontacts) setcontacts(retrivecontacts);


  },[]);
  useEffect(() =>{
    localStorage.setItem(local_storage_key,JSON.stringify(contacts));


  },[contacts]);
 
  return <div> 
  <Header/>
  <Addcontact addcontacthandler={addcontacthandler}/>
  <Contactlist contacts={contacts} getcontactid={removecontact} />
  </ div>
}
export default App;