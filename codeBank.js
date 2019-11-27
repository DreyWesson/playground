

const pTags = document.querySelectorAll('p');
pTags.forEach((pTag) => {
  if (pTag.innerText.includes('error')) {
    pTag.classList.add('error')
  } else if(pTag.innerText.includes('success')) {
    pTag.classList.add('success')
  }
})


//get avg score
function name(params) {
  let avgScore = 0;
  params.forEach(param => avgScore += param)
  return (avgScore / params.length);
}
const avg = name([80,100,200]);
// console.log(avg);


//convert string to array
function convertStringToArray(params) {
  return params.split('')
}
const exampleString = 'hello';
const stringAsArray = convertStringToArray(exampleString);
// console.log(stringAsArray)


//looking for vowel match using forLoop
function getVowelCount(str) {
  let vowelsCount = 0;
  let vowelList ='aeiouAEIOU';
  for(let i = 0; i < str.length; i++) {
    if (vowelList.indexOf(str[i]) !== -1) {
      vowelsCount +=1
    }
  }
  return vowelsCount
}
// console.log(getVowelCount('hello world'))


//looking for vowel match using Regex
function vc(params) {
  let vowelsCount = params.match(/[aeiou]/gi);
  return vowelsCount === null ? 0 : vowelsCount.length;
}
console.log(vc('hello world'));


function doesArrayContainZero(params) {
  return params.includes(0) ? true : false;
}
// console.log(doesArrayContainZero([1, 2, 3]))
// console.log(doesArrayContainZero([1, 0, 3]))

function isInteger(params) {
  return Number.isInteger(params)
}
// console.log(isInteger(1));
// console.log(isInteger(1.5));


//strips-off '#' from a search term
function removeHashtags(params) {
  return params.startsWith('#')? params.slice(1) : params;
}
console.log(removeHashtags('#rideShare'))

