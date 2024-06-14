//javaScript If/elseTask 1
/* let officialName = prompt(`What is the “official” name of JavaScript?`)
if (officialName==="ECMAScript") {
    console.log(`Right!`);
}
else{
    console.log(`You don’t know? ECMAScript!`);
} */

//javaScript If/elseTask 2
/* let yourNumber = +prompt("The number you submitted is ...")
if (0<yourNumber){
    alert('1');
}
else if(0>yourNumber) {
    alert('-1');
}
else if(0===yourNumber){
    alert('0');
}
 else{
     alert(`Please type A Number , you genius`);
 }
 */

//javaScript If/elseTask 3
/* let a = +prompt ("type your first number")
let b = +prompt ("type your second number")
let result = a + b < 4 ? 'Below' : 'Over';
console.log(result); */

//javaScript If/elseTask 4
/* let login = prompt("Who is logging in?")
let message=  (login == `Employee`) ? console.log(`Hello`) :
(login == `Director`) ? console.log(`Greetings`):
(login === '') ? console.log(`No login`):  '';
*/
/*
} */
//#region test

/* for (let i = 0; i < 100; i++) {
    if(i%2 === 0){
        console.log( `${i} is even number`);
    }
    else{
        console.log( `${i} is odd number`);
    }

} */
//region end

//#ifElseHomeTask2

/* let weatherTemprature = +prompt("enter temperature")
if (weatherTemprature >= 25) {
    console.log(`${weatherTemprature} is hot`);

} else if (weatherTemprature >= 10) {
    console.log(`${weatherTemprature} is normal`);

} else if (weatherTemprature >= 0) {
    console.log(`${weatherTemprature} is cold`);

} else if (weatherTemprature < 0) {
    console.log(`${weatherTemprature} is freezing`);

}
else {
    console.log(`enter real degree`);
} */
//regionEnd

//#ifElseHomeTask2
/* let userNumber = +prompt(`enter your number`)
if (userNumber % 2 === 0) {
    console.log(`${userNumber} is an even number`);
} else if (userNumber % 2 === 1) {
    console.log(`${userNumber} is an odd number`);
}
 */
//#ifElseHomeTask3
/* let userName = prompt("enter username")
if (userName=== "sonia") {
 let password = prompt("enter your password")
 if (password=== 'pass') {
    console.log("welcome");
 } else {
    console.log("try again later");
 }
} else {
    console.log("idk who u r");
} */

//#region loopTask1

/* let i =+prompt("enter your double number")
while (i<100 ) {
    i+=7
    console.log(i);
}
 */
//#region loopTask2
/* let n = +prompt(`enter count of loops`)
let i = 1
    while (i <=n) {
        i++
        console.log("asdfghj");
    } */

//regionEnd
//#region loopTask3
/* for (let i = 100; i < 1000; i+=10) {
    console.log(i);
    
} */
/*  for (let i = 100; i < 1000; i++) {
       if (i%10===0) {
        console.log(i);
       }
    
    } */
//#region loopTask4
/*    
   for (let i = 10; i < 100; i++) {
    if (i%2 !==0) {
  sum+=i
  console.log(sum);
    }
} */
//regionEnd

//#region loopTask5
/* let num= +prompt("enter your number")
let sum=0
for (let i = 100; i <1000; i++) {
    if (i%num===0) {
        sum+=i
        console.log(sum);
    }
 */
//regionEnd

//#region loopTask6
//madeByChatGPT
/* let n = parseInt(prompt("Enter a number:"));

for (let i = n; i >= 0; i--) {
    if (i === 23) continue; // Skip number 23

    let isPrime = true;

    if (i <= 1) {
        isPrime = false; // Numbers less than or equal to 1 are not prime
    } else {
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(i);
    }
} */
//#endregion
//#region loopTask7
/* let mult = 1
for (let i = 1; i <=9; i++) {
    mult*=i
    console.log(mult);
} */
//
//#region loopTask8

/* let userInput =prompt('enter your text')
if (/\d/.test(userInput)) {
    console.log('yes number');
} else {
    console.log('no number');
} */

//#endregion

//#region loopTask9
/*    let sum = 0
   for (let i = 1; i < 100; i++) {
    if (i%2 !==0) {
  sum+=i
    }
}
console.log(sum); */
//#endregion

//#region loopTask10
/* let userNumber = +prompt('enter your number')
let factorial = 1
for (let i = 1; i <= userNumber; i++) {
    factorial*=i
    console.log(factorial);
} */

//#endregion
/* let  mult = 1
for (let i = 1 ;i <= 10 ; i++) {
    for (let j = 1 ;j <= 10 ; j++) {
    mult = i*j
    console.log(`${i}*${j}=`+ mult);
    }
} */

/* let num = 0 */
/* for (let i = 0; i <=100 ;i++) {
        console.log(i);
    } */
/*    let i = +prompt()
   let j =1
let a = i*j
switch (i*j) {
    case i++:
        console.log(a);
        break;
    
    default:
        break;
}
 */

//#region
/* let a = +prompt(`enter first number`);
let b = prompt(`enter your operator`);
let c = +prompt(`enter second number`);
let d;
switch (b) {
  case "+":
    d = a + c;
    console.log(`${a} + ${c}=${d}`);
    break;
  case "*":
    d = a * c;
    console.log(`${a} * ${c}=${d}`);
    break;
  case "/":
    d = a / c;
    console.log(`${a} / ${c}=${d}`);
    break;
  case "-":
    d = a - c;
    console.log(`${a} - ${c}=${d}`);
    break;
  default:
    break;
} */
//endregion

//#region
/* let a = +prompt(`enter first number`);
let b = prompt(`enter your operator`);
let c = +prompt(`enter second number`);
let d;
if (b === `+`) {
  d = a + c;
  console.log(`${a} + ${c}=${d}`);
} else if (b === `-`) {
  d = a - c;
  console.log(`${a} - ${c}=${d}`);
} else if (b === `*`) {
  d = a * c;
  console.log(`${a} * ${c}=${d}`);
} else if (b === `/`) {
  d = a / c;
  console.log(`${a} / ${c}=${d}`);
}
else{
    console.log(`nothing`);
} */
//#endregion

//#region
/* let a = `*`
let star
for (let i = 10; i > 0; i--) {
    a=a+`*`
    console.log(a);
} */
/* let space = 10
for (let i = space; i >0; i--) {
    let star ="";
    for (let j = 0; j < i; j++) {
        star+="*"
    }
    console.log(star);
} */

/* let n = +prompt("Enter a number:");

for (let i = n; i >= 1; i--) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
        return false;
    }
  }
  return true;
}

 */