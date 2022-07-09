song = "";
function setup(){
    canvas = createCanvas(550 , 500);
    canvas.position(400 , 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 0 , 0 , 550 , 500);
}
 
function preload (){
    song =loadSound("music.mp3");
}
function play(){
    song.play();
}
function stop(){
    song.stop();
}