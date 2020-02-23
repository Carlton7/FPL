import {doCORSRequest, reqType} from './basicRequest.js';

export const getPlayerID = (firstName, lastName) => {
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

export default getPlayerID;