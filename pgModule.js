
function getScorePercentage(currentMarks, totalMarks) {
    if (typeof currentMarks == 'number' && typeof totalMarks == 'number') {
      
      let grade = (currentMarks/totalMarks)*100;
  
      if (grade >= 80)
        console.log(`You scored ${grade}. Excellent score!!!`)
      else if (grade >= 60 && grade < 80)
        console.log(`You scored ${grade}. Good score!!!`)
      else if (grade >= 50 && grade < 60)
        console.log(`You scored ${grade}. Average score`)
      else if (grade >= 40 && grade < 50)
        console.log(`You scored ${grade}. Spaghetti brain!!!`)
      else if (grade < 40)
        console.log(`You need a rethink`)
    } 
    
    else {
      console.log('Input number')
    }
  }
  getScorePercentage(95, 100);


// ====================Dice Roll=======================
let roundup = () => {
  let diceRolling =  Math.ceil( Math.random() * 6);
  let secRolling = Math.ceil( Math.random() * 6);
    console.log(diceRolling, secRolling)
} 
roundup()