
//Challenge 1: Your Age in Days
document.querySelector('#age-calc').addEventListener('click', ()=> {
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
})

document.querySelector('#age-reset').addEventListener('click', ()=>{
  document.getElementById('ageInDays').remove();
})

//Challenge 2: Cat Generator
  // document.querySelector('#get-cat').addEventListener('click', ()=>{
  //   let cat =document.querySelector("div.flex-box-container-2");
  //   let img = document.createElement('img');
  //   img.setAttribute('src','https://source.unsplash.com/300x300/?love')
  //   cat.appendChild(img);
  // });

  const getForm = document.forms['add-mood'];
  getForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    let moodImages =document.querySelector("div.flex-box-container-2");
    let img = document.createElement('img');
    const value = getForm.querySelector('input[type="text"]').value;
    console.log(value);
    img.setAttribute('src',`https://source.unsplash.com/300x300/?${value}`);
    moodImages.appendChild(img);

  })

//Challenge 3: Rock, Paper, Scissors
// document.querySelector('.rps-game').addEventListener('click', rpsGame(this))
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
  h4Tie.setAttribute('id', 'tie');

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


//Blackjack
let blackjackGame = {
  you: { 'scoreSpan': '#your-blackjack-score', 'div': '#your-box', 'score': 0},
  bot: { 'scoreSpan': '#bot-blackjack-score', 'div': '#bot-box', 'score': 0},
  'cards': ['https://previews.dropbox.com/p/thumb/AAp41lWZ_L9LF8XTkkzF183dipaBCblUKDRsAnsYChyi_TerSvWIrUq086865q3ZmmfmjcOQGl3JfburOE56T2STmNch1cifgrketYgF5hmk05IwVxkahs1XEA-DkAH_sr3D4o6onHqiXfW84MhSsYdIWmtY1WotEHY1HKWwst-XRHd6-gzQ6GOKIzM-SJqdZiRrb9TtqKoH89rRVag70r72M97aIezhm1mCR00HAP5t0ecE9TOJAwfLJtADG6Me4HUoKiJq-ZscgVzX0r0WuJCsrBapglWuoqAseo9hOCoNmAwMX6_jwd2F6meXge3NRbdRV1Tpszc3xOcibwAR6APCL5sZzYXRL3p58IiZCY4BDQ/p.png?fv_content=true&size_mode=5',
  'https://previews.dropbox.com/p/thumb/AArCpBIjF06OhlLdahNev18lLpAUXh2oa7FZp9Rq35UAZNvLOMZ5bufA_96EQXMBLFy6gWOfHPX_8g1FGYRDltjxYn6gdWffL5DqOpTixpgK31RGzG-D11StnL47Baupw3I1IwtzI-nsGWxof-90TS0Zi4l-tMrsYHjq2G5w6ipQPiD7RUeNHZom3viE8NqjEH17PTjIr1orSlJeklmePqSy-HDPBvaGQnTTssqB2rAI45Xep43lPiIZp2JmZoGGxcSY1VJuPXSuhUjRbE_dcw2vO9VErfeWl8rnsCrafegS0HL90vb1kwy-ElyBRwS-uRHdxhwDe4qmOhN6J_CfzdKe3UL81I1IKp-bma7m0h6iZA/p.png?fv_content=true&size_mode=5',
  'https://previews.dropbox.com/p/thumb/AAqoLYAI9AjAxb7CudUVnzuRGAqcG-OF0tt1uKst7DSRQiVj-5ymHi7-J6WaV-hhBzYWwq2ncvdwIiPdicGlJIYKGgP0o_cD-sSTFpFpR1IwDQhiiaedFXRxMTiWmoRxWhNz49nqG_amPsbfZ_Lu-QUkO_zTLDtqnKq_2s8DSLoOE-Gx75gjTDicORkQzI5xoZF_eHFv0rLfE6KvLHOY2A2XSewLYFNn6gBf6qsTb2OTjVDyyqnku6MV9Tkpuam4uC06WAHQkIQWOpGBc2re7gWMlntFS0HlOwBXpWYd4rrMy7Yea9HY5gDJBzPZk-H4JeoiwUJFbHd34PlfEFI5VjRS-YRuSiJ2RU5rKH1zisV_gQ/p.png?fv_content=true&size_mode=5', 
  'https://previews.dropbox.com/p/thumb/AAqlgLg6EHurxuLqKs6c06NSAhuQNx3Yrnd6aCE3VWpz5cfndbg5A8j14Vc3ga-hN9jXs67dbzsz1uFqgkMIVabHHfIItsVYCuM1CXBw-ZVHg2Q-PBOcikwVAM7Y4xwiIqw27CqZQKTj7YyVb8V32J_DATcUU1Xe8KHGbnKJh16kh-Ob7aKCMxb9DKNX7JwEDEqE14IqHYVno8DO22FMdNdhk1LTJctsLBJEGrXjwO3-XW2ttPpdcyovBbegO82fxEdyzocpdNNVmloUs0Ab-UKWwIvMU7UdFWfFEwW3B-OGMQOXrHkeO2aD7xGA1eiVlqcJr0C0gK9XYJthhhNgFOGHAbTL1iP0oE5fUQ-VutFkzg/p.png?size=2048x1536&size_mode=3',
  'https://previews.dropbox.com/p/thumb/AApdazkisE2uTaVDeKLttbaRzCEQMtHEwOou4XaPqV0pabvW75v-7feH-4gBTaE8U0qX0AywdnT6N4EedtdpFolqvRSJ9G53LA_ZFoxhxc6nz8lkzmE3QVAnjaeSrajbJ6XqIx3FVn7noer8ykeEXUa2YnWgi8Y0SfmRPZ6uhZD5FFH_N8waGZ_dqH2_hDfJtClb6FjRZ7YILWoqYiE8ityu4Y-sdzhLWDXsinUZPw513AwQ5r_j6uuJhXiv0GwpFsj33_YTAicikHLN2AT_QqWxH6-qUro1BBteqfevK0mWnCXm7CRktEfUiMo0QoY4siy3TihtgAeIG3GyCY1BstmLwty5jSe0L7PXKZDn4lE9Cg/p.png?size=2048x1536&size_mode=3',
  'https://previews.dropbox.com/p/thumb/AArTB8UzhHota7y6zouWlUdxCxnueJLcAqjzSt_cADEXFfKca2kSWE-sms7oVrGxHVKorTwyaL3wePysMSVaZ6858vV0ld3xL2OD6mr3cu0Ev2mDzV5lMwfLCM1l12j7cbWE80NwlmGQXhHZglI5ugiW928a6M-XyqX7krnrk7Ded1CBYmgZNyExxK2ht0SJAn3NTOkyimgS2hAGLUd8McRlrjn4pEX_kOpO4U86KXv-TqGj_rFYc1BYkm6lBk8VFTJmLhcuBrul8J_YcQHhaC5kivd8ZANWyVVeeWCeZKu7ngsGgYWLRrjBUQZs7keE6mC9gTTxAEJ_NG5szFwg17-u2AbmK8RlFiQ1jeTHrdYONg/p.png?fv_content=true&size_mode=5', 
  'https://previews.dropbox.com/p/thumb/AApbITVlqwtpEkM86snEe6A1Ey7PwunCt8ts0spTR3JFot2WMmzv-b8dzRELD2EyDu_JOjMDxf38nbhkNR1KR9edbJ65CjPnPuHu_4fy9i4XZZmTHaGb2yOSsY3fVkJNNinxNA15j-wSFVJO9-3kqdhJ3eTggIW74iWvYot-9GRVNMyLrgH_jbP69XXaFSIxPDf3gWhT9HANMIe8Z_OP6eASdd02Lg7UhXFqO6hj1mCMkpbiNRGlru5QiSNAvrk4TE3LzhDpxyiD7srhaMwt_KqK2G85ri0jSMwYtIAIuMdv6dNzI1bokHdPM_WNmLHcr5oksvQru_TrOb_VmwtKDn4ezrJ7WIbOW5cGNXeTKNI6MQ/p.png?fv_content=true&size_mode=5',
  'https://previews.dropbox.com/p/thumb/AAqONcCpoovbEBFHs6t41OZ6yNJfgfGvssyyDT0NRdIZNhJbvpDTI8RLFVlkuqFnsaFBsoavGIOgb-i9xDJwv1XcwmMzq4SUdSm2VletVEioMO0GfLwHOmZ6rU87VdOZdLosy6Tf5X5fVlC4jkWpv3FQsEYtTg6M6fAsUF12fnWSWJ3Kf0wgrLc2gdSQEo1qxsG6KjK6sG4moamVN98KBh6LHJiFt2MuDbOvVgqyEsz4BpnO4LjyccUKTIex3WS15SfkYNJGVn-fJR70D8cbc4YTT8MdPOIluvalHRS6wOiX4HGntyhZKV6ZLOYigz3MtIZzuzDHmfBGYjA1hNIDYfFwGAM3TXh-Mxs7bWjPmjwVag/p.png?fv_content=true&size_mode=5', 
  'https://previews.dropbox.com/p/thumb/AApv6dxnDCPgaqGs89mGAoR6ulK2r2_1hJbtjW7Xd9a4Qd03DIGgSkFDE2PvLBE2WT03_S4UXAQ71EUxMXkQQylTGBFKKuqwayiyuuJJgmO-zxn2MJAGkXmGeq0rtIYVP7dm9VcQZIkGfFnBLLEKrgDld3yo-4FB4ccjfvTfYZtjkUjXsde3MVp5-KRCnZa1sfGB6fRTJR7gD_A8qHvD4SZSV9Vsj-d6ceGZZQ68q-r_lIoxm4453_wtqFKJXSwOwfojTpWCiZL55s4QLa8ur3cW7AM0iL7CjfzPvJHo4tRKHYVXrBsRnMBNoDsPFBf5LNggmNBUgI2U65jcuLtIXWhR2DG0IdeXYF4BUcyNqYcPng/p.png?size=2048x1536&size_mode=3', 
  'https://previews.dropbox.com/p/thumb/AAozUJfRuh7IYklkKunBUjXQ3ZJqf4OBPtKFbagoIVABQefwIZ9MBBp9AqZ_nP6dY5QnvpnDzpmBtyFbQMV5IWWoW90sfpqQBHsdcEwx8lOPPxH86OHuJEk8kLp1mSqNs8AqVn6ecSSrwQua2GHKjQDEk5IvULoe4xX1UAifwL6369Zpr3FGIbrrK5TQ26TnEV_j8UV9pQ6ldYHVHkIXOdf5bVM306snzimCjB6rQAgDxVQ5pbL8FW76MAol2QW5ZPnclSJ_gZq_IZEn50UOjAdQw8sqaOq8ww45BuDNqWfAvO-LwBUhvrcsDgJm3oz7bHq_PBS_9DCVwIK5YyqynBeFygobvEttDn9aZWMilL1t5Q/p.png?size=2048x1536&size_mode=3',
  'https://previews.dropbox.com/p/thumb/AAq0edRVzvo2ytF2idm1frZAYRyRNmtH3XWUNxLVxLBubUOhNZ2rxB7Xayu9ZOfIWxnZ7s6iCQT1vZWnthEPS03Nj3aqh8Y7bx9s7X_oaUKKM7p76qcASe6ciWfz_eiZITpmIMv1gckHgG6xQp4U2VYdWMPYlg5T8_pJnbbX7fLP1kxqEjefmHBTPb3YRQ5DMVmqcOAQVK3ikvfvn6OdqCk8Y0rM1CfFNb-JzB7cHzP8SPjNUDGWzfWbDQh8HINGva8o884ml3U2LKWKxEAkxHGLaMmAL2Ooe8ZpST6vyZZMDVaYJCHQUJA2xvhZnvqSiKHdlAmERspGKaq1nmdYsfdTnZ-gbC0LAT6gcM7zXCH_WQ/p.png?size=2048x1536&size_mode=3',
  'https://previews.dropbox.com/p/thumb/AAqQyf2vveZiJy8gk2FCUW98QnZr4BlklVQTcL6F_L4Gh9sCn26s4md6vXJh-a7a9nJlUM6N-8EdYSJeTzmGGQfR61RzApKdeQfePgDLzXYnXzDayDeh2DxEmxb1gbkY3DUHomW-a-ESdH9aLytE5OhG1RosmhaoE6RGQj3031vla-5N9kdni4y04nxxSsyZF0oXNWUUCzEnmOX7xu_eIZKV-oVU10QdQWYE2he14p_B2nNuXBucxgwg3cXhnM1kfRow0nRuMK3OCtTYdgciFVQahk__6VjUCrPnYuWK4p7rT9FRCrFDNostDlo9nuAQKGSeDkSyNFzON_RK7fcTun8-9sm2vCuO-_BqCKVZaFljthjzz4QPFNVUEL2jP7uKLghwW-fEDAxzwHnCjuiiEEkbbDqulfzSPY0dD1sZ7ZNjDA/p.png?size=2048x1536&size_mode=3',
  'https://previews.dropbox.com/p/thumb/AAqNN9rk30AFmRimdExYOg2G1GKefzzSlT4jZUI3icQyhxkB8K30XJALV68kxtOU7oB3LRSEBpu6Bprwu53rLtprmjLsPhjvMRX-9GnZ6W1Dwys7wIAYiW5r2GBpfDFno3Pw0wHReAS-z6r6QQanyK9SCxZpf3KrhkESxb9TlE84ahsVZS47BAp0iPTcAIZMwfRY-RrMlDzpCacvODAVmht_AaQ1iLaq9C5hG1klYfitOHcdgGtslQTdwty-YXr-vWHIZ9lM7xDSCHxs5G5WKM5IewSS-rviB5Oybd3rGh8ibKFXXeMPTWzxOTuEDr_zREK-51UwO54dJCDW6KXrV5B6CQXbDALfUCkkVUItvjqKkA/p.png?size=2048x1536&size_mode=3'
  ],
  'cardsMap': {
    'https://previews.dropbox.com/p/thumb/AAp41lWZ_L9LF8XTkkzF183dipaBCblUKDRsAnsYChyi_TerSvWIrUq086865q3ZmmfmjcOQGl3JfburOE56T2STmNch1cifgrketYgF5hmk05IwVxkahs1XEA-DkAH_sr3D4o6onHqiXfW84MhSsYdIWmtY1WotEHY1HKWwst-XRHd6-gzQ6GOKIzM-SJqdZiRrb9TtqKoH89rRVag70r72M97aIezhm1mCR00HAP5t0ecE9TOJAwfLJtADG6Me4HUoKiJq-ZscgVzX0r0WuJCsrBapglWuoqAseo9hOCoNmAwMX6_jwd2F6meXge3NRbdRV1Tpszc3xOcibwAR6APCL5sZzYXRL3p58IiZCY4BDQ/p.png?fv_content=true&size_mode=5': 2,
    'https://previews.dropbox.com/p/thumb/AArCpBIjF06OhlLdahNev18lLpAUXh2oa7FZp9Rq35UAZNvLOMZ5bufA_96EQXMBLFy6gWOfHPX_8g1FGYRDltjxYn6gdWffL5DqOpTixpgK31RGzG-D11StnL47Baupw3I1IwtzI-nsGWxof-90TS0Zi4l-tMrsYHjq2G5w6ipQPiD7RUeNHZom3viE8NqjEH17PTjIr1orSlJeklmePqSy-HDPBvaGQnTTssqB2rAI45Xep43lPiIZp2JmZoGGxcSY1VJuPXSuhUjRbE_dcw2vO9VErfeWl8rnsCrafegS0HL90vb1kwy-ElyBRwS-uRHdxhwDe4qmOhN6J_CfzdKe3UL81I1IKp-bma7m0h6iZA/p.png?fv_content=true&size_mode=5': 3,
    'https://previews.dropbox.com/p/thumb/AAqoLYAI9AjAxb7CudUVnzuRGAqcG-OF0tt1uKst7DSRQiVj-5ymHi7-J6WaV-hhBzYWwq2ncvdwIiPdicGlJIYKGgP0o_cD-sSTFpFpR1IwDQhiiaedFXRxMTiWmoRxWhNz49nqG_amPsbfZ_Lu-QUkO_zTLDtqnKq_2s8DSLoOE-Gx75gjTDicORkQzI5xoZF_eHFv0rLfE6KvLHOY2A2XSewLYFNn6gBf6qsTb2OTjVDyyqnku6MV9Tkpuam4uC06WAHQkIQWOpGBc2re7gWMlntFS0HlOwBXpWYd4rrMy7Yea9HY5gDJBzPZk-H4JeoiwUJFbHd34PlfEFI5VjRS-YRuSiJ2RU5rKH1zisV_gQ/p.png?fv_content=true&size_mode=5': 4, 
    'https://previews.dropbox.com/p/thumb/AAqlgLg6EHurxuLqKs6c06NSAhuQNx3Yrnd6aCE3VWpz5cfndbg5A8j14Vc3ga-hN9jXs67dbzsz1uFqgkMIVabHHfIItsVYCuM1CXBw-ZVHg2Q-PBOcikwVAM7Y4xwiIqw27CqZQKTj7YyVb8V32J_DATcUU1Xe8KHGbnKJh16kh-Ob7aKCMxb9DKNX7JwEDEqE14IqHYVno8DO22FMdNdhk1LTJctsLBJEGrXjwO3-XW2ttPpdcyovBbegO82fxEdyzocpdNNVmloUs0Ab-UKWwIvMU7UdFWfFEwW3B-OGMQOXrHkeO2aD7xGA1eiVlqcJr0C0gK9XYJthhhNgFOGHAbTL1iP0oE5fUQ-VutFkzg/p.png?size=2048x1536&size_mode=3': 5,
    'https://previews.dropbox.com/p/thumb/AApdazkisE2uTaVDeKLttbaRzCEQMtHEwOou4XaPqV0pabvW75v-7feH-4gBTaE8U0qX0AywdnT6N4EedtdpFolqvRSJ9G53LA_ZFoxhxc6nz8lkzmE3QVAnjaeSrajbJ6XqIx3FVn7noer8ykeEXUa2YnWgi8Y0SfmRPZ6uhZD5FFH_N8waGZ_dqH2_hDfJtClb6FjRZ7YILWoqYiE8ityu4Y-sdzhLWDXsinUZPw513AwQ5r_j6uuJhXiv0GwpFsj33_YTAicikHLN2AT_QqWxH6-qUro1BBteqfevK0mWnCXm7CRktEfUiMo0QoY4siy3TihtgAeIG3GyCY1BstmLwty5jSe0L7PXKZDn4lE9Cg/p.png?size=2048x1536&size_mode=3': 6,
    'https://previews.dropbox.com/p/thumb/AArTB8UzhHota7y6zouWlUdxCxnueJLcAqjzSt_cADEXFfKca2kSWE-sms7oVrGxHVKorTwyaL3wePysMSVaZ6858vV0ld3xL2OD6mr3cu0Ev2mDzV5lMwfLCM1l12j7cbWE80NwlmGQXhHZglI5ugiW928a6M-XyqX7krnrk7Ded1CBYmgZNyExxK2ht0SJAn3NTOkyimgS2hAGLUd8McRlrjn4pEX_kOpO4U86KXv-TqGj_rFYc1BYkm6lBk8VFTJmLhcuBrul8J_YcQHhaC5kivd8ZANWyVVeeWCeZKu7ngsGgYWLRrjBUQZs7keE6mC9gTTxAEJ_NG5szFwg17-u2AbmK8RlFiQ1jeTHrdYONg/p.png?fv_content=true&size_mode=5': 7,
    'https://previews.dropbox.com/p/thumb/AApbITVlqwtpEkM86snEe6A1Ey7PwunCt8ts0spTR3JFot2WMmzv-b8dzRELD2EyDu_JOjMDxf38nbhkNR1KR9edbJ65CjPnPuHu_4fy9i4XZZmTHaGb2yOSsY3fVkJNNinxNA15j-wSFVJO9-3kqdhJ3eTggIW74iWvYot-9GRVNMyLrgH_jbP69XXaFSIxPDf3gWhT9HANMIe8Z_OP6eASdd02Lg7UhXFqO6hj1mCMkpbiNRGlru5QiSNAvrk4TE3LzhDpxyiD7srhaMwt_KqK2G85ri0jSMwYtIAIuMdv6dNzI1bokHdPM_WNmLHcr5oksvQru_TrOb_VmwtKDn4ezrJ7WIbOW5cGNXeTKNI6MQ/p.png?fv_content=true&size_mode=5': 8,
    'https://previews.dropbox.com/p/thumb/AAqONcCpoovbEBFHs6t41OZ6yNJfgfGvssyyDT0NRdIZNhJbvpDTI8RLFVlkuqFnsaFBsoavGIOgb-i9xDJwv1XcwmMzq4SUdSm2VletVEioMO0GfLwHOmZ6rU87VdOZdLosy6Tf5X5fVlC4jkWpv3FQsEYtTg6M6fAsUF12fnWSWJ3Kf0wgrLc2gdSQEo1qxsG6KjK6sG4moamVN98KBh6LHJiFt2MuDbOvVgqyEsz4BpnO4LjyccUKTIex3WS15SfkYNJGVn-fJR70D8cbc4YTT8MdPOIluvalHRS6wOiX4HGntyhZKV6ZLOYigz3MtIZzuzDHmfBGYjA1hNIDYfFwGAM3TXh-Mxs7bWjPmjwVag/p.png?fv_content=true&size_mode=5': 9,
    'https://previews.dropbox.com/p/thumb/AApv6dxnDCPgaqGs89mGAoR6ulK2r2_1hJbtjW7Xd9a4Qd03DIGgSkFDE2PvLBE2WT03_S4UXAQ71EUxMXkQQylTGBFKKuqwayiyuuJJgmO-zxn2MJAGkXmGeq0rtIYVP7dm9VcQZIkGfFnBLLEKrgDld3yo-4FB4ccjfvTfYZtjkUjXsde3MVp5-KRCnZa1sfGB6fRTJR7gD_A8qHvD4SZSV9Vsj-d6ceGZZQ68q-r_lIoxm4453_wtqFKJXSwOwfojTpWCiZL55s4QLa8ur3cW7AM0iL7CjfzPvJHo4tRKHYVXrBsRnMBNoDsPFBf5LNggmNBUgI2U65jcuLtIXWhR2DG0IdeXYF4BUcyNqYcPng/p.png?size=2048x1536&size_mode=3': 10,
    'https://previews.dropbox.com/p/thumb/AAozUJfRuh7IYklkKunBUjXQ3ZJqf4OBPtKFbagoIVABQefwIZ9MBBp9AqZ_nP6dY5QnvpnDzpmBtyFbQMV5IWWoW90sfpqQBHsdcEwx8lOPPxH86OHuJEk8kLp1mSqNs8AqVn6ecSSrwQua2GHKjQDEk5IvULoe4xX1UAifwL6369Zpr3FGIbrrK5TQ26TnEV_j8UV9pQ6ldYHVHkIXOdf5bVM306snzimCjB6rQAgDxVQ5pbL8FW76MAol2QW5ZPnclSJ_gZq_IZEn50UOjAdQw8sqaOq8ww45BuDNqWfAvO-LwBUhvrcsDgJm3oz7bHq_PBS_9DCVwIK5YyqynBeFygobvEttDn9aZWMilL1t5Q/p.png?size=2048x1536&size_mode=3': 10,
    'https://previews.dropbox.com/p/thumb/AAq0edRVzvo2ytF2idm1frZAYRyRNmtH3XWUNxLVxLBubUOhNZ2rxB7Xayu9ZOfIWxnZ7s6iCQT1vZWnthEPS03Nj3aqh8Y7bx9s7X_oaUKKM7p76qcASe6ciWfz_eiZITpmIMv1gckHgG6xQp4U2VYdWMPYlg5T8_pJnbbX7fLP1kxqEjefmHBTPb3YRQ5DMVmqcOAQVK3ikvfvn6OdqCk8Y0rM1CfFNb-JzB7cHzP8SPjNUDGWzfWbDQh8HINGva8o884ml3U2LKWKxEAkxHGLaMmAL2Ooe8ZpST6vyZZMDVaYJCHQUJA2xvhZnvqSiKHdlAmERspGKaq1nmdYsfdTnZ-gbC0LAT6gcM7zXCH_WQ/p.png?size=2048x1536&size_mode=3': 10,
    'https://previews.dropbox.com/p/thumb/AAqQyf2vveZiJy8gk2FCUW98QnZr4BlklVQTcL6F_L4Gh9sCn26s4md6vXJh-a7a9nJlUM6N-8EdYSJeTzmGGQfR61RzApKdeQfePgDLzXYnXzDayDeh2DxEmxb1gbkY3DUHomW-a-ESdH9aLytE5OhG1RosmhaoE6RGQj3031vla-5N9kdni4y04nxxSsyZF0oXNWUUCzEnmOX7xu_eIZKV-oVU10QdQWYE2he14p_B2nNuXBucxgwg3cXhnM1kfRow0nRuMK3OCtTYdgciFVQahk__6VjUCrPnYuWK4p7rT9FRCrFDNostDlo9nuAQKGSeDkSyNFzON_RK7fcTun8-9sm2vCuO-_BqCKVZaFljthjzz4QPFNVUEL2jP7uKLghwW-fEDAxzwHnCjuiiEEkbbDqulfzSPY0dD1sZ7ZNjDA/p.png?size=2048x1536&size_mode=3': 10,
    'https://previews.dropbox.com/p/thumb/AAqNN9rk30AFmRimdExYOg2G1GKefzzSlT4jZUI3icQyhxkB8K30XJALV68kxtOU7oB3LRSEBpu6Bprwu53rLtprmjLsPhjvMRX-9GnZ6W1Dwys7wIAYiW5r2GBpfDFno3Pw0wHReAS-z6r6QQanyK9SCxZpf3KrhkESxb9TlE84ahsVZS47BAp0iPTcAIZMwfRY-RrMlDzpCacvODAVmht_AaQ1iLaq9C5hG1klYfitOHcdgGtslQTdwty-YXr-vWHIZ9lM7xDSCHxs5G5WKM5IewSS-rviB5Oybd3rGh8ibKFXXeMPTWzxOTuEDr_zREK-51UwO54dJCDW6KXrV5B6CQXbDALfUCkkVUItvjqKkA/p.png?size=2048x1536&size_mode=3': [1, 11]
  },
}

let {you, bot} = blackjackGame;
const hitSound = new Audio('/static/sounds/swish.m4a');
const winSound = new Audio('/static/sounds/cash.mp3');
const lossSound = new Audio('/static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', ()=> blackjackHit())
//refactor later
function blackjackHit() {
  let card = randomCard();
  updateScore(card, you);
  scoreboard(card, you);
  showCard(card, you);
}

function randomCard() {
  let random =  Math.floor(Math.random() * 13);
  return blackjackGame['cards'][random];
}

function showCard(card, activePlayer){
  if ((activePlayer['score']) <= 21) {
    let cardImage = document.createElement('img')
    cardImage.src = `${card}`;
    let test =document.querySelector(activePlayer['div'])
    test.appendChild(cardImage);
    hitSound.play();
  }
};

document.querySelector('#blackjack-deal-button').addEventListener('click', ()=> blackjackDeal())
function blackjackDeal() {
  computeWinner();
  let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    yourImages.forEach((val, i) => {
      yourImages[i].remove()
    });

    let botImages = document.querySelector('#bot-box').querySelectorAll('img');
    botImages.forEach((val, i) => {
      botImages[i].remove()
    });

    you['score'] = 0;
    bot['score'] = 0;

    document.querySelector('#your-blackjack-score').textContent = 0;
    document.querySelector('#bot-blackjack-score').textContent = 0;

    document.querySelector('#your-blackjack-score').style.color = '#ffffff';
    document.querySelector('#bot-blackjack-score').style.color = '#ffffff';

}

document.querySelector('#blackjack-stand-button').addEventListener('click', ()=> botLogic())


let A = 'https://previews.dropbox.com/p/thumb/AAqNN9rk30AFmRimdExYOg2G1GKefzzSlT4jZUI3icQyhxkB8K30XJALV68kxtOU7oB3LRSEBpu6Bprwu53rLtprmjLsPhjvMRX-9GnZ6W1Dwys7wIAYiW5r2GBpfDFno3Pw0wHReAS-z6r6QQanyK9SCxZpf3KrhkESxb9TlE84ahsVZS47BAp0iPTcAIZMwfRY-RrMlDzpCacvODAVmht_AaQ1iLaq9C5hG1klYfitOHcdgGtslQTdwty-YXr-vWHIZ9lM7xDSCHxs5G5WKM5IewSS-rviB5Oybd3rGh8ibKFXXeMPTWzxOTuEDr_zREK-51UwO54dJCDW6KXrV5B6CQXbDALfUCkkVUItvjqKkA/p.png?size=2048x1536&size_mode=3';
function updateScore(card, activePlayer) {
  if (card === A) {
    if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
      activePlayer['score'] += blackjackGame['cardsMap'][card][1];
      console.log('ace-11');
    } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card][0];
      console.log('ace-01');
    }
  } else {
    activePlayer['score'] += blackjackGame['cardsMap'][card];
  }
}

function scoreboard(card, activePlayer) {
  if ((activePlayer['score']) > 21) {
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!!!';
    document.querySelector(activePlayer['scoreSpan']).style.color = '#dc3545';
  } else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
}

function botLogic() {
    let card = randomCard();
    updateScore(card, bot);
    scoreboard(card, bot);
    showCard(card, bot);
}

function computeWinner() {
  console.log(you)
  let winner;

  if (you['score'] <= 21) {
    if (you['score'] > bot['score'] || (bot['score'] > 21)) {
      winner = you;
    } else if (you['score'] < bot['score']) {
      console.log('You lost!')
      winner = bot;
    } else if (you['score'] === bot['score']) {
      console.log(`You drew`)
    }
  } else if (you['score'] > 21 && bot['score' <= 21]) {
    console.log('You lost')
    winner =  bot;

  } else if (you['score'] > 21 && bot['score'] > 21) {
    console.log('You drew')
  }

  console.log(winner)
  console.log(`Winner is ${JSON.stringify(winner)}`)
  return winner;
}
