function getShippingMessage(country, price, deliveryFee) {
    
    const totalPrice = price + deliveryFee;
    
    
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}


console.log(getShippingMessage("Ukraine", 100, 50)); 
console.log(getShippingMessage("USA", 200, 30)); 
console.log(getShippingMessage("Canada", 150, 20)); 
console.log(getShippingMessage("Australia", 300, 40)); 
console.log(getShippingMessage("Germany", 250, 35)); 
