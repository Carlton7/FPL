import {doCORSRequest, reqType} from './basicRequest.js';
import getPlayerID from './playerID.js';
import getNextFixtureDifficulty from './nextFixtureDifficulty.js';

var difficultyLevel = {
  2 : [2,4,14,18,19],
  3 : [3,5,7,8,13,15,16,20],
  4 : [1,6,9,12,17],
  5 : [10, 11]
}

window.addEventListener('load', ()=> {
// let firstname1 = document.querySelector('.ppbofd-fname');
// let lastname1 = document.querySelector('.ppbofd-lname');
let score = document.querySelector('.player');

// firstname1.textContent = firstname
// lastname1.textContent = lastname
  function ppbofd(firstname, lastname) {
    // const getAvPlayerPointsPerGameBasedOnDifficulty = () => {

      const id = getPlayerID (firstname, lastname)
      return id.then(id =>{ 
        const data = doCORSRequest(`${reqType.element}${id}/`);
        return data.then(data =>{ 
          const data1 = data.history
          const fixt = data.fixtures.length
          var fixturesRemaining = 38 - fixt
          const opp = getNextFixtureDifficulty(id)
          return opp.then(opp => {
            var total = 0
            var fixturesPlayed = 0
            //filtering through player gameweeks to retreive points where minutes > 1
            for (let gameweek = 0; gameweek < fixturesRemaining; gameweek++) {
              if (difficultyLevel[opp].includes(data1[gameweek].opponent_team)){
                if (data1[gameweek].minutes > 1) {
                  total = total + data1[gameweek].total_points
                  fixturesPlayed = fixturesPlayed + 1
                  // console.log(total, fixturesPlayed)
                }
              }
            }
            var average = Number(total)/Number(fixturesPlayed)
            score.textContent = average.toFixed(2) 
            })
          })
        })
      // }
  }
})
// document.querySelector('button').addEventListener('click', ppbofd);
// console.log(ppbofd("Mohamed", "Salah"))


