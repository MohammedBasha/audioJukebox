var jukebox = document.querySelector("ul.player"); // grab the jukebox ul
jukebox.addEventListener("click", function(e) { // add event handler for thr jukebox ul
    var audioPlayer = document.createElement("audio"), // creating an media object
        songName = e.target.getAttribute("data-src"); // git the clicked target data src attribute
    audioPlayer.id = "player"; // set an id for the object
    e.target.id = "playing"; // adding the predefined id styling to the targeted song
    audioPlayer.src = songName; // set the src for the object
    document.body.appendChild(audioPlayer); // append the object to the body
    audioPlayer.play(); // play the object

    audioPlayer.addEventListener("ended", function() { // adding an event handler for the ended song
        audioPlayer.parentNode.removeChild(audioPlayer); // remove the audio object
        e.target.id = ""; // reset the id for nothing
    }, false);
}, false);