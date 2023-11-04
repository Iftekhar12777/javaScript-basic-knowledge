var shoppingCart = {

  books:3,
  sunglass:1,
  keyboard:5,
  mouse:2,
  pen:25
  }

  const keyName = Object.keys(shoppingCart);
  const keyValues = Object.values(shoppingCart);

  // looping hard way

for(var i = 0; i < keyName.length; i++ ){

// console.log(keyName[i], keyValues[i])

}


// Looping easy way..................//

for(const keyName in shoppingCart){
  const value = shoppingCart[keyName];
  console.log(keyName, value);
}