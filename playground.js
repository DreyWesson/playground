

async function gitHub (id) {
  try {const res = fetch(`https://api.twitter.com/labs/1/tweets?ids=1067094924124872705&format=detailed`);
    const response = fetch(`https://api.github.com/users/${id}`);
    
    // Using promise.all for concurrency sake 
    // since the two fetch are not dependent on each other
    const encaps = await Promise.all([res, response])

    // Using destructuring to get the res and response from the encaps array
    const [resDestructure, responseDestructure] = encaps;
    const data = await resDestructure.json();
    const data2 = await responseDestructure.json();
    console.log(data);
    // console.log(data2);
    data.map((element, index) => {
      if (element.forks >= 50) 
        console.log(`${index}. ${element.full_name}`)
    });
  } catch (error) {
    console.log(`An error occurred ${error}`)
  }
}
// gitHub('DreyWesson');
// gitHub('getify');

function* ly(param) {
  yield console.log(`${param}`);
  yield console.log(`hello`);
  yield console.log(`hello again`)
  console.log(`hello again again`)
}
var lily = ly('Drey')
lily.next()
lily.next()
lily.next()
lily.next()