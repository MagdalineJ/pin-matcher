function getPin(){
    const pin = Math.round(Math.random()*10000);
const pinString = pin + '';
if(pinString.length == 4){
    return pin;
}else{
    // console.log('get 3 digit and calling again',pin)
    return getPin();
}

}

function generatePin(){
    const pin=getPin();
  document.getElementById('display-pin').value=pin;
}

document.getElementById('keypad').addEventListener('click',function(event){
const num= event.target.innerText;
const calcDisplay = document.getElementById('input-display');

if(isNaN(num)){
    // if the taget event text is true as not a number 
if (num =='C'){
    calcDisplay.value= '';
}
if(num == '<'){
    calcDisplay.value=calcDisplay.value.slice(0,-1); 
}
}else{
    // when target event text is a number
    const previousNum = calcDisplay.value;
    const currentNum= previousNum + num;
    calcDisplay.value= currentNum;
}
  
})

// condition of matching both of the pins
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
const calcDisplay = document.getElementById('input-display').value;
if(pin== calcDisplay){
   document.getElementById('succeed').style.display='block';
   document.getElementById('fail').style.display='none';

}else{
    document.getElementById('fail').style.display='block';
   document.getElementById('succeed').style.display='none';

}
    
}