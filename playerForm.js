import {doCORSRequest, reqType} from './basicRequest.js';

export const getPlayerForm = () => {
  const data = doCORSRequest(`${reqType.bootstrap}`);
  return data.then(data =>{ 
    const data1 = data.elements
    var formList = []
    for (let element = 0; element < 623; element++) {
      if (data1[element].form > formList[9]){
        formList.splice(9,1)
        formList.push(data1[element].form)
        formList.sort((a, b) => b - a);
      }
    }
  return formList;
  })
}
console.log(getPlayerForm())

export default getPlayerForm;