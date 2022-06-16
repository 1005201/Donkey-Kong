var position = 300;
var score = 0;
var kong = document.getElementById("kong")
var banana = document.getElementById("banana")

document.addEventListener('keypress', logKey);


function logKey(event) {
    var x = event.which || event.keyCode;
    if(x == 97 && position > 0) {
        stepsLeft();
    }

    if(x == 100 && position <= 900){
        stepsRight();
    }

    var kongBox = getRectangle(kong);
    console.log(kongBox);
    var bananaBox = getRectangle(banana);
    console.log(bananaBox);

    if(kongBox.x + kongBox.width >= bananaBox.x && kongBox.x <= bananaBox.x + bananaBox.width){
       console.log("yummy bananana");
       moveBanana() 
       score ++;
       console.log(score);
       document.getElementById("textbox").innerHTML = score;
    }
    if(score == 10){
        alert("Game over!"); 
    }      
}

function stepsLeft(){
    console.log("left")
        position -= 10;
        kong.style.left = position + "px";
}

function stepsRight(){
    console.log("right")
    position += 10;
    kong.style.left = position + "px";
}

function moveBanana(){
    var bposition = Math.floor((Math.random() * 950) + 1);
    console.log(bposition)
    banana.style.left = bposition + "px";
}

var score = gameover + 1;

function getRectangle(div) {
    var rect = div.getBoundingClientRect();
    x = rect.left;
    y = rect.top;
    w = rect.width;
    h = rect.height;
    return rect;
}


    
