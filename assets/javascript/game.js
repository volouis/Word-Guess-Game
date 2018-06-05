var win = document.getElementById("wins");
var left = document.getElementById("left");
var guess = document.getElementById("guess");
var rapper = document.getElementById("rapper");

var list = [
    "DRAKE",
    "LILWAYNE",
    "JAYZ",
    "JCOLE",
    "KENDRICKLAMAR",
    "MIGOS",
    "EMINEM",
    "KANYEWEST",
    "50CENT",
    "FUTURE",
    "CARDIB",
    "NWA",
    "RICHBRIAN"
];





var w = 0;
var g = 12;
var wg = [];

var ran = Math.floor((Math.random() * list.length));
var word = list[ran];
var hellopic = "assets/images/" + word + ".jpg";
console.log(hellopic)
var rapName = [];
var wordLeft = [];

var x = document.createElement("IMG");
x.setAttribute("src", hellopic);
document.body.appendChild(x);

for(var i = 0; i < word.length; i++){
    rapName.push(word.charAt(i));
    wordLeft.push("_");
}

left.textContent = g
win.textContent = w;
rapper.textContent = wordLeft;

document.onkeydown = function(event) {

    var letter = event.key.toUpperCase();

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
                w++;
                g = 12;
                wg = [];

                ran = Math.floor((Math.random() * list.length));
                word = list[ran];

                rapName = [];
                wordLeft = [];

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

            rapName = [];
            wordLeft = [];

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
