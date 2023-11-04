function getSome(numbers){

let sum = 0;

for(let i = 0; i < numbers.length; i++){

const index=i

const element = numbers[index]

sum = sum+element

}

return sum;

}


function findOddDoSum(numbers){

  const oddNumbers = []

  for(let i = 0; i < numbers.length; i++){

    const index=i
    
    const element = numbers[index]

    if(element % 2 !== 0){

      console.log(index,element)

      oddNumbers.push(element);

    }
    
    // sum = sum+oddNumbers
    
    }

    return oddNumbers;

}


const myNumbers = [12, 65, 45, 78, 32, 45, 91];


console.log(getSome(findOddDoSum(myNumbers)))

// console.log(findOddDoSum(myNumbers))

