const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(request,response){
    response.sendFile(__dirname + "/index.html");
 });

 app.post("/",function(request,response){
    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);
    var result = num1 + num2;
    response.send("the result" + result);

 });
 app.get("/bmicalculator", function(request,response){
    response.sendFile(__dirname + "/bmicalculator.html");
 });

 app.post("/bmicalculator",function(request,response){
    var weight = parseFloat(request.body.w);
    var height = parseFloat(request.body.h);
    var bmi = weight / (height * height);
    response.send("the result" + bmi);
 });
 

 app.listen(3600, function(){
    console.log("server started on port 3600");
});