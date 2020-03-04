const proxyURL = 'https://cors-anywhere.herokuapp.com/';
const baseURL = 'https://fantasy.premierleague.com/api/';

const reqType = {
  bootstrap : 'bootstrap-static/', //Overview
  element : 'element-summary/', //Players (playderID)
  events : 'events', // Get all gameweeks
  event : 'event',  //A selected gameweek
  entry : 'entry', //Get a team
  elementTypes: 'element-types', // Get all player positions
  gameweekFixtures: 'fixtures/?event', //Get all fixtures for a specified gameweek (gameweek number)
  teams: 'teams/', //Get all teams,
  leagueClassicStanding: 'leagues-classic/' //Get league standing at current gameweek.
}

const doCORSRequest = async (url) => {
  const response = await fetch(proxyURL + baseURL + url);
  const myJson = await response.json();
  return myJson
}

const getPlayerID = (firstName, lastName) => {
  const data = doCORSRequest(`${reqType.bootstrap}`);
  return data.then(data =>{ 
    const data1 = data.elements
    var id = 0
    var team = 0
    for (let element = 0; element < 623; element++) {
      if (data1[element].first_name == firstName && data1[element].second_name == lastName) {
        id = data1[element].id
      }
    }
  return id;
  })
}
// console.log(getPlayerID('Mohamed', 'Salah'))


const getNextFixtureDifficulty = (id) => {
  const data = doCORSRequest(`${reqType.element}${id}/`);
  return data.then(data =>{ 
  var gameweek = 0
    const data1 = data.fixtures[gameweek].difficulty
    //filtering through player gameweek to retrieve oposition 
    return data1
  })
}

var difficultyLevel = {
  2 : [2,4,14,18,19],
  3 : [3,5,7,8,13,15,16,20],
  4 : [1,6,9,12,17],
  5 : [10, 11]
}

// window.addEventListener('load', ()=> {
// let firstname = document.querySelector('.ppbofd-fname');
// let lastname = document.querySelector('.ppbofd-lname');

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
            return average.toFixed(2) 
            })
          })
        })
      // }
}

console.log(ppbofd("Jordan", "Henderson"))