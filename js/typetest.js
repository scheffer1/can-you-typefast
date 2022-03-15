import words from './words.js';

let inputTemp = document.getElementById('input');
let wordElement = document.getElementById('word');
let seconds = document.getElementById('sec');
let prog = document.getElementById('prog');
let wpm = document.getElementById('wpm');
let prec = document.getElementById('prec');
var correct = false;
var hit = 0;
var letterTyped = 0;
var wordTyped = 1;

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
            endTimer();
            clearInterval(x);
        }
    },1000)
}

function endTimer(){
    var decimal = wordTyped/60
    wpm.textContent = `WPM = ${Math.round(decimal * 100) / 100}`;
    document.getElementById('end').classList.add('hidden');
    document.getElementById('endcon').classList.remove('hidden');
}

function calculateInfo(){
    prec.textContent = "Precision "+Math.round(hit*100/letterTyped) +"%"
}

function checkWord(){
    if(inputTemp.value != ''){
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
        wordTyped++;
        console.log(wordTyped)
        inputTemp.value = '';
        getRandomWord();
        word = document.getElementById('word').innerText;
        document.getElementById('word').classList.remove('green')
    }
    calculateInfo();
}