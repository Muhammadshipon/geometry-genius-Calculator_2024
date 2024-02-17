function calculateTraiangleArea(){
      // base Call 
  const baseInput =document.getElementById('triangle-base');
  const base=baseInput.value;
  const b=parseFloat(base)
  console.log( b)
       // height Call 
  const heightInput =document.getElementById('triangle-height');
  const height=heightInput.value;
  const h=parseFloat(height)
  console.log( h)

    //  Area of triangle 
    const Area = 0.5*b*h ; 

    // displayed the result
const triangleAreaResult = document.getElementById('triangle-area-result');
triangleAreaResult.innerText = Area;
}