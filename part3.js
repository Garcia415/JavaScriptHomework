
const checkForZeros = () => {
    let number1 = document.querySelector('#num1').value;
    let number2 = document.querySelector('#num2').value;
    let number3 = document.querySelector('#num3').value;
    let number4 = document.querySelector('#num4').value;
    let number5 = document.querySelector('#num5').value;
    let amountOfZeros = document.querySelector('#zeros');
    let count = 0;
    n1 = Number(number1);
    n2 = Number(number2);
    n3 = Number(number3);
    n4 = Number(number4);
    n5 = Number(number5);

    if(n1 === 0){
        count++
    }if(n1 !== 0){
        count = count + 0;
    }if(n2 === 0){
        count++
    }if(n2 !== 0){
        count = count + 0;
    }if(n3 === 0){
        count++
    }if(n3 !== 0){
        count = count + 0;
    }if(n4 === 0){
        count++
    }if(n4 !== 0){
        count = count + 0
    }if(n5 === 0){
        count++
    }if(n5 !== 0){
        count = count + 0
    }
    return amountOfZeros.textContent = count

};

const negativeNumbers = () => {
    let number1 = document.querySelector('#num1').value;
    let number2 = document.querySelector('#num2').value;
    let number3 = document.querySelector('#num3').value;
    let number4 = document.querySelector('#num4').value;
    let number5 = document.querySelector('#num5').value;
    let negativeNumbers = document.querySelector('#negative');
    let count = 0;
    n1 = Number(number1);
    n2 = Number(number2);
    n3 = Number(number3);
    n4 = Number(number4);
    n5 = Number(number5);

    const arrayOfNegatives = [n1, n2 , n3, n4, n5];
    Array.from(arrayOfNegatives);
    Array.from(negativeNumbers);

        if(n1 < 0){
            count++
        }if(n1 >= 0){
            count = count + 0;
        }if(n2 < 0){
            count++
        }if(n2 >= 0){
            count = count + 0;
        }if(n3 < 0){
            count++
        }if(n3 >= 0){
            count = count + 0;
        }if(n4 < 0){
            count++
        }if(n4 >= 0){
            count = count + 0
        }if(n5 < 0){
            count++
        }if(n5 >= 0){
            count = count + 0
        }
        return negativeNumbers.textContent = count
    
};

const positiveNumbers = () => {
    let number1 = document.querySelector('#num1').value;
    let number2 = document.querySelector('#num2').value;
    let number3 = document.querySelector('#num3').value;
    let number4 = document.querySelector('#num4').value;
    let number5 = document.querySelector('#num5').value;
    let positiveNumbers = document.querySelector('#positive');
    let count = 0;
    n1 = Number(number1);
    n2 = Number(number2);
    n3 = Number(number3);
    n4 = Number(number4);
    n5 = Number(number5);

    const arrayOfPositives = [n1, n2 , n3, n4, n5];
    Array.from(arrayOfPositives);
    Array.from(positiveNumbers);

    if(n1 > 0){
        count++
    }if(n1 <= 0){
        count = count + 0
    }if(n2 > 0){
        count++
    }if(n2 <= 0){
        count = count + 0
    }if(n3 > 0){
        count++
    }if(n3 <= 0){
        count = count + 0
    }if(n4 > 0){
        count++
    }if(n4 <= 0){
        count = count + 0
    }if(n5 > 0){
        count++
    }if(n5 <= 0){
        count = count + 0
    }
        return positiveNumbers.textContent = count
};

let submit = document.querySelector('#submit').addEventListener('click', function(){ checkForZeros(); negativeNumbers(); positiveNumbers() });