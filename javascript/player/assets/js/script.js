const coverImg = document.querySelector("#cover>img");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const playImg = document.querySelector("#play>img");
const nextBtn = document.getElementById("next");

const cover = [
    "./assets/img/cover/coverDeadPrez.jpg",
    "./assets/img/cover/coverPharcyde.jpg",
    "./assets/img/cover/coverSoulOf.jpg"
];

const mp3 =[
    "./assets/sound/prez.mp3",
    "./assets/sound/the-pharcyde-passin-me-by.mp3",
    "./assets/sound/soul-of-mischief-93-til-infinity.mp3"
]

let i = 0;
let isPlaying = false;
let audio = new Audio(mp3[i]);

function audioDef(){
    audio = new Audio(mp3[i]);
}

function play(){
    audio.play();
}

function pause(){
    audio.pause();
}

playBtn.addEventListener("click", function(){
    if(isPlaying){
        pause();
        playImg.src = "./assets/img/pause-circle-regular.svg";
        isPlaying = false;
    } else {
        play();
        playImg.src = "./assets/img/play-circle-solid.svg";
        isPlaying = true;
    }
})

nextBtn.addEventListener("click", function(){
    if(i !== mp3.length - 1){
        pause();
        i++;
        audioDef();
        play();
        coverImg.src = cover[i];
        playImg.src = "./assets/img/play-circle-solid.svg";
        isPlaying = true;
    }
})

prevBtn.addEventListener("click", function(){
    if(i > 0){
        pause();
        i--;
        audioDef();
        play();
        coverImg.src = cover[i];
        playImg.src = "./assets/img/play-circle-solid.svg";
        isPlaying = true;
    }
})