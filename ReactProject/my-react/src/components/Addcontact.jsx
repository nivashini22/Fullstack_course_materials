import React from "react";

class Addcontact extends React.Component {
    state ={
        name:"",
        email:"",
    };

   

    

    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" && this.state.email === ""){
           alert("all the fields are mandatory");
           return;
        }
        this.props.addcontacthandler(this.state);
        this.setState({name:"",email:""})
        console.log(this.state);
    }
    render(){
        return(
            <div className="contact">
                <h2>Add contact</h2>
                <form className="contact-form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name" value={this.state.name} onChange={(e)=>{
                            this.setState({name:e.target.value})
                        }}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="email" value={this.state.email} onChange={(e)=>{
                            this.setState({email:e.target.value})
                        }}/>
                    </div>
                    <button className="btn">Add</button>

                </form>
                <hr
        style={{
          background: 'aqua',
          color: 'aqua',
          borderColor: 'blue',
          height: '3px',
        }}
      />
            </div>

        );
    }
}
export default Addcontact;