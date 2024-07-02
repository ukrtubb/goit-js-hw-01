
function makeTransaction(quantity, pricePerDroid) {

    const totalPrice = quantity * pricePerDroid;
    

    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}


console.log(makeTransaction(2, 100));                                           
console.log(makeTransaction(3, 150)); 
console.log(makeTransaction(1, 200)); 
console.log(makeTransaction(4, 50));  
console.log(makeTransaction(0, 300));   
