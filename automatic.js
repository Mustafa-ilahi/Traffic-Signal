var userInput = prompt("Enter miliseconds")
function start()
    {
        function red()
        {
            document.getElementById('red').style.backgroundColor='red';
            document.getElementById("red").style.backgroundSize = "5px 5px";
            setTimeout(function(){document.getElementById('red').style.backgroundColor='white' }, 1000);
            setTimeout(function(){document.getElementById('red').style.backgroundColor='white' }, 2000);
            setTimeout(function(){document.getElementById('red').style.backgroundColor='white' }, 3000);
            // setTimeout(function(){document.getElementById('red').style.backgroundColor='white' }, 3000);
        }
        red1 = setInterval(red ,4000)
        function yellow(){
            document.getElementById('yellow').style.backgroundColor='white';
            document.getElementById("red").style.backgroundSize = "5px 5px";
            setTimeout(function(){document.getElementById('yellow').style.backgroundColor='yellow' }, 1000);
            setTimeout(function(){document.getElementById('yellow').style.backgroundColor='white' }, 2000);
            setTimeout(function(){document.getElementById('yellow').style.backgroundColor='white' }, 3000);
        
        }
        yellow1 = setInterval(yellow ,4000)
        function green(){
            document.getElementById('green').style.backgroundColor='white';
            document.getElementById("red").style.backgroundSize = "5px 5px";
            setTimeout(function(){document.getElementById('green').style.backgroundColor='white' }, 1000);
            setTimeout(function(){document.getElementById('green').style.backgroundColor='green' }, 2000);
            setTimeout(function(){document.getElementById('green').style.backgroundColor='white' }, 3000);
        }
        green1 = setInterval(green ,4000)
    }
    function stop(){
        clearInterval(red1);
        clearInterval(yellow1);
        clearInterval(green1);
    }
    function reset(){
        document.getElementById('red').style.backgroundColor = '';
        document.getElementById('yellow').style.backgroundColor = '';
        document.getElementById('green').style.backgroundColor = '';
    }
