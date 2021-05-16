let previous=document.querySelector('#pre');
let play=document.querySelector('#play');
let next=document.querySelector('#next');
let title=document.querySelector('#title');
let recent_volume=document.querySelector('#volume');
let volume_show=document.querySelector('#volume_show');
let slider=document.querySelector('#duration_slider');
let show_duration=document.querySelector('#show_duration');
let track_image=document.querySelector('#track_image');
let auto_play=document.querySelector('#auto');
let present=document.querySelector('#present');
let total=document.querySelector('#total');
let artist=document.querySelector('#artist');

let timer;
let autoplay=0;

let index_no=0;
let playing_song=false;

let track=document.createElement('audio');

let All_song=[
  {
    name:"YALGAAR",
    path:"music/1.mp3",
    img:"images/1.jpg",
    singer:"CARRYMINATI X Wily Frenzy"
  },
  {
    name:"TARASTI HAI NIGAHE",
    path:"music/2.mp3",
    img:"images/2.jpg",
    singer:"Asim Azhar & Zenab Fatima"
  },
  {
    name:"Mera Yaar Has Raha Hai Barish Ki Jaye",
    path:"music/3.mp3",
    img:"images/3.jpg",
    singer:"B Praak Ft Nawazuddin Siddiqui & Sunanda Sharma"
  },
  {
    name:"Far Alone",
    path:"music/4.mp3",
    img:"images/4.jpg",
    singer:"Jay Ant"
  },
  {
    name:"Otnicka - Where Are You",
    path:"music/5.mp3",
    img:"images/5.jpg",
    singer:"PEAKY BLINDERS"
  },

];
function load_track(index_no)
{
  track.src=All_song[index_no].path;
  title.innerHTML=All_song[index_no].name;
  track_image.src=All_song[index_no].img;
  artist.innerHTML=All_song[index_no].singer;
  track.load();
  total.innerHTML=All_song.length;
  present.innerHTML=index_no+1;
}
load_track(index_no);

 function justplay() {
   if(playing_song==false)
       {playsong();}
       else
   { pausesong(); }
 }

 function playsong(){
   track.play();
   playing_song=true;
   play.ineerHTML='<i class="fa fa-pause"></i>';
 }

 function pausesong(){
   track.pause();
   playing_song=false;
   play.ineerHTML='<i class="fa fa-play"></i>';
 }
 function next_song(){
   if(index_no<All_song-1)
   {
   index_no+=1;
   load_track(index_no);
   playsong();
   }
   else {
     index_no=0;
     load_track(index_no);
     playsong();
   }
 }

 function previous_song()
 {
   if(index_no>0)
   {
   index_no-=1;
   load_track(index_no);
   playsong();
   }
   else {
     index_no=All_song.length;
     load_track(index_no);
     playsong();
   }
 }
  
