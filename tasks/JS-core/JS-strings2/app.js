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
