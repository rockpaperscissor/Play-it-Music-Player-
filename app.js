

const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
 const songs = [{
    name:"Youneedtocalmdown",
    title:"You need to calm down",
    artist:"Taylor Swift",
 },
{
    name:"nonsense",
    title:"Nonsense",
    artist:"Sabrina Carpenter",

},
{
    name:"slow",
    title:"Slow",
    artist:"Ciara,Jackson Wng",
 },
{
    name:"paperrings",
    title:"Paper Rings",
    artist:"Taylor Swift",

},
{
    name:"mysteryoflove",
    title:"Mystery Of Love",
    artist:"Sufian Stevens",
 },
{
    name:"darari",
    title:"Darari",
    artist:"Enhypen",

}
];




let isPlaying = false;

//for play function
const playMusic = ()=>{
    isPlaying = true;
    music.play();
    
    play.classList.replace('fa-play','fa-pause');
    img.classList.add('anime');

} ; 
//for pause function
const pauseMusic= ()=>{
    isPlaying = false;
    music.pause();
    
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove('anime');

} ; 
play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
   //isPlaying ? pauseMusic(): playMusic();
});

const loadSong = (songs) => {
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src = "music/"+songs.name+".mp3";
    img.src = "images/"+songs.name+".jpeg";
};
songIndex =0;



loadSong(songs[songIndex]);

//loadSong(songs[5]);

const nextSong =()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();


}
const prevSong =()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();


}
next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);