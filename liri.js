require("dotenv").config();

var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
var axios = require("axios");


//1. node liri.js concert-this <artist/band name here>



// need to create variable for artist?
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
.then(function(response)    {
    console.log(response.data.// name of venue);
    console.log(response.data.//venue location);
    console.log(response.data.//event date formatted as MM/DD/YYYY);
});





//2. node liri.js spotify-this-song '<song name here>'

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });







//3. node liri.js movie-this '<movie name here>'


// need to create variable for movieName?
axios.get("http://omdbapi.com/?t=" + movieName + "&plot=short&apikey=trilogy")
.then(function(response) {
    console.log(response.data.Title);
    console.log(response.data.Year);
    console.log(response.data.imdbRating);
    console.log(response.data.Ratings[1]); // rotten tomatoes rationg
    console.log(response.data.Country);
    console.log(response.data.Language);
    console.log(response.data.Plot);
    console.log(response.data.Actors);
});






//4. node liri.js do-what-it-says




