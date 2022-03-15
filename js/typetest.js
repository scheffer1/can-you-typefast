import words from './words.js';

let inputTemp = document.getElementById('input');
let wordElement = document.getElementById('word');
let seconds = document.getElementById('sec');
let prog = document.getElementById('prog');
let wpm = document.getElementById('wpm');
let prec = document.getElementById('prec');
var correct = false;
var hit = 1;
var letterTyped = 1;
var wordType = 1;

    getRandomWord();

let word = document.getElementById('word').innerText;

function getRandomWord(){
    wordElement.innerText = words[Math.floor(Math.random() * 1952)]
}

function isCorrect(condition){
    if(condition =="yes"){
        document.getElementById('word').classList.add('green');
        document.getElementById('word').classList.remove('red');
    }else{
        document.getElementById('word').classList.add('red');
        document.getElementById('word').classList.remove('green');
    }
}

var sec = 30;

window.startTimer = startTimer
window.checkWord = checkWord
 function startTimer(){
    document.getElementById('img').classList.add('hidden')
    document.getElementById('button').classList.add('hidden');
    document.getElementById('end').classList.remove('hidden');
    document.getElementById('info').classList.remove('hidden');
    var x =  setInterval(function(){
        seconds.textContent = sec
        prog.value += 3.23;
        sec--;
        if(sec < 0){
            clearInterval(x);
        }
    },1000)
}

function calculateInfo(){
    prec.textContent = Math.round(hit*100/letterTyped) +"%"
}

function checkWord(){
    if(inputTemp.value != ''){
        console.log(letterTyped)
        letterTyped++;
    }
    
    var input = inputTemp.value;
    var sliced = word.slice(0,input.length);

    if(input == sliced.toLowerCase()&& inputTemp.value != ''){
        correct = true;
        hit++;
        isCorrect('yes');
    }else{
        correct = false;
        isCorrect('no');
    }
    if(input.length == word.length && correct){
        inputTemp.value = '';
        getRandomWord();
        word = document.getElementById('word').innerText;
        document.getElementById('word').classList.remove('green')
    }
    calculateInfo();
}