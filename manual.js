
    function stop(){
        document.getElementById("red").style.backgroundColor="red";
        document.getElementById("red").style.backgroundSize = "5px 5px";
        document.getElementById("yellow").style.backgroundColor="";
        document.getElementById("green").style.backgroundColor="";
        document.getElementById("stop").disabled = false;
        document.getElementById("readyToGo").disabled = false;
        document.getElementById("go").disabled = true;

    }
    function readyToGo(){
        document.getElementById("yellow").style.backgroundColor="yellow";
        document.getElementById("yellow").style.backgroundSize = "5px 5px";
        document.getElementById("red").style.backgroundColor="";
        document.getElementById("green").style.backgroundColor="";
        document.getElementById("stop").disabled = true;
        document.getElementById("readyToGo").disabled = false;
        document.getElementById("go").disabled = false;

    }
    function go(){
        document.getElementById("green").style.backgroundColor="green";
        document.getElementById("yellow").style.backgroundColor="";
        document.getElementById("red").style.backgroundColor="";
        document.getElementById("stop").disabled = false ;
        document.getElementById("readyToGo").disabled = true;
        document.getElementById("go").disabled = false;
    }
