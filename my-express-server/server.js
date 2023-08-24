import express from "express";
const app = express();
app.get("/", function(request,response){
   // console.log(request.rawHeaders);
   response.send("<h1>hello</h1>");
});
app.get("/contact", function(request,response){
    response.send("<h1>Contact me:7010773915</h1>");
 });
 app.get("/about", function(request,response){
    response.send("<h1>I am Nivashini</h1>");
 });
 app.get("/hobbies", function(request,response){
    response.send("<ul><li>singing</li><li>movies</li></ul>");
 });
app.listen(3500, function(){
    console.log("server started on port 3500");
});
