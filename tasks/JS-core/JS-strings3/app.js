//#region homeTask1
// const dnaCheck = (dna) => {
//     const dna1 = String(dna).toLowerCase().split("");
//     let result = "";
//     for (let i = 0; i < dna1.length; i++) {
//         if (dna1[i] === 'a') {
//             result += 't';
//         } else if (dna1[i] === 't') {
//             result += 'a';
//         } else if (dna1[i] === 'c') {
//             result += 'g';
//         } else if (dna1[i] === 'g') {
//             result += 'c';
//         }
//     }
//     console.log(result.toUpperCase());
// }

// dnaCheck('AATTCCGG');
//#endregion
//#region homeTask2
// function mutateAI(userText,userCharAI) {
//     let text = String(userText)
//     let charAI =String(userCharAI)
//     let mutatedText =``
//     if (charAI.length>1) {
//         console.log(`nonono`);
//     }
//     if (text===""&&charAI ==="") {
//         console.log(`your input is wrong~`);
//         return
//     } else if((text===""&&charAI !=="")||(text!==""&&charAI ==="")){
//         console.log(`empty`);
//         return
//     }
//     else{
//         for (let i = 0; i <= text.length-1; i++) {
//             text[i]=charAI
//             mutatedText+=charAI
//         }
//         console.log(mutatedText);
//         return mutatedText
//     }
// }
//  mutateAI(`235tucyn73`,`z`)
//#endregion
//#region homeTask3
// function getNumberFromString(number) {
//   let numberStr = String(number);
//   let result = "";
//   for (let i = 0; i < numberStr.length; i++) {
//     if (!isNaN(numberStr[i])) {
//       result += numberStr[i];
//     }
//   }
//   console.log(result);
//   return result;
// }
// getNumberFromString("3c2buc24hs");
//#endregion

//#region homeTask4
// function remove(input) {
//     let text = String(input)
//     let result = ``
//     for (let i = 0; i < text.length; i++) {
//         if (text[i]===`!`) {
//             result = text.replace(`!`, ``)
//         }
//     }
//     console.log(result);
//     return result
// }
// remove(`!nvjh!jhdfsh!!`)
// function removeAndAddExclamation(input) {
//     let text = String(input);
//     let text1 = text.replace(/!/g, '');
//     let result = text1 + '!';
//     console.log(result);
//     return result;
// }
// removeAndAddExclamation('!nvjh!jhdfsh!!');
//#endregion

//#region homeTask5
// function removeNumbers(userInput) {
//     let text = String(userInput)
//     let result = ``
//     for (let i = 0; i <text.length; i++) {
//         if (isNaN(text[i])) {
//             result+=text[i]
//         }
//     } console.log(result);
//     return result
// }
// removeNumbers(`34i5c4b7vk0tynb`)
//#endregion
//#region homeTask6
// function zeroOne(userInput) {
//     let text = String(userInput);
//     let result = '';
//     for (let i = 0; i < text.length; i++) {
//         if (i % 2 === 0) {
//             result += '1';
//         } else {
//             result += '0';
//         }
//     }
//     console.log(result);
//     return result;
// }
// zeroOne('nscgkhdgbvk')
//#endregion

//#region homeTask7
// not sure if numbers and special characters are included,so ignoring that part
// function checkCaps(userInput) {
//   let text = String(userInput);
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === text[i].toUpperCase()) {
//     } else {
//         console.log(false);
//         return false
//     }
//   }console.log(`true`);
// }
// checkCaps(`WRTYTRW e`);
//#endregion

//#region homeTask8
// function repeat(n, s) {
//     let integer = String(n)
//     let result = ``
//     for (let i = 1; i <=s ; i++) {
//         result+=n
//     }
//     console.log(result);
//     return result
// }
// repeat(235, 4)
//#endregion

//#region homeTask9
// function reverse(userInput) {
//     let text = String(userInput)
//     let result = ``
//     for (let i = 0; i < text.length; i++) {
//         text[i]=text[-i]
//         result+=text[i]
//     }console.log(result);
//     return result
// }
// reverse(`abc`)

// for reverse text need to write a reverse for 

// function reverse(userInput) {
//     let text = String(userInput);
//     let result = '';
//     for (let i = text.length - 1; i >= 0; i--) {
//         result += text[i];
//     }
//     console.log(result);
//     return result;
// }
// reverse(`rtjg`)
//#endregion

//#region homeTask10
// function removeSpace(userInput) {
//     let text = String(userInput)
//     let result =``
//     for (let i = 0; i < text.length; i++) {
//         if (text[i]!==` `) {
//             result+=text[i]
//         }
//     }console.log(result);
//     return result
// }
// removeSpace(`          sejrh          frj     awrv432 53256&^*&^&`)
//#endregion