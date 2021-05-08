var canvas;
var music;
var box1,box2,box3,box4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = new Box(100,550,70,70);
    box2 = new Box(300,550,70,70);
    box3 = new Box(500,550,70,70);
    box4 = new Box(700,550,70,70);


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
box1.display();
box2.display();
box3.display();
box4.display();


    //add condition to check if box touching surface and make it box
}
