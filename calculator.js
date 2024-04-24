//program for a simple calculator 
// take the operator input
var operator = prompt('Choose your next calculator process operator ?(either +, -, *, /)');


//take the operand input
var num1 = parseFloat(prompt('Enter your first number: '));
var num2 = parseFloat(prompt('Enter your second number: '));


//create a  function gold the process of the calculator
function result(){
if (operator == '+'){
         result = num1 + num2
}else if ( operator =='-'){
          result = num1- num2
}else if ( operator == '*'){
    result = num1 * num2
}else {
    result = num1 / num2
}


//Display the result inside the function
console.log('${num1} ${operator} ${num2} = ${result}');
}


//Call the function by typing its name to make it ready to run.
result();

