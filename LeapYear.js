
function findLeapYear(year){

let LeapYear = [];

for(let i = 0; i < year.length; i++ ){


const index = i;

const element = year[index]

if(element % 4 == 0){


LeapYear.push(element)

}




}


return LeapYear;


}


const years = [2023, 2024, 2025, 2028, 2030]

console.log(findLeapYear(years))