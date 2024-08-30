console.log("Welcome To My Spotify App");

// Initialize the variables 
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
console.log(audioElement);
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");

let songs = [
    {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ceilo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS - Release] - 320K", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS - Release] - 320K", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-Feat-Jhoning NCS Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Janji-Heroes-Tonight-Feat-Jhoning NCS Release2", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Repeat Song", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Repeat First Song", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Janji-Heroes-Tonight-Feat-Jhoning NCS Release3", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Spin It", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}    
];



songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
});

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove("fa-regular", "fa-circle-play");
        masterPlay.classList.add("fa-solid", "fa-pause");
        gif.style.opacity = 1;
    }else {
        audioElement.pause();
        masterPlay.classList.remove("fa-solid", "fa-pause");
        masterPlay.classList.add("fa-regular", "fa-circle-play");
        gif.style.opacity = 0;
    }
});

// Make progress bar to progress as song plays. 
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

// Make progress bar to fast forward or backward the song. 
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
});


const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-solid", "fa-pause");
        element.classList.add("fa-regular", "fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
   element.addEventListener('click', (e)=>{
    console.log(e.target)
    makeAllPlay();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-regular", "fa-circle-play");
    e.target.classList.add("fa-solid", "fa-pause");
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    gif.style.opacity = 1;
    audioElement.play();
    masterPlay.classList.remove("fa-regular", "fa-circle-play");
    masterPlay.classList.add("fa-solid", "fa-pause");
   });
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songInde = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    gif.style.opacity = 1;
    audioElement.play();
    masterPlay.classList.remove("fa-regular", "fa-circle-play");
    masterPlay.classList.add("fa-solid", "fa-pause");
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songInde = 0;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    gif.style.opacity = 1;
    audioElement.play();
    masterPlay.classList.remove("fa-regular", "fa-circle-play");
    masterPlay.classList.add("fa-solid", "fa-pause");
})