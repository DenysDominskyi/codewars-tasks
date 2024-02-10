const btnPlay = document.querySelector('#btnPlay')
const dice1 = document.querySelector('#dice1')
const dice2 = document.querySelector('#dice2')
const dice3 = document.querySelector('#dice3')
const dice4 = document.querySelector('#dice4')
const dice5 = document.querySelector('#dice5')
const dice6 = document.querySelector('#dice6')
const scoreTable = document.querySelector('#score')
const prevResults = document.querySelector('#prevResults')

function score(dice) {
    const rules = {
      1: { threeOfAKind: 1000, single: 100, singleWithFive: 150 },
      2: { threeOfAKind: 200 },
      3: { threeOfAKind: 300 },
      4: { threeOfAKind: 400 },
      5: { threeOfAKind: 500, single: 50, singleWithOne: 150 },
      6: { threeOfAKind: 600 }
    };
  
    const counts = {}
    dice.forEach(num => counts[num] ? counts[num]++ : counts[num] = 1)
  
    let score = 0;
  
    for (let num in counts) {
      if (counts[num] >= 3) {
        score += rules[num].threeOfAKind;
        if (num === "1") {
          score += (counts[num] - 3) * rules[num].single;
        } else if (num === "5") {
          score += (counts[num] - 3) * rules[num].single;
          if (counts["1"]) {
            score += (counts[num] - 3) * rules[num].singleWithOne;
          }
        }
      } else if (num === "1") {
        score += (counts[num]) * rules[num].single;
      } else if (num === "5") {
        score += (counts[num]) * rules[num].single;
      }
    }

    const newResult = document.createElement('li')
    newResult.textContent = score
    const referenceNode = prevResults.firstChild
    prevResults.insertBefore(newResult, referenceNode)

    scoreTable.innerHTML = score
  }

  const play = () => {
    let arrOfNum = []
    for(let i = 0; i < 5; i++) {
        arrOfNum.push(Math.floor(Math.random() * 6) + 1)
    }
    dice1.src = `/games/dice/img/dice${arrOfNum[0]}.png`
    dice2.src = `/games/dice/img/dice${arrOfNum[1]}.png`
    dice3.src = `/games/dice/img/dice${arrOfNum[2]}.png`
    dice4.src = `/games/dice/img/dice${arrOfNum[3]}.png`
    dice5.src = `/games/dice/img/dice${arrOfNum[4]}.png`

    score(arrOfNum)
}

  btnPlay.onclick = play