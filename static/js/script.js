
//Challenge 1: Your Age in Days
function ageInDays() {
  let birthYear = +prompt("Whats your date of birth",'Enter year')
  if (birthYear !== isNaN) {
    let calcAge = (2018 - birthYear) * 365;
    let h4 = document.createElement('h4');
    let textAnswer = document.createTextNode(`You're ${calcAge} days old`);
    h4.appendChild(textAnswer);
    h4.setAttribute('id', 'ageInDays');
    return document.getElementById('flex-box-result').appendChild(h4)
  } else {
    alert(`Enter a number`);
    let birthYear = +prompt("Whats your date of birth",'Enter year');
  }
}

function reset(){
  document.getElementById('ageInDays').remove();
}

//Challenge 2: Cat Generator
function generateCat(){
  let cat =document.querySelector("div.flex-box-container-2");
  let img = document.createElement('img');
  img.setAttribute('src','https://thecatapi.com/api/images/get?format=src&type=gif&size=small')
  cat.appendChild(img);
}

//Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
  let botAlgorithm = Math.floor(Math.random() * 3)

  let rpsResult = document.querySelector("#rps-result");
  let h4you = document.createElement('h4');
  let h4Bot = document.createElement('h4');
  let h4Tie = document.createElement('h4');
  let options = ['rock', 'paper', 'scissors']; 
  let botChoice = options[botAlgorithm];

  rpsResult.appendChild(h4you);
  rpsResult.appendChild(h4Bot);
  rpsResult.appendChild(h4Tie);
  h4you.setAttribute('id', 'won')
  h4Bot.setAttribute('id', 'loss');

  if (botChoice === yourChoice.id) {
    let tie = document.createTextNode(`Bot chose ${botChoice}. You chose ${yourChoice.id}. You tie`);
    h4Tie.appendChild(tie);
  } else if (botChoice=='rock' && yourChoice.id=='scissors' ||
            botChoice=='paper' && yourChoice.id=='rock' ||
            botChoice=='scissors' && yourChoice.id=='paper') {
    let botWins = document.createTextNode(`Bot chose ${botChoice}. You chose ${yourChoice.id}. Bot won`);
    h4Bot.appendChild(botWins);
  } else {
    let youWin = document.createTextNode(`Bot chose ${botChoice}. You chose ${yourChoice.id}. You won`);
    h4you.appendChild(youWin);
  }

}

//Changing all button interface with colors
let allButtons = document.querySelectorAll('button');
let eachButton = [];
for (let i=0; i < allButtons.length; i++){
  eachButton.push(allButtons[i].classList[1]);
}



function buttonColorChange(tags) {
  if (tags.value == 'red')
    buttonsRed()
  else if (tags.value == 'green') 
    buttonsGreen();
  else if (tags.value == 'reset')
    buttonsColorReset();
  else if (tags.value == 'random')
    randomColors();
}

function buttonsRed() {
  allButtons.forEach((tags, i) => {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add('btn-danger');
  })
}

function buttonsGreen() {
  allButtons.forEach((tags, i) => {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add('btn-success');
  })
}

function buttonsColorReset() {
  // console.log(eachButton[0])
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(eachButton[i]);
    // console.log(allButtons[i].classList)
    // console.log(eachButton[i])
  }
}

function randomColors() {
  let arrayOfColor = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];
  allButtons.forEach((tags, i) => {
    let random = Math.floor(Math.random() * 4)
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(arrayOfColor[random]);
  })
}



