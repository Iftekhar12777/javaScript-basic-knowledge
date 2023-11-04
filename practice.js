function quantity (book1, book2, book3){

let book1Page = 100;
let book2Page = 200;
let book3Page = 300;

const book1Quantity = book1Page * book1;
const book2Quantity = book2Page * book2;
const book3Quantity = book3Page * book3;

if(book1Page * book1){
  console.log(book1Page)
}

else if (book2Page * book2){
console.log(book2Page)
}

else if (book3Page * book3){
  console.log(book3Page)
}

else(console.log("none"))

return [book1Quantity, book2Quantity, book3Quantity]
}

const book1PageQuantity = 5;
const book2PageQuantity = 3;
const book3PageQuantity = 4;

const totalPages =quantity(book1PageQuantity,book2PageQuantity, book3PageQuantity)
console.log(totalPages)