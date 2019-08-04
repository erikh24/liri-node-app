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

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var data = response.data[i];
                var venue = data.venue;

                var concertData = [
                    "Concert: " + venue.name,
                    "City: " + venue.city,
                    "State: " + data.venue.region,
                    "Date of the show: " + moment(data.datetime).format("MM/DD/YY"),
                ].join("\n");

                fs.appendFile("log.txt", "---------- CONCERT ----------" + "\n" + concertData + "\n\n", function (err) {
                    if (err) throw err;
                    console.log(concertData);
                });

            }
        });
}

//2. node liri.js spotify-this-song '<song name here>'
// spotify-this-song

function spotifyThisSong(songName) {
    if (!songName) songName = "The Sign Ace of Base";

    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {

            var tracks = data.tracks.items[0];
            var artistArr = tracks.artists;
            var artists = [];
            for (var j = 0; j < artistArr.length; j++) {
                artists.push(artistArr[j].name);
            }

            var songData = [
                'Artist(s): ' + artists.join(", "),
                'Song Name: ' + tracks.name,
                'Album: ' + tracks.album.name,
                "Preview: " + tracks.preview_url
            ].join("\n");

            fs.appendFile("log.txt", "---------- SONG ----------" + "\n" + songData + "\n\n", function (err) {
                if (err) throw err;
                console.log(songData);
            });
        }
    });
}

//3. node liri.js movie-this '<movie name here>'
// movie-this

function movieThis(movieName) {
    if (!movieName) movieName = "Mr. Nobody";

    // var  = process.argv.slice(2).join('+');

    axios.get("https://omdbapi.com/?t=" + movieName + "&apikey=trilogy")
        .then(function (response) {

            var data = response.data;
            var movieData = [
                "Title: " + data.Title,
                "Year: " + data.Year,
                "IMDB Rating: " + data.imdbRating,
                "Rotten Tomatoes Rating: " + data.Ratings[1].Value,
                "Country: " + data.Country,
                "Language: " + data.Language,
                "Plot: " + data.Plot,
                "Actors: " + data.Actors
            ].join("\n");

            fs.appendFile("log.txt", "---------- MOVIE ----------" + "\n" + movieData + "\n\n", function (err) {
                if (err) throw err;
                console.log(movieData);
            });
        });
};

//4. node liri.js do-what-it-says
// do-what-it-says

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log("error");
        } else {
            var content = data.split(',');
            userCommand = content[0];
            input = content[1];
            pick(userCommand, input);

        }
    })
};

var pick = function (userCommand, userPick) {
    switch (userCommand) {
        case 'concert-this':
            concertThis(userPick);
            break;
        case 'spotify-this-song':
            spotifyThisSong(userPick);
            break;
        case 'movie-this':
            movieThis(userPick);
            break;
        case 'do-what-it-says':
            doWhatItSays(userPick);
            break;
        default:
            console.log("Oops, try again.\nValid inputs are concert-this, spotify-this-song, movie-this, or do-what-it-says.")
    }
};

var runProgram = function (arg1, arg2) {
    pick(arg1, arg2);
};

runProgram(process.argv[2], process.argv.slice(3).join(" "));
