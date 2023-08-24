const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
    
});



app.post("/",function(req,res){
    const query = req.body.cityname;
    const apikey = "800b7efb41024d5c2f227c4d69c68a3a"
    const unit = "metric"

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=" + unit;


    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
        const weatherdata=JSON.parse(data);
        const temp = weatherdata.main.temp;
        const weatherDescription = weatherdata.main.temp;
        const icon = weatherdata.weather[0].icon;
        const imageurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        res.write("<p>the weather is currently " + weatherDescription + "</p>");
        res.write("<h1>the temperature in " + query + " is " + temp +" celsius</h1>")
        res.write("<img src=" + imageurl + ">")
        res.send()
        });
        


    });
    
});


    // const query = "London"
    // const apikey = "800b7efb41024d5c2f227c4d69c68a3a"
    // const unit = "metric"

    // const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=" + unit;


    // https.get(url,function(response){
    //     console.log(response.statusCode);
    //     response.on("data",function(data){
    //     const weatherdata=JSON.parse(data);
    //     console.log(weatherdata);
    //     const temp = weatherdata.main.temp
    //     console.log(temp);
    //     const icon = "13n";
    //     const imageurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
    //     res.write("<h1>the temperature is " + temp +" celsius</h1>")
    //     res.write("<img src=" + imageurl + ">")
    //     res.send()
    //     })
        


    // })

app.listen(3000,function(){
    console.log("server is running on port 3000.");
});