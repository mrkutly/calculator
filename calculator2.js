//creating my mathematic functions//
function add(a, b){
  answer = a + b;
  return answer;
};

function subtract(a, b){
  answer = a - b;
  return answer;
};

function multiply(a, b){
  answer = a * b;
  return answer;
};

function divide(a, b){
  answer = a / b;
  return answer;
};

//A function that takes input and figures out which mathematic function to run//
function operate(a, b, operator){
  if(operator === "+"){
    add(a, b);
    return answer;
  } else if(operator === "-"){
    subtract(a, b);
    return answer;
  } else if(operator === "*"){
    multiply(a, b);
    return answer;
  } else if(operator === "/"){
    divide(a, b);
    return answer;
  };
};

//*** Building the calculator *** //

const display = document.getElementById("display");

//loop to add event listeners to the number buttons
for(i = 0; i < 10; i++)
{
  var button = document.getElementById(i);
  button.addEventListener("click", function(event)
  {
    display.textContent += event.target.id;
  });
};

//getting operator buttons from DOM//
const plusButton = document.getElementById("+");
const minusButton = document.getElementById("-");
const timesButton = document.getElementById("*");
const divisionButton = document.getElementById("/");

//getting clear and return buttons from DOM//
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

//adding event listeners to update display with operators//
plusButton.addEventListener("click", function (event){
  display.textContent += " " + event.target.id + " ";
});

minusButton.addEventListener("click", function (event){
  display.textContent += " " + event.target.id + " ";
});

timesButton.addEventListener("click", function (event){
  display.textContent += " " + event.target.id + " ";
});

divisionButton.addEventListener("click", function (event){
  display.textContent += " " + event.target.id + " ";
});

clear.addEventListener("click", function (event){
  display.textContent = "";
});

//gotta figure out how to make this "equals" function work with any length of array//
equals.addEventListener("click", function()
{
  var equationString = display.textContent;
  var equationArray = equationString.split(" ");
  if(equationArray.length === 5)
  {
    a = operate(parseInt(equationArray[0]), parseInt(equationArray[2]), equationArray[1]);
    display.textContent = operate(a, parseInt(equationArray[4]), equationArray[3]);
  }
});

//                0    1   2   3   4
//sample array = ["3","+","7","-","2"]
//create loop where i is the indeces of the array and if it is divisible by 2,
// it is an operator. assign the odd numbered indeces to a, b, etc. then run the
//function
