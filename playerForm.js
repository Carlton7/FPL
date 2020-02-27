import {doCORSRequest, reqType} from './basicRequest.js';

export const getPlayerForm = () => {
  const data = doCORSRequest(`${reqType.bootstrap}`);
  return data.then(data =>{ 
    const data1 = data.elements
    var formList = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,0.91,0.92,0.93,0.94,0.95,0.96]
    var playerName = ["","","","","","","","","","","","","","",""]
    for (let element = 0; element < 623; element++) {
      if (data1[element].form > formList[14]){
        formList.splice(14,1)
        playerName.splice(14,1)
        formList.push(data1[element].form)
        formList.sort((a, b) => b - a)
        var indexPos = formList.indexOf(data1[element].form)
        playerName.splice(indexPos, 0, data1[element].first_name + " " + data1[element].second_name)
      }
    }
    return [formList, playerName];
  })
}
console.log(getPlayerForm())

export default getPlayerForm;