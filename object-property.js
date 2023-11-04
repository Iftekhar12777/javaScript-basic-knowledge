var shoppingCart = {

books:3,
sunglass:1,
keyboard:5,
mouse:2,
pen:25
}

// when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen

// Alternative system
// when you know the specific property name, use braket notation to get the property value

var penCount2 = shoppingCart['pen']

// another way to find out the property value..........................................

var property_name = 'books';

var find_PropertyValue_of = shoppingCart[property_name]

console.log(find_PropertyValue_of);

//show property name

var propertyName = Object.keys(shoppingCart);

// show property  values

var propertyValues = Object.values(shoppingCart);

// console.log(propertyName);
// console.log(propertyValues);




// set property values


shoppingCart.pen = 100;

console.log(shoppingCart)