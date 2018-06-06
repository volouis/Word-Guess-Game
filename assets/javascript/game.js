var win = document.getElementById("wins");
var left = document.getElementById("left");
var guess = document.getElementById("guess");
var rapper = document.getElementById("rapper");

var list = [
    "DRAKE",
    "JCOLE",
    "KENDRICKLAMAR",
    "MIGOS",
    "EMINEM",
    "KANYEWEST",
    "FUTURE",
    "CARDIB",
    "RICHBRIAN"
];

var w = 0;
var g = 12;
var wg = [];

var ran = Math.floor((Math.random() * list.length));
var word = list[ran];
var hellopic = "assets/images/" + word + ".jpg";
var hellomusic = "assets/music/" + word + ".mp3";

var rapName = [];
var wordLeft = [];

var x = document.getElementById("profile-pic");
var y = document.getElementById("musicplayer");
var z = document.getElementById("music");

x.setAttribute("src", hellopic);
z.setAttribute("src", hellomusic);

for(var i = 0; i < word.length; i++){
    rapName.push(word.charAt(i));
    wordLeft.push("_");
}

left.textContent = g
win.textContent = w;
rapper.textContent = wordLeft;

document.onkeydown = function(event) {

    var letter = event.key.toUpperCase();
    var word1 = word;

    var a = wg.indexOf(event.key);
    console.log(a);
    if(a === -1){
        wg.push(event.key);
        g--;

        if(word.includes(letter)){
            var times = occurence(rapName, letter);
            ind = rapName.indexOf(letter);
            wordLeft[ind] = letter;

            if(times > 1){
                for(var i = 1; i < times; i++){
                    ind = rapName.indexOf(letter, (ind + 1));
                    wordLeft[ind] = letter;
                }
            }

            //win condition
            if(!(wordLeft.includes("_"))){
                y.load();
                y.play();

                console.log(hellomusic);

                w++;
                g = 12;
                wg = [];

                ran = Math.floor((Math.random() * list.length));
                word = list[ran];
                hellopic = "assets/images/" + word + ".jpg";
                hellomusic = "assets/music/" + word1 + ".mp3";

                rapName = [];
                wordLeft = [];
                
                x.setAttribute("src", hellopic);
                z.setAttribute("src", hellomusic);

                for(var i = 0; i < word.length; i++){
                    rapName.push(word.charAt(i));
                    wordLeft.push("_");
                }
            }
        }
        // runs out of guess
        if(g === 0){
            g = 12;
            wg = [];

            ran = Math.floor((Math.random() * list.length));
            word = list[ran];
            hellopic = "assets/images/" + word + ".jpg";
            hellomusic = "assets/music/" + word1 + ".mp3";

            rapName = [];
            wordLeft = [];
            
            x.setAttribute("src", hellopic);
            z.setAttribute("src", hellomusic);

            for(var i = 0; i < word.length; i++){
                rapName.push(word.charAt(i));
                wordLeft.push("_");
            }
        }
    }

    win.textContent = w;
    rapper.textContent = wordLeft;
    left.textContent = g;
    guess.textContent = wg;
}

function occurence(name, l){
    var count = 0;
    for(var i = 0; i < name.length; i++){
        if(name[i] === l){
            count++;
        }
    }
    return count;
}
