const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){

    var firstName = req.body.fname;
    var lastName = req.body.lname;

    var email = req.body.email;
    console.log(firstName, lastName, email);


});

app.listen(3200,function(){
    console.log("Server is running on port 3200")
});

// 5db7a5346654e57f9494e537f2b37cff-us21


// 26bdf1ed33