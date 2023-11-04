const names = ['abul', 'babul', 'kabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'kabul', 'babul', 'abul', 'ebul']



function removeDuplicate (names){

  const unique =[];

for(let i = 0; i< names.length; i++){

  const name = names[i]

if(unique.includes(name) === false)

unique.push(name);
}

return unique
}


console.log(removeDuplicate (names))