var x,y,z;
var userInput = prompt("Enter miliseconds");
function start(){
    document.getElementById("red").style.backgroundColor="red";
    document.getElementById("red").style.backgroundSize = "5px 5px";
    document.getElementById("yellow").style.backgroundColor="";
    document.getElementById("green").style.backgroundColor="";
    x=setTimeout(yellow,userInput*1000);
}
function yellow(){
    document.getElementById("red").style.backgroundColor="";
    document.getElementById("yellow").style.backgroundColor="yellow";
    document.getElementById("yellow").style.backgroundSize = "5px 5px";
    document.getElementById("green").style.backgroundColor="";
    x=setTimeout(green,userInput*1000);
}
function green(){
    document.getElementById("red").style.backgroundColor="";
    document.getElementById("yellow").style.backgroundColor="";
    document.getElementById("green").style.backgroundColor="green";
    document.getElementById("green").style.backgroundSize = "5px 5px";
    x=setTimeout(start,userInput*1000);
}
function stop(){
    clearTimeout(x);
    clearTimeout(y);
    clearTimeout(z);
}
function reset(){
    document.getElementById("red").style.backgroundColor="";
    document.getElementById("yellow").style.backgroundColor="";
    document.getElementById("green").style.backgroundColor="";
}