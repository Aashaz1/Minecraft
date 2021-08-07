var canvas= new fabric.Canvas('myCanvas');
blockImageWidth= 30;
blockImageHeight= 30;
playerX=10;
playerY=10
var playerObject= "";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject= Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    })
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img) {
        blockImageObject=Img;

        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
    })
    canvas.add(blockImageObject);
});
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together");
        blockImageWidth = blockImageWidth+10;
        blockImageHeight = blockImageHeight+10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }
    if(e.shiftKey && keyPressed == '77'){
        console.log("m and shift pressed together");
        blockImageWidth = blockImageWidth-10;
        blockImageHeight = blockImageHeight-10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == 87){
        new_image('wall.jpg');
        console.log("w");
    }
    if(keyPressed == 71){
        new_image('ground.png');
        console.log("g");
    }
    if(keyPressed == 76){
        new_image('light_green.png');
        console.log("l");
    }
    if(keyPressed == 84){
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keyPressed == 82){
        new_image('roof.jpg');
        console.log("r");
    }
    if(keyPressed == 89){
        new_image('yellow_wall.png');
        console.log("y");
    }
    if(keyPressed == 68){
        new_image('dark_green.png');
        console.log("d");
    }
    if(keyPressed == 67){
        new_image('cloud.jpg');
        console.log("c");
    }
}

function up(){
    if (playerY >0){
        playerY= playerY- blockImageHeight;
        console.log("Block Image Height ="+ blockImageHeight);
        console.log("When Up Arrow is Pressed, Player X =" + playerX + ", Player Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down(){
    if (playerY <=450){
        playerY= playerY+ blockImageHeight;
        console.log("Block Image Height ="+ blockImageHeight);
        console.log("When Up Arrow is Pressed, Player X =" + playerX + ", Player Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left(){
    if (playerX >0){
        playerX= playerX- blockImageWidth;
        console.log("Block Image Width ="+ blockImageWidth);
        console.log("When Up Arrow is Pressed, Player X =" + playerX + ", Player Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right(){
    if (playerX <=650){
        playerX= playerX+ blockImageWidth;
        console.log("Block Image Width ="+ blockImageWidth);
        console.log("When Up Arrow is Pressed, Player X =" + playerX + ", Player Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}