function parallelogramArea(){
  // base Call 
const baseInput =document.getElementById('parallelogram-base');
const base=baseInput.value;
const b=parseFloat(base)
console.log( b)
   // height Call 
const heightInput =document.getElementById('parallelogram-height');
const height=heightInput.value;
const h=parseFloat(height)
console.log( h)

//  Area of parallelogram
const Area = b*h ; 
console.log(Area)

// displayed the result
const parallelogramAreaResult = document.getElementById('parallelogram-area-result');
parallelogramAreaResult.innerText = Area;


}