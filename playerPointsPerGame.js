import {doCORSRequest, reqType} from './basicRequest.js';
import getPlayerID from './playerID.js';

const getAvPlayerPointsPerGame = () => {
  const id = getPlayerID ('Jack', 'Grealish')
  return id.then(id =>{ 
    const data = doCORSRequest(`${reqType.element}${id}/`);
    return data.then(data =>{ 
      const data1 = data.history
      const data2 = data.fixtures.length
      //filtering through player gameweeks to retreive points where minutes > 1
      var fixturesRemaining = 38 - data2
      var total = 0
      var fixturesPlayed = 0
      for (let gameweek = 0; gameweek < fixturesRemaining; gameweek++) {
        if (data1[gameweek].minutes > 1) {
          total = total + data1[gameweek].total_points
          fixturesPlayed = fixturesPlayed + 1
        }
      }
      var average = Number(total)/Number(fixturesPlayed)
      return average.toFixed(2) 
    })
  })
}

console.log (getAvPlayerPointsPerGame())