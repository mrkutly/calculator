function add(a, b){
  sum = a + b;
  return sum;
};

function subtract(a, b){
  sum = a - b;
  return sum;
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
    return sum;
  } else if(operator === "-"){
    subtract(a, b);
    return sum;
  } else if(operator === "*"){
    multiply(a, b);
    return answer;
  } else if(operator === "/"){
    divide(a, b);
    return answer;
  };
};
