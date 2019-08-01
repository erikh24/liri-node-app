require("dotenv").config();

var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
var axios = require("axios");



//1. node liri.js concert-this <artist/band name here>
// concert-this

function concertThis(artist) {

    // var artist = process.argv.slice(2).join('');

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
    // writeToRandomTxt(data);
}
// concertThis('ariana grande')

//2. node liri.js spotify-this-song '<song name here>'
// // spotify-this-song
function spotifyThisSong(songName) {
    if (!songName) songName = "The Sign Ace of Base";

    // var songName = process.argv.slice(2).join(' ');
    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
            var artistNames = new Set();
            var item = data.tracks.items[0];
            var artists = item.artists;
            var songName = item.name;
            var url = item.external_urls.spotify;
            var albumName = item.album.name;
            for (var j = 0; j < artists.length; ++j) {
                artistNames.add(artists[j].name);
            }
            // console.log(data.tracks);
            console.log('Artists: ' + Array.from(artistNames).join(', '));
            console.log('Song Name: ' + songName);
            console.log('Preview Link: ' + url);
            console.log('Album Name: ' + albumName);
        });
    }
//         var item = data.tracks.items[0];
//         var artists = item.artists[0];
//         var songName = item.name;
//         var album = item.album;
//         var url = item.external_urls.spotify;

//         // console.log(data.tracks);
//         console.log("Artist(s) :" + artists);
//         console.log("Song Name: " + songName);
//         console.log("Album: " + album);
//         console.log("Preview Link: " + url);
//     });
// }

// console.log(songName);
// console.log(data.tracks);
// for (var i = 0; i < data.tracks.items.length; i++) {
//     console.log(data.tracks.items[i].name)

// }
// console.log(data.items.artist[0]);
// console.log(data.tracks.items.name);
//     });
//     // writeToRandomTxt(data);
// }



//3. node liri.js movie-this '<movie name here>'
// movie-this
function movieThis(movieName) {
    // var  = process.argv.slice(2).join('+');

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
    // writeToRandomTxt(data);
}

//4. node liri.js do-what-it-says
// do-what-it-says

function writeToRandomTxt(userSentence) {
    fs.appendFile("random.txt", JSON.stringify(userSentence) + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
    })
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (data.split(",").length === 2) {
            pick(data.split(",")[0], data.split(",")[1])
        } else {
            pick(data.split(",")[0])
        }
    })
}

var pick = function (userCommand, userPick) {
    switch (userCommand) {
        case 'concert-this':
            concertThis(userPick);
            break;
        case 'movie-this':
            movieThis(userPick);
            break;
        case 'spotify-this-song':
            spotifyThisSong(userPick);
            break;
        case 'do-what-it-says':
            doWhatItSays();
            break;
    }
}

var runProgram = function (arg1, arg2) {
    pick(arg1, arg2);
};

runProgram(process.argv[2], process.argv.slice(3).join(" "));



