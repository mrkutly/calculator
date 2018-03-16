

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

const display = document.getElementById("display");

for(i = 0; i < 10; i++){
  var button = document.getElementById(i);
  button.addEventListener("click", function(event){
    if(display.textContent === "+" || display.textContent === "-" ||
      display.textContent === "*" || display.textContent === "/"){
        operator = display.textContent;
      }
    display.textContent = event.target.id;
  });
};

const plus = document.getElementById("+");
plus.addEventListener("click", function(event){
  a = parseInt(display.textContent);
  display.textContent = event.target.id;
});

const minus = document.getElementById("-");
minus.addEventListener("click", function(event){
  a = parseInt(display.textContent);
  display.textContent = event.target.id;
});

const times = document.getElementById("*");
times.addEventListener("click", function(event){
  a = parseInt(display.textContent);
  display.textContent = event.target.id;
});

const dividedBy = document.getElementById("/");
dividedBy.addEventListener("click", function(event){
  a = parseInt(display.textContent);
  display.textContent = event.target.id;
});

const equals = document.getElementById("equals");
equals.addEventListener("click", function(){
  var b = parseInt(display.textContent);
  display.textContent = operate(a, b, operator);
});
