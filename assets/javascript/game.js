var win = document.getElementById("win");
var lost = document.getElementById("lost");
var left = document.getElementById("left");
var guess = document.getElementById("guess");

w = 0;
l = 0;
gl = 10;
list = [];

var text = "";
var rand = "abcdefghijklmnopqrstuvwxyz";

text = rand.charAt(Math.floor(Math.random() * rand.length));

document.onkeydown = function(event){
    if(event.key.length === 1 && event.key !== " "){
        if(event.key === text){
            w =  w + 1;
            text = rand.charAt(Math.floor(Math.random() * rand.length));
            gl = 10;
            list = [];
        }else if(event.key !== text){
            if(gl > 1){
                gl = gl - 1;
                list.push(event.key);
            }else{
                l = l + 1;
                gl = 10;
                list = [];
                text = rand.charAt(Math.floor(Math.random() * rand.length));
            }
        }
    }

    win.textContent = w;
    lost.textContent = l;
    left.textContent = gl;
    guess.textContent = list;
}
