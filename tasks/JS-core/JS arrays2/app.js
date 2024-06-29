//#region homeTask1
// let numbers = [12, 32, 235, 15, 1, 6, 5, 213, 14];
// console.log(Math.max(...numbers));
//#endregion

//#region homeTask2
// let employees = [
//   ["Jaylee Macy", "marketing"],
//   ["John Smith", "management"],
//   ["Blossom Hartley", "design"],
//   ["Austin Carpenter", "marketing"],
//   ["Joan Knowles", "development"],
//   ["Sally Nunez", "management"],
//   ["Laurel Ward", "development"],
//   ["Lark Simon", "marketing"],
//   ["Jane Stone", "management"],
//   ["Courtney Olson", "development"],
// ];
// let developers = [];
// function findDevelopers(employees) {
//   employees.forEach((element) => {
//     if (element.includes(`development`)) {
//       developers.push(element);
//     }
//   });
//   console.log(developers);
//   return developers;
// }
// findDevelopers(employees);
//#endregion

//#region homeTask3
// let array = [
//   1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45,
//   22,
// ];
// numArray.sort(function (a, b) {
//   return a - b;
// });
// console.log(numArray);
// #endregion

//#region homeTask4
// let numbers = [12, -32, 235, 15, 1, 6, 5, 213, 14];
// let num = numbers.splice(`,`)
// let result = []
// console.log(num);
// console.log(numbers);
// function findNegative(num) {
//     for (let i = 0; i < num.length; i++) {
//         if (Math.min(...num)<0) {
//             result+= unshift()
//         }
//     }console.log(result);
//     return result
// }

// findNegative(numbers)
// let numbers = [12, -32, 235, 15, 1, 6, -5, 213, 14];
// let result = [];
// function facilis(numbers) {
//   numbers.forEach((element) => {
//     if (element < 0) {
//       result.unshift(element);
//     } else {
//       return;
//     }
//   });
//   if (result.length>0) {
//     console.log(result);
//     return result;
//   }else{
//     console.log(`you have not eneterd any negative numbers`);
//   }
// }
// facilis(numbers);
//#endregion

// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// names.forEach(printWithDashes);
// names.forEach(printWithHearts);
// names.forEach(printWithIndex);
// function printWithDashes(text) {
//     console.log(`------------\n${text}\n------------`);
// }
// function printWithHearts(text) {
//     console.log(`<3<3<3<3<3<3<3<3<3<3<3<3\n${text}\n<3<3<3<3<3<3<3<3<3<3<3<3`);
// }
// function printWithIndex(text) {
//     console.log(`${names.indexOf(text)} - ${text}`);
// }
// printWithDashes(names)
// printWithHearts(names)
// printWithIndex(names)
//#region homeTask5

//#endregion

//#region homeTask6
// function kebabToUpper(userInput) {
//     const input = String(userInput)
//     const upper = input.toUpperCase().split('-').join(`_`)
//     console.log(upper);
// }
// kebabToUpper(`erjkgwh-ewge-gew`)
//#endregion

// #region homeTask7
// const input = [1, 5, -7, 3, -9, 4, -6, 2];
// const output = input.map(changed);
// function changed(value, index, array) {
//   if (value < 0) {
//     return Math.abs(value);
//   } else {
//     return value * 2;
//   }
// }
// console.log(output);
//#endregion

//#region homeTask8
// let namesArray = [
//   "Alice",
//   "Bob",
//   "Catherine",
//   "David",
//   "Eva",
//   "Andrew",
//   "Frank",
//   "Anna",
//   "George",
//   "Alex",
// ];
// const aNames = namesArray.filter(filterNames);
// function filterNames(value, index, array) {
//     if (value[0]===`A`) {
//         return value
//     }
// }
// console.log(aNames);
//#endregion

//#region homeTask9
// const pricesArray = [
//   12.99, 24.95, 9.99, 34.5, 19.99, 42.75, 8.49, 15.0, 28.75, 10.99,
// ];
// const pricesAndTaxes = pricesArray.map((priceAndTax)=>{
//     function priceAndTax( index, array) {
//         pricesArray.forEach((value) => {
//             return `Price =${value} and tax is ${20/100*value}`
//         });
//     }
// })

// console.log(pricesAndTaxes);
// #endregion

// let priceAndTax = pricesArray.map((price)=>{
//     return `Price =${+price} and tax is ${+20/100*price}`

// })
// console.log(priceAndTax);
//#endregion

//#region homeTask10
// let salary = [
//   [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//   [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//   [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//   [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
// ];

// let salaryEach = []
// function getAnnualSalary() {
//   let annualSalary = 0;
//   salary.forEach((array) => {
//     array.forEach((value) => {
//       annualSalary += value;
//     });  return annualSalary
//   });
//   salary.map((salaries)=>{
//     val.forEach
//     return {first :}
//   })
//   function salaries(annualSalary) {
//     return salaryEach.push(annualSalary)
//   }
// }
// console.log(getAnnualSalary());

//#endregion
//#region homeTask10
//#region homeTask10
// let salary = [
//   [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//   [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//   [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//   [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
// ];
// function getSalaries(salary) {
//     let result
//     let salaries= []
//     salary.forEach(array => {
//         result=0    //now each time salary counting will start from 0
//         array.forEach(element => {
//             result+=element
//         });return salaries.push({result})
//     });
//     console.log(salaries);
// }
// function getMonthlySalary(month) {
//     let monthlySalary=[]
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     salary.forEach(array => {
//              monthlySalary.push(`salary for ${months[month-1]} is ${array[month-1]}`)
//     });console.log(monthlySalary);
//     return
// }
// function getQuarterSalary(param) {
//   let quarterSalary = [];
//   let quarterResult =0
//   let sliceResult
//   salary.forEach((array) => {
//     sliceResult=0
//     switch (param) {
//       case 1:
//         quarterSalary.push(array.slice(0, 3));
//         break;
//       case 2:
//         quarterSalary.push(array.slice(3, 6));
//         break;
//       case 3:
//         quarterSalary.push(array.slice(6, 9));
//         break;
//       case 4:
//         quarterSalary.push(array.slice(9, 12));
//         break;
//     }array.forEach(element => {
//       sliceResult+=element
//     });return quarterResult+=sliceResult
//   });console.log(quarterResult);   
  
//   return quarterResult;
// }
// getSalaries(salary)
// getMonthlySalary(2)
// getMonthlySalary(3)
// getQuarterSalary(2);

