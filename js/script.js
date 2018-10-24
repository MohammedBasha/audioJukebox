var jukebox = document.querySelector("ul.player");
jukebox.addEventListener("click", function(e) {
    var audioPlayer = document.createElement("audio");
    audioPlayer.id = "player";
    document.body.appendChild(audioPlayer);
}, false);