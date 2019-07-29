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
    .then(function (response) {
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

var movieName = process.argv.slice(2).join('+');

axios.get("https://omdbapi.com/?t=" + movieName + "&apikey=trilogy")
    .then(function (response) {
            var data = response.data;
            var title = data.Title;
            var year = data.Year;
            var imdbRating = data.imdbRating;
            var rotten = data.Ratings;
            var country = data.Country;
            var language = data.Language;
            var plot = data.Plot;
            var actors = data.Actors;

        console.log("Title: " + title);
        console.log("Year: " + year);
        console.log("imdb Rating: " + imdbRating);
        console.log("Rotten Tomatoes Rating: " + rotten);
        console.log("Country: " + country);
        console.log("Language: " + language);
        console.log("Plot: " + plot);
        console.log("Actors: " + actors);  
        
    });






//4. node liri.js do-what-it-says
// do-what-it-says




