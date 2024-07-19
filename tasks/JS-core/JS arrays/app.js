// #region homeTask1-2
// let groupmates = [`person-a`, `person-b`, `person-c`];
// groupmates.push(`person-d`);
// groupmates.shift();
// console.log(groupmates);
// groupmates[1] = `Classified`;
// console.log(groupmates);
//#endregion

// #region homeTask3
// const numbers = [12, 432, 13, 765, 22];
// console.log(numbers);
// let newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   newNumbers.push(+numbers[i] * 2);
// }
// console.log(newNumbers);
// console.log(numbers);
// // #endregion

// // #region homeTask4
// let arr = ["New Hope", "The Empire Strikes Back", "Return of the Jdi"];
// let episode4 = `Episode 4: ${arr[0]}`;
// console.log(episode4);
// let episode5 = `Episode 5: ${arr[1]}`;
// console.log(episode5);
// let episode6 = `Episode 6: ${arr[2]}`;
// console.log(episode6);
//#endregion

// #region homeTask5
// let userInput = prompt(`enter your numbers seperated with ,`);
// const numbers = userInput.split(`,`);
// let result = Math.min(...numbers);
// console.log(result);
// #endregion

// // #region homeTask6
// let numbers = [32, 31, 34, 36, 31];
// console.log(numbers.join(`;`));
// // #endregion

// // #region extra tasks
// // 1. İki array verilib. Bu iki array-i birləşdirin və təkrarlanan elementləri aradan qaldırın.
// let array1 = [1, 2, 3, 4, 5, 6, 7];
// let array2 = [2, 4, 6, 8, 10, 12];
// let result = [];
// for (let i = 0; i < array1.length; i++) {
//   if (array2.includes(array1[i])) {
//     array1.splice(i, 1);
//   }
//   if (!array1.includes(array2[i])) {
//     array2.splice(i, 1);
//   }
// }
// result = array1.concat(array2);
// console.log(result);

// 2.İki array verilib. Bu iki array-dən yalnızca ilk array-də olub, ikinci array-də isə olmayan elementləri tapın.
// let array1 = [1, 2, 3, 4, 5, 6, 7];
// let array2 = [2, 4, 6, 8, 10, 12];
// for (let i = 0; i < array1.length; i++) {
//   if (array2.includes(array1[i])) {
//     array1.splice(i, 1);
//   }
// }
// console.log(array1);

// 3. Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri qaytaran sortArray() funksiyasını yazın.
// let numArray = [
//   1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45,
//   22,
// ];
// numArray.sort(function (a, b) {
//   return a - b;
// });
// console.log(numArray);

// 4.Rəqəmlər massivini parametr kimi qəbul edən və əgər həmin massivdə mənfi ədədlər varsa onları massiv şəklində geri qaytaran, yoxdursa uyğun mesajı geri funksiya yazın.
// let array = [1, 2, 3, 4, 5];
// function numNegative(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       result.push(array[i]);
//     }
//   }
//   if (result.length==0) {
//     return "Massivde menfi ededler yoxdur";
//   }
//   return result;
// }
// console.log(numNegative(array));
// #endregion

// 5.Kebab-case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə çevirən kebabToUpper() funksiyasını yazın.
// function kebabToUpper(userInput) {
//     const input = String(userInput)
//     const upper = input.toUpperCase().split('-').join(`_`)
//     console.log(upper);
// }
// kebabToUpper(`erjkgwh-ewge-gew`)

//6.Orijinal massivin elementlərindən ibarət yeni massiv yaradın.
// Rəqəmlər massivi verilmişdir. Aşağıdakı qaydalarla dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:
// mənfi ədədlər müsbət olublar;
// müsbət ədədlər ikiqat artırılıb.
// const array1 =   [1, 5, -7, 3, -9, 4, -6, 2];
// // Output: [2, 10, 7, 6, 9, 8, 6, 4]
// function changeArray(array) {
//       let result = [];
//       for (let i = 0; i < array.length; i++) {
//         if (array[i] < 0) {
//           result.push(Math.abs(array[i]));
//         }else{
//             result.push(array[i]*2)
//         }
//       }
//       return result;
//     }
//     console.log(changeArray(array1));
//#endregion

//#region inLessonTask


// const array = [
//     {
//       postId: 1,
//       id: 1,
//       name: "id labore ex et quam laborum",
//       email: "Eliseo@gardner.biz",
//       body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//     },
//     {
//       postId: 1,
//       id: 2,
//       name: "quo vero reiciendis velit similique earum",
//       email: "Jayne_Kuhic@sydney.com",
//       body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//     },
//     {
//       postId: 1,
//       id: 3,
//       name: "odio adipisci rerum aut animi",
//       email: "Nikita@garfield.biz",
//       body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
//     },
//     {
//       postId: 1,
//       id: 4,
//       name: "alias odio sit",
//       email: "Lew@alysha.tv",
//       body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
//     },
//     {
//       postId: 1,
//       id: 5,
//       name: "vero eaque aliquid doloribus et culpa",
//       email: "Hayden@althea.biz",
//       body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
//     },
//     {
//       postId: 2,
//       id: 6,
//       name: "et fugit eligendi deleniti quidem qui sint nihil autem",
//       email: "Presley.Mueller@myrl.com",
//       body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
//     },
//     {
//       postId: 2,
//       id: 7,
//       name: "repellat consequatur praesentium vel minus molestias voluptatum",
//       email: "Dallas@ole.me",
//       body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
//     },
//     {
//       postId: 2,
//       id: 8,
//       name: "et omnis dolorem",
//       email: "Mallory_Kunze@marie.org",
//       body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
//     },
//     {
//       postId: 2,
//       id: 9,
//       name: "provident id voluptas",
//       email: "Meghan_Littel@rene.us",
//       body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus",
//     },
//     {
//       postId: 2,
//       id: 10,
//       name: "eaque et deleniti atque tenetur ut quo ut",
//       email: "Carmen_Keeling@caroline.name",
//       body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
//     },
//   ];
//   let newArray= array.map((element) => ( {name:element.name ,email:element.email }))
// console.log(newArray);
//#endregion

//#region extraTasks


//#endregion