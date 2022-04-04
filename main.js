// Variables
var aud = document.getElementsByTagName("audio")[0];
var current_range = document.getElementsByName("current")[0];
var voice_rang = document.querySelector(".btns input");
var image = document.querySelector(".image img");

function playAudio(){
    aud.play();
} // play

function pauseAudio(){
    aud.pause();
} // pause

function stopAudio(){
    aud.load();
    aud.pause();
} // stop


function muteAudio(){
    if(aud.muted ==  false){
        aud.muted = true;
        voice_rang.value = 0;
    }
    else{
        aud.muted = false;
        voice_rang.value = aud.volume; 
    }
}  // muted

function volumeAudio(){
    aud.volume = voice_rang.value;  
} // volume range
////////////////
function time_update() {
    current_range.value = aud.currentTime;
} // timing update
//////////////////
function time_max() {
    current_range.max = aud.duration;
} // timing complete
////////////////////
function set_update(){
    aud.currentTime = current_range.value;
} // update current_range input
//////////////////
function current_audio(aud_name){
    aud.src="audio/"+aud_name+".mp3";
    aud.src="audio/"+aud_name+".ogg";
    image.src = "images/"+aud_name+".jpg";
} // song selected