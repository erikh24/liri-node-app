require("dotenv").config();

var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
var axios = require("axios");



//1. node liri.js concert-this <artist/band name here>
// concert-this
var artist = process.argv.slice(2).join('');

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
.then(function(response)    {
    for (var i = 0; i < response.data.length; i++) {
        var data = response.data[i];
        var venue = data.venue;
   
    // console.log(venue.name.split(", ")); // name of venue
    // console.log(venue.city); //venue location
    // console.log(moment(data.datetime).format("MM/DD/YY")); //event date formatted as MM/DD/YYYY
    
    var concertArray = [
        venue.name,
        venue.city,
        moment(data.datetime).format("MM/DD/YY")
    ]
    console.log(concertArray);
    // console.log(artist); //logging to check name of artist that is being searched for
    }
});





//2. node liri.js spotify-this-song '<song name here>'
// spotify-this-song

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });







//3. node liri.js movie-this '<movie name here>'
// movie-this


// need to create variable for movieName?
// axios.get("http://omdbapi.com/?t=" + movieName + "&plot=short&apikey=trilogy")
// .then(function(response) {
//     console.log(response.data.Title);
//     console.log(response.data.Year);
//     console.log(response.data.imdbRating);
//     console.log(response.data.Ratings[1]); // rotten tomatoes rationg
//     console.log(response.data.Country);
//     console.log(response.data.Language);
//     console.log(response.data.Plot);
//     console.log(response.data.Actors);
// });






//4. node liri.js do-what-it-says
// do-what-it-says




