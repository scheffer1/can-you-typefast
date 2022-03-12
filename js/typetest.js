import words from './words.js';

let inputTemp = document.getElementById('input');
let wordElement = document.getElementById('word')
var correct = false;

    getRandomWord();

let word = document.getElementById('word').innerText;

function getRandomWord(){
    wordElement.innerText = words[Math.floor(Math.random() * 1952)]
}

function changeColor(color){
    if(color =="red"){
        document.getElementById('word').classList.add(color);
        document.getElementById('word').classList.remove('green');
    }else{
        document.getElementById('word').classList.add(color);
        document.getElementById('word').classList.remove('red');
    }
    
}

window.checkword = checkword
function checkword(){
    var input = inputTemp.value;
    var sliced = word.slice(0,input.length);

    if(input == sliced.toLowerCase()){
        correct = true;
        changeColor('green');
    }else{
        correct = false;
        changeColor('red');
    }

    if(input.length == word.length && correct){
        inputTemp.value = '';
        getRandomWord();
        word = document.getElementById('word').innerText;
        document.getElementById('word').classList.remove('green')
    }
}

