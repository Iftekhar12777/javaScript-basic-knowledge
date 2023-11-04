function factorial (number){

if(number == 1 || number == 0){

  return 1;
}

let result = 1;


for(let i=number; i >= 1; i--){

result = result * i

}

return result;

}

console.log(factorial (5))