var jukebox = document.querySelector("ul.player"); // grab the jukebox ul
jukebox.addEventListener("click", function(e) { // add event handler for thr jukebox ul
    var songName = e.target.getAttribute("data-src"), // get the clicked target data src attribute
        songPlaying = document.querySelector("#player"); // get the played song

    if (songPlaying) { // check if the song is playing
        if (songPlaying.paused) { // check if the song is paused
            songPlaying.play(); // play it
            e.target.id = "playing"; // add the proper id for it
        } else { // if not paused
            songPlaying.pause(); // pause it
            e.target.id = "paused"; // add the prper id for it
        }
    } else { // if not playing
        var audioPlayer = document.createElement("audio"); // creating an media object
        audioPlayer.id = "player"; // set an id for the object
        e.target.id = "playing"; // adding the predefined id styling to the targeted song
        audioPlayer.src = songName; // set the src for the object
        document.body.appendChild(audioPlayer); // append the object to the body
        audioPlayer.play(); // play the object

        audioPlayer.addEventListener("ended", function() { // adding an event handler for the ended song
            audioPlayer.parentNode.removeChild(audioPlayer); // remove the audio object
            e.target.id = ""; // reset the id for nothing
        }, false);
    }
    
}, false);