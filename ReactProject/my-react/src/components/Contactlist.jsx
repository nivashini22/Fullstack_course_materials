import React from "react";
import Contactcard from "./Contactcard";

const Contactlist = (props) => {

    
    
      
        const renderContactlist = props.contacts.map((contact) => {
            return (
                <Contactcard contact={contact} />
            )
             
            });
    
return <div className="conli">{renderContactlist}</div>;

    

};

export default Contactlist;