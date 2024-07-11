function getElementWidth(content, padding, border) {

    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; 
    const borderWidth = parseFloat(border) * 2;
    
    
    const totalWidth = contentWidth + paddingWidth + borderWidth;
    
  
    return totalWidth;
}


console.log(getElementWidth("100px", "10px", "5px")); 
console.log(getElementWidth("200px", "20px", "10px")); 
console.log(getElementWidth("150px", "15px", "7px")); 
console.log(getElementWidth("250px", "25px", "12px")); 
console.log(getElementWidth("300px", "30px", "15px")); 
