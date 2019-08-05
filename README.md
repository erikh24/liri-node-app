# liri-node-app


## About This App:

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

****

## Organization 
This app is organized over multiple files. The API key and ID for Spotify is located in a separate .env file and exported to a js file (keys.js) that keeps the info private. Then that is exported to the main js file (liri.js).

The main content of the app is located in the liri.js file. I have the required node packages referenced at the top of the page. Then I created 4 functions for what the app can do. In here is also the code to log what the user searched for in a separate text file named log.txt. In another text file (random.txt) is a single line entry which has the name of one of the functions followed by the item to search for. 

Next, I used a Switch Statement to reference the functions created and named them 'concert-this', 'spotify-this-song', 'movie-this' and 'do-what-it-says'.

Lastly there is the code that takes in the arguments from the user to make the app run (i.e. movie-this A Quiet Place). 

****

## Built with Visual Studio Code

## Technologies used to create this app:
- JavaScript
- Node.js
- Node.js packages: 
    -Node-Spotify-API
    -Axios
    -Moment
    -DotEnv
- API's
    -Bands in Town
    -Spotify
    -OMDB 

****

## This app can be found on my GitHub page
- https://github.com/erikh24/liri-node-app.git
- https://erikh24.github.io/liri-node-app/

****

 ## I was the sole creator of this project.
 
****


# Instructions:

 To run this app, you first need to open the terminal and navigate to the folder where the app is located. Once there, you can do any of the following.

## To seach for concerts:
node liri.js concert-this Weezer (or any band/artist that you want)

![image](/images/concert-this-weezer.png)

    
If you just type concert-this (and no artist/band), it will default to the results for upcoming concert dates for Steve Aoki.

![image](/images/concert-this.png)


## To search for a song:
node liri.js spotify-this-song Piano Man (or any song that you want, you will have to also add the artist after the song name in the event that there is more than one song with the same name)

![image](/images/spotify-this-song-piano-man.png)

If you just type spotify-this-song, it will return the results for the song The Sign by Ace of Base.

![image](/images/spotify-this-song.png)


## To search for a movie:
node liri.js movie-this I tonya

![image](/images/movie-this-i-tonya.png)

If you just type movie-this, it will return the results for the movie Mr. Nobody.

![image](/images/movie-this.png)


## To do a search for whatever is listed in the random.txt file:
node liri.js do-what-it-says

![image](/images/do-what-it-says.png)

****


