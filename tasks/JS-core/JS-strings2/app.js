//#region homeTask1
// function checkCheck(argument1, argument2) {
//     let a1 = String(argument1)
//     let a2 = String(argument2)
//     if (a1.endsWith(a2)) {
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// checkCheck(`abc`,`bc`)
//#endregion

//#region homeTask2
// function checkCase(userInput) {
//     let text= String(userInput)
//     let upperCase =0
//     let lowerCase = 0
//     let output =``
//     for (let i = 0; i < text.length; i++) {
//         if (text[i]===text[i].toUpperCase()) {
//             upperCase++
//         }
//         else  {
//             lowerCase++
//         }
//     }
//     if (upperCase===lowerCase) {
//         output = text.toLowerCase()
//         console.log(output);
//     }else if (upperCase>lowerCase) {
//         output = text.toUpperCase()
//         console.log(output);
//     }else if (upperCase<lowerCase) {
//         output = text.toLowerCase()
//         console.log(output);
//     } 
//     return output
// }
// checkCase(`aJAFEJH`)
//#endregion

//#region homeTask3
// function merge(userInput1, userInput2, letter) {
//     let text1 = String(userInput1)
//     let text2 = String(userInput2)
//     let l = String(letter)
//     let result = text1.slice(0,text1.indexOf(`l`))+text2.slice(text2.indexOf(`l`),text2.length)
//     console.log(result);
// }
// merge(`hello`,`world`,`l`)
//#endregion

//#region homeTask4
// function uncommon(a,b) {
//     let text1 = String(a)
//     let text2 = String(b)
//     let result=``
//     for (let i = 0; i < text1.length; i++) {
//         if (!text2.includes(text1[i])) {
//             result+=text1[i]
//         }
//     }for (let i = 0; i < text2.length; i++) {
//         if (!text1.includes(text2[i])) {
//             result+=text2[i]
//         }
//     }
//     console.log(result);
//     return result
// }
// uncommon("xyab","xzca")
//#endregion

