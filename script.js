function convertClick() {
  const outputDiv = document.getElementById('output');
  const inputNum = document.getElementById('number');
  
  if (inputNum.value == "") {
    outputDiv.innerHTML = "Please enter a valid number";
  } else if (inputNum.value < 0) {
    outputDiv.innerHTML = "Please enter a number greater than or equal to 1.";
  }  else if (inputNum.value > 3999) {
    outputDiv.innerHTML = "Please enter a number less than or equal to 3999.";
  } else if (Number.isInteger(parseInt(inputNum.value, 10))){
    outputDiv.innerHTML = intToRoman(inputNum.value).toString();
  }
}

function intToRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result = ""

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      num -= values[i];
      result += symbols[i];     
    }
  }

  return result;
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("number")
      .addEventListener("keyup", function(event) {
          if (event.key === "Enter") {
              convertClick();
          }
    });
  });
