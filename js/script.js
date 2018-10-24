var jukebox = document.querySelector("ul.player"); // grab the jukebox ul
jukebox.addEventListener("click", function(e) { // add event handler for thr jukebox ul
    var songName = e.target.getAttribute("data-src"), // get the clicked target data src attribute
        audioPlayer = document.querySelector("#player"); // get the played song

    if (audioPlayer) { // check if there is a song and it is playing

        if (songName === audioPlayer.getAttribute("src")) { // check the two src are the same

            if (audioPlayer.paused) { // check if the song is paused
                audioPlayer.play(); // play it
                e.target.id = "playing"; // add the proper id for it
            } else { // if not paused
                audioPlayer.pause(); // pause it
                e.target.id = "paused"; // add the prper id for it
            }

        } else { // if not the same
            audioPlayer.src = songName; // change the old song src with the newely targeted song
            audioPlayer.play(); // play the song

            if (document.querySelector("#playing")) { // check if there is a playing song while changing to another song
                document.querySelector("#playing").id = ""; // reset the id
            } else { // if there a paused song
                document.querySelector("#paused").id = ""; // set the id
            }
            
            e.target.id = "playing"; // set the id for the play playing song
        }

        

    } else { // if there is a song create one
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