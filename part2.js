

const addingFunction = () => {
   let number1 = document.getElementById('num1').value;
   let number2 = document.getElementById('num2').value;
   let number3 = document.getElementById('num3').value;
   let additionAnswer = document.getElementById('sum');
   n1 = Number(number1);
   n2 = Number(number2);
   n3 = Number(number3);

   let adding = n1 + n2 + n3;
   additionAnswer.textContent = adding ;
   
   return adding;

};

const productFunction = () => {
   let number1 = document.getElementById('num1').value;
   let number2 = document.getElementById('num2').value;
   let number3 = document.getElementById('num3').value;
   let productAnswer = document.getElementById('product');
   n1 = Number(number1);
   n2 = Number(number2);
   n3 = Number(number3);

   let product = n1 * n2 * n3;
   productAnswer.textContent = product ;
   
   return product;
};

const averageFunction = () => {
   let number1 = document.getElementById('num1').value;
   let number2 = document.getElementById('num2').value;
   let number3 = document.getElementById('num3').value;
   let averageAnswer = document.getElementById('average');
   n1 = Number(number1);
   n2 = Number(number2);
   n3 = Number(number3);

   let average = n1 + n2 + n3;
   let answer = average / 3; 
   averageAnswer.textContent = answer;
   
   return answer;
};

const smallestFunction = () => {
   let number1 = document.getElementById('num1').value;
   let number2 = document.getElementById('num2').value;
   let number3 = document.getElementById('num3').value;
   let smallestAnswer = document.getElementById('smallest');
   n1 = Number(number1);
   n2 = Number(number2);
   n3 = Number(number3);

   let smallest = Math.min(n1 , n2 , n3);
   smallestAnswer.textContent = smallest;

   return smallest;
};

const largestFunction = () => {
   let number1 = document.getElementById('num1').value;
   let number2 = document.getElementById('num2').value;
   let number3 = document.getElementById('num3').value;
   let largestAnswer = document.getElementById('largest');
   n1 = Number(number1);
   n2 = Number(number2);
   n3 = Number(number3);

   let largest = Math.max(n1 , n2 , n3);
   largestAnswer.textContent = largest;

   return largest;
};

const checkForErrors = () => {
   let number1 = document.getElementById('num1').value;
   let number2 = document.getElementById('num2').value;
   let number3 = document.getElementById('num3').value;

   if ( number1 === Number || number2 === Number || number3 === Number ){
      
   }
};

let submit = document.querySelector('#submit').addEventListener('click', function(){ addingFunction(); productFunction(); averageFunction(); smallestFunction(); largestFunction(); checkForErrors() });