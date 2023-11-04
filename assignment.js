function cubeNumber(number1, number2) {

let cube = number1 * number1 * number1

let cube2 = number2 * number2 * number2

return [cube, cube2];

}

const number = 3
const output = number
const number2 = 4
const output2 = number2


// console.log(cubeNumber(output,output2));








function matchFinder(string1, string2) {

  for (let s = 0; s < string1.length; s++) {

    for (let x = 0; x < string2.length; x++) {

      if (string1[s] === string2[x] && typeof string1 === "string" && typeof string2 === "string") {
        return true;
      }
    }
  }
  return false;

}

const name1 = 'John Doe'
const name2 = 'ohn'

// console.log( matchFinder(name1, name2))







function sortMaker(arr) {

  for(let i = arr.length-1; 0 <= i ; i--){

  const index = arr[i]

if (index < 0){
console.log("invalid number")

}

else if (arr[0] === arr[1]){
  console.log("equal")
  }

else if (index > 0){
  console.log(index)
}

  }

}

const nums =[2,3];

// console.log(sortMaker(nums))







function findAddresses(obj) {
  const keyValue = Object.values(obj);
  const result = [];

  for (let i = 0; i < keyValue.length; i++) {
    const dataValue = keyValue[i];

    if (dataValue == null || dataValue === "") {
      result.push('__');
    } else {
      result.push(dataValue);
    }
  }

  return result;
}

const data = {
  street: 10,
  house: "15A",
  society: "", 
};

const addressNames = findAddresses(data);

// console.log(addressNames);










function canPay(changeArray, chipsPrice) {
  let totalAmount = 0;
  let justify = [];

  if (changeArray.length === 0) {
    justify.push('Please input a valid number');
  }
  
  else {
    for (let i = 0; i < changeArray.length; i++) {
      const currentValue = changeArray[i];
      totalAmount = totalAmount + currentValue;
    }

    if (totalAmount === null || totalAmount === undefined) {
      justify.push('Please input a valid number');
    } else if (totalAmount >= chipsPrice) {
      justify.push(true);
    } else {
      justify.push(false);
    }
  }

  return justify;
}

const money = [];
const chipsPrice = 10;

// console.log(canPay(money, chipsPrice));