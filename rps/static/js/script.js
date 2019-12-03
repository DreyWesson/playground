
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
ageInDays();

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
  let botChoice = Math.ceil(Math.random() * 6)
  console.log(botChoice)
  let rpsResult = document.querySelector("#rps-result");
  let h3 = document.createElement('h3');
  let h3Bot = document.createElement('h3');

  rpsResult.appendChild(h3);
  rpsResult.appendChild(h3Bot)
  h3.setAttribute('id', 'won');
  h3Bot.setAttribute('id', 'loss')

  function dry(select,won,lost,yourChoice) {
    select = document.getElementById(select);
    won = document.createTextNode(`Bot chose ${select.id}. You chose ${yourChoice.id}. You won`);
    lost = document.createTextNode(`Bot chose ${select.id}. You chose ${yourChoice.id}. You lost`);
    (select.id == yourChoice.id)? h3.appendChild(won) : h3Bot.appendChild(lost);
  }

//  if (rock && rock || paper && paper||scissors && scissors) {
//   console.log(tie)
// } else if (rock && scissors || paper && rock || scissors && paper){
//    console.log(player1 wins)
// }else {
  // console.log(player2 wins)
// }

  if (botChoice === 1 || botChoice === 4) 
    dry('rock','won','lost',yourChoice);
  else if (botChoice === 2 || botChoice === 5) 
    dry('paper','won','lost',yourChoice);
  else if (botChoice === 3 || botChoice === 6)
    dry('scissors','won','lost',yourChoice);
}





