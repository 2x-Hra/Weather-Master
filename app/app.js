// npm init
// npm install express

const express = require ("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function( req, res){
   res.sendFile(__dirname +"/index.html");

});

app.post("/", function( req, res){
    console.log(req.body.cityName);
})

// const query = "Paris";
// const apiKey = "40d5fe1720ee3ca82704129f2af71f0b#";
// const unit = "metric"
// const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units="+ unit +"&appid="+ apiKey;
// //fetch Data From external server 
// https.get( url, function(response){ 
//     response.on("data", function(data){

//         const weatherData = JSON.parse(data);
//         const temp = weatherData.main.temp;
//         const weatherDescription = weatherData.weather[0].description;
//         const cityName = weatherData.name;
//         const iconID = weatherData.weather[0].icon;
//         const imgUrl = "https://openweathermap.org/img/wn/"+ iconID +"@2x.png";
        
//         res.write("<h1>" + cityName + "</h1>");
//         res.write("<p>the weather description  is: " + weatherDescription + ".</p>");
//         res.write("<h2> the temprature is : "+ temp + " degrees Celcius.</h2>");
//         res.write("<img src="+ imgUrl +  ">");
//         res.send(); // you can have only 1 res.send in each get method

//     });
// });

app.listen(3000, function(){
    console.log("Server started on http://localhost:3000")
});