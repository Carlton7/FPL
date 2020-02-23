import {doCORSRequest, reqType} from './basicRequest.js';

export const getNextFixtureDifficulty = (id) => {
  const data = doCORSRequest(`${reqType.element}${id}/`);
  return data.then(data =>{ 
  var gameweek = 0
    const data1 = data.fixtures[gameweek].difficulty
    //filtering through player gameweek to retrieve oposition 
    return data1
  })
}

// console.log (getNextFixtureDifficulty(191))

export default getNextFixtureDifficulty;