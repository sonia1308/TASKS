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
let fullNameShorted = fullName.slice(0 , fullName.indexOf(" ")) + fullName.slice(fullName.indexOf(" "), fullName.indexOf(" ")+2)+ `.`+fullName.slice(fullName.lastIndexOf(" ")+1, fullName.lastIndexOf(" ")+2)+`.`
console.log(fullNameShorted); */
//#endregion
//#region homeTask6
/* const userInput = prompt("YYYY-MM-DD formatında tarix daxil edin");
const date = new Date(userInput);
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

/* let userDate = new Date(prompt(`enter you date in YYYY.MM.DD  format`))
if (userDate.charAt(4)===`.` &&  userDate.charAt(7)===`.`) {
    
} */
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
        case `+`:
            console.log(n1+n2);
            break;
        case `-`:
            console.log(n1-n2);
            break;
        case `+`:
            console.log(n1+n2);
            break;
    default:
        break;
} */