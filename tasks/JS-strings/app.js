//#region
/* function includesEmail(email) {
    // code...
  }

  includesEmail("sooonyam13@gmail.com"); // true
  includesEmail("testgmail.com"); // false
   */
/* function includesEmail(email) {
    for (let i = 0; i <email.length; i++) {
        if(email[i]==="@"){
            return true;
        }
        
    }
}
console.log(includesEmail("sooonyam13@gmail.com")); */
/* const now = new Date();
const date = new Date(2005 ,7,13 );
const diff= now.getTime() - date.getHours();
console.log(diff); */
//#endregion

//#region homeTask1

/* let text = "John Doe"; // 7
let text1 = "A beautiful game"; // 14 
let textWithNoSpaces = text.replace(/\s/g, '');
let textWithNoSpaces1 = text1.replace(/\s/g, '');
console.log( textWithNoSpaces.length);
console.log( textWithNoSpaces1.length);
 */
//#endregion

//#region homeTask2
/* let userName = prompt(`enter your name`)
let userSurname = prompt(`enter your surname`)
let nameSurname = userName +` `+ userSurname
console.log(nameSurname);
let userName1=nameSurname.slice(0, nameSurname.indexOf(` `))
let userSurname1 = nameSurname.slice(nameSurname.indexOf(` `), nameSurname.length) 
console.log (  userName1 + ` ` + userSurname1); */
//#endregion

//#region homeTask3
/* let result = 16792 * 5437
let str = `${result}`
console.log(result);
console.log(str.at(5)); */
//#endregion

//#region homeTask4
/* let userPrice = +prompt(`enter your price in "530.90" format`)
let price = `${userPrice}`
function checkPriceFormat() {
    if (price.includes(".")===true) {
        let manat = price.slice(0, price.indexOf("."))
        let qepik = price.slice(price.indexOf(".")+1, price.length)
        console.log(`${manat} manat ${qepik} qepik`);
    }else{
        console.log(`enter valid price`);
    }
}
checkPriceFormat() */
//#endregion

//#region homeTask5
/* let fullName= prompt(`enter your full name`)
let fullNameShorted = fullName.slice( 0, fullName.indexOf(" ")) + fullName.slice(fullName.indexOf(" "), fullName.indexOf(" ")+2)+ `.`+fullName.slice(fullName.lastIndexOf(" ")+1, fullName.lastIndexOf(" ")+2)+`.`
console.log(fullNameShorted); */
//#endregion

//#region homeTask6
/* let userDateInput = prompt(`enter you date in YYYY.MM.DD  format`)
if (userDateInput.slice(0, 4)===Number()) {
    let userDate = new Date(userDateInput)
    let userDateString= `${userDate}`
    let month = userDateString.slice(3, 7)
    let dateFormatted= userDate.getDate() +` `+month+` ` + userDate.getFullYear()
    console.log(dateFormatted);
}
else{
    console.log(`Wrong number`);
}
 */
/* let phoneNumber = prompt(`enter your number in "055 555 55 55" format ` ) // 055 555 55 55
let a  = phoneNumber.split(` `)

console.log(a.join(`-`)); */
/* for (let i = 0; i < numberString.length; i++) {
    numberString[i]
    console.log(numberString)
} */
/* let correctedNUmber = numberString.slice(0,length(2))+`-`  */
//#region homeTask6


// let userDateFormatted = userDate3.slice(userDate3.indexOf(` `), userDate3.lastIndexOf(` `))

// console.log(userDate3);
// console.log(userDateFormatted);
// let userDate2 = userDate.split(`.`)
// console.log(userDate2);
//#endregion

//#region strings-advancedFromRLesson
/* 
function findLetter(w, l) {
    if (w.indexOf(l)===w.lastIndexOf(l)&& w.indexOf(l)!==-1) {
        console.log(`used once`);
    }
    else if(w.indexOf(l)!== w.lastIndexOf(l)){
        console.log(`used mult times`);
    }
    else{
        console.log(`not used`);
    }
}
findLetter(`admin`, `n`)
findLetter(`salam`, `a`)
findLetter(`salam`, `z`)
 */

/* const message = `hello to sonia's world`
let hiddenMessage 
for (let i = 0; i < message.length; i++) {
    hiddenMessage = message.charCodeAt(i)
    console.log(String.fromCharCode(hiddenMessage+4));
 */
/* const n1 = +prompt(`enter first letter`);
const op = prompt(`enter one of operators : "+" ,"-" , "*", "/"`);
const n2 = +prompt(`enter second letter`);
switch (op) {
    case `+`:
        console.log(n1+n2);
        break;
    case `-`:
        console.log(n1-n2);
        break;
    case `*`:
        console.log(n1*n2);
        break;
    case `/`:
        console.log(n1/n2);
        break;
    default:
        break;
} */
//#endregion

//#region homeTaks7
/* function getIndexOfDote(text) {
    const doteIndex = text.indexOf(`.`)
    console.log(doteIndex);
}
getIndexOfDote(`sonia.sonia.sonia...`)
 */
//#endregion
//#region homeTask8
/* const userInput = prompt(`enter your text`)

function checkNumbers(text) {
    let flag =false
    for (let i = 0; i <= userInput.length; i++) {
        if (!isNaN(parseInt(userInput[i]))) {
           flag = true
    }
        }
        if(flag){
            console.log("Metinin icinde Reqem Var");
        }else{
            console.log("Metinin icinde reqem yoxdur");
        }
}
checkNumbers(`${userInput}`) */
//#endregion

//#region homeTask9
/* let usedCount = 0
function repeatSymbolCounter(string, char) {
    for (let i = 0; i <= string.length; i++) {
        if (string[i]===char) {
            usedCount++
        }
    }
    console.log(usedCount)
}
repeatSymbolCounter(`ssssssoniia`,`i`) */
//#endregion


//#region homeTask10
/* 
function capitalize(str) {
  str = str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();
  return str
}
console.log(capitalize("soGHTJia"));
 */
//#endregion

//#region homeTask 11
/* function snakeToKebab(str) {
   kebabCase= str.toLowerCase().split(`_`)
   console.log(kebabCase.join(`-`));
}
snakeToKebab(`THIS_IS_FOR_TESTING`) */
//#endregion

//#region homeTask 12
/* function changeFirstWOrd(word, firstLetter) {
    let word1= String(word)
    let firstLetter1 = String(firstLetter)
    let dff =word1.replace(word1,firstLetter1)
    let fdd =word1.slice(1)
    return dff + '' + fdd 
}
console.log(changeFirstWOrd("Kamil","R")); */
//#endregion
//#region homeTask 13
/* function removeCharacterFromString(word) {
    let slicedWord = word.slice(1)
    console.log(slicedWord);
}
removeCharacterFromString(`Loremn ipsum dolar sit amet`) */
//#endregion

//#region homeTask 14
/* function checkIsEmail(email){
    userEmail= String(email)
    if (userEmail.includes(`@email.com`)||
    userEmail.includes(`@outlook.com`)||
    userEmail.includes(`@mail.ru`)||
    userEmail.includes(`@yahoo.com`)||
    userEmail.includes(`@yandex.com`))
    {
        console.log(`email is valid`);
    }
    else{
        console.log(`email youve entered is wrong`);
    }
}
checkIsEmail(`mdfhgj@email.com`) */
//#endregion