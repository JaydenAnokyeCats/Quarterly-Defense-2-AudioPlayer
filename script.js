const fileInput = document.getElementById('audioFile');
const audioPlayer = document.getElementById('audioPlayer');
// const audioSource = document.getElementById('audioSource');


// const songArray = []; //WIP Feature
let currentBlobUrl = null;

fileInput.addEventListener("change", playAudio => {
    for(let i = 0; i < playAudio.target.files.length; i++){
        currentBlobUrl = URL.createObjectURL(playAudio.target.files[i]);
        //URL.createObjectURL makes a string that contains a blob URL, which is a temporary file-like object (stored in memory) of immutable, raw data (cannot be changed)
    }

    audioPlayer.src = currentBlobUrl
    audioPlayer.play(playAudio);
    console.log(audioPlayer.play(playAudio)); //Output to the console, Promise. A promise is the eventual completion or failure of an asynchronous operation. (Asynchronous meaning it doesn't fully complete and instead the runtime is parallel to other functions)  
});
