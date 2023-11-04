
function biggestNumber (arr){

let biggest = arr[0];

for(let i = 1; i< arr.length ; i++){

  if(arr[i] > biggest){

    biggest=arr[i]
  }
}

return biggest;

}

let arr = [23,5,46,7,76,43,21,67,22,69,55]

console.log(biggestNumber (arr))