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

const getPlayer = (id) => {
  const data = doCORSRequest(`${reqType.element}${id}/`);
  return data;
}

console.log (getPlayer(191))

const getPlayerHistory = (id) => {
  const data = doCORSRequest(`${reqType.element}${id}/`);
  return data.then(data =>{ 
    const data1 = data.history
    //filtering through player gameweeks to retreive points where minutes > 1
    
    for (let gameweek = 0; gameweek < 26; gameweek++) {
      console.log(data.history[gameweek].total_points)
    }
    // console.log(data1)
    
    return data1
  })
}

console.log (getPlayerHistory(191))

