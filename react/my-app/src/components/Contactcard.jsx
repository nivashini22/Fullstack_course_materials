import React from "react";
import user from "./user.png";
import del from "./del.jpg";

const Contactcard = (props) => {
    const {id, name, email} = props.contact;

    return (<div className="item">
         <img className="circle-img"
         
    src={user}
    alt="avatar_img" />
     <img className="del-img"
         
         src={del}
         alt="avatar_img" />
    <div className="content">
        <div className="head">{name}</div>
        <h2>{email}</h2>
        <hr
        style={{
          background: 'aqua',
          color: 'aqua',
          borderColor: 'blue',
          height: '3px',
        }}
      />
    </div>
   
    <i className="icon" style={{color:"red", marginTop:"7px"}}></i>
</div>);

};


export default Contactcard;