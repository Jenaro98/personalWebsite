var express = require("express");
var path = require('path')
var app = express();
var axios = require("axios");
var logger = require('morgan')


var mongoose = require('mongoose')

//mongoose.connect('mongodb+srv://admin:asdf@cluster0-fqk6f.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }).catch(error => handleError(error));

mongoose.connect('mongodb+srv://admin:asdf@cluster0-fqk6f.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
app.use(logger('dev'))
app.set("view engine", "ejs");

console.log( path.resolve( __dirname + '/../client'))

app.use(express.static( __dirname + '/../client/'));

// returns the HTML file, ALONG with OTHER STATIC ASSETS 
// LOOK INTO EXPRESS.STATIC on HOW TO RETURN CSS AND CLIENT SIDE 
// JAVASCRIPT WITH AN EXPRESS FUNCTION CALL THAT IS TIED/INPUTTED 
// AS MIDDLEWARE FOR THE APP OBJECT (which is just an http handler)
app.get("/", function(req, res){
    res.sendFile( path.resolve(  __dirname + '/../client/index.html') );
});

// app.get('/assets/javascript/app.js', (req, res) => {
// 	res.sendFile( path.resolve( __dirname + '/../client/assets/javascript/app.js') )
// })


// RECIEVE A QUERY FROM THE USER (which originates from CLIENT SIDE JAVASCRIPT)
// AND THEN WITH THE QUERY WHICH YOU GET IN THE FORM OF '?query_name=value?query_name2=value2'
// YOU FORWARD THE REQUEST TO THE GIPHY API WHICH THEN RETURNS AN OBJECT WITH A BUNCH OF URLS
// AFTER RECIEVING THE OBJECT, FORWARD IT BACK TO THE CLIENT WITH THE RES.SEND OR RES.JSON METHOD 
// app.get("/search", function(req,res){
// 	var query = req.query.searchword;
//     //var url = 'https://newsapi.org/v2/top-headlines?' +
//     //'country=us&' +
//     //'apiKey=8f2e056146b9453aab78f12b877dacb6';

//     var url = 'https://newsapi.org/v2/everything?q=' + query + '&apiKey=8f2e056146b9453aab78f12b877dacb6';

//     //var url = "http://api.giphy.com/v1/gifs/search?q="+ query + "&api_key=HUhp5DgiE6AzxaqOd9N4CIEi5ElmSS6i&limit=10";
// 	console.log(url);
//     axios.get(url).then( (response) => {
// 		console.log('got response from news API')
// 		//console.log(response.data)
// 		res.json(response.data);
// 	})
// 	.catch(err => {
// 		console.log(err) 
// 		res.json({
// 			error : true,
// 			error_message : err
// 		})
// 	});
// });


app.listen(3000, function(){
	console.log("Server is listening on port 3000");
} );