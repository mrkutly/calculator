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

//A function to round my final answers to a certain decimal place:

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

//A function that takes input and figures out which mathematic function to run//
function operate(operator, a, b){
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
  var str = display.textContent
  if (str.charAt(str.length - 1) == " " || str == "")
  {
    display.textContent += event.target.id
  } else
  {
    display.textContent += " " + event.target.id + " ";
  }
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

//comparing the contiguous array indeces to keep track of currentAnswer.
//Just like kadane's algorithm!!! learning is fun!!!

equals.addEventListener("click", function()
{
  var equationString = display.textContent;
  var equationArray = equationString.split(" ");
  var currentAnswer = Number(equationArray[0]);
  for (i = 0; i < equationArray.length; i++)
  {
    if(Number(equationArray[i]) === 0 && equationArray[i-1] === "/"){
      display.textContent = "Dividing by 0 will crash your computer, dummy";
      break;
    }
    if(i > 0 && i % 2 == 0)
    {
      newAnswer = operate(
        equationArray[i - 1], currentAnswer, Number(equationArray[i])
      );
      currentAnswer = newAnswer;
      display.textContent = round(currentAnswer, 5);
    }
  }
});
