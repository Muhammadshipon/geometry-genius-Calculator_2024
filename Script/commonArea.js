          //  Common function 
     
     function getInputValue(inputFieldId){
      const inputField = document.getElementById(inputFieldId);
      const inputText = inputField.value ;
      const input = parseFloat(inputText);
      return input;
     } 
     
     function setInnerText(elementId,result){
      const element = document.getElementById(elementId);
      element.innerText = result;
      return result;
     }


          //  Area of Rectangle 

function rectangleArea(){
  const width = getInputValue('rectangle-width')
  const length = getInputValue('rectangle-length')
  const Area = width * length;

  setInnerText('rectangle-area-result',Area);

}

      //  Area of Ellipse 

  function ellipseArea(){
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');
    const Area = 3.1416 * a * b ;

    setInnerText('ellipse-area-result',Area);

  }    