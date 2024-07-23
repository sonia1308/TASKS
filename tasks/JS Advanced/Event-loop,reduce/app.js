// const products = [
//   {
//     id: 1,
//     title: "iPhone 9",
//     description: "An apple mobile which is nothing like apple",
//     price: 549,
//     category: "smartphones",
//   },
//   {
//     id: 2,
//     title: "iPhone X",
//     description:
//       "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//     price: 899,
//     category: "smartphones",
//   },
//   {
//     id: 3,
//     title: "Samsung Universe 9",
//     description:
//       "Samsung's new variant which goes beyond Galaxy to the Universe",
//     price: 1249,
//     category: "smartphones",
//   },
//   {
//     id: 4,
//     title: "OPPOF19",
//     description: "OPPO F19 is officially announced on April 2021.",
//     price: 280,
//     category: "smartphones",
//   },
//   {
//     id: 5,
//     title: "Huawei P30",
//     description:
//       "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//     price: 499,
//     category: "smartphones",
//   },
//   {
//     id: 6,
//     title: "MacBook Pro",
//     description:
//       "MacBook Pro 2021 with mini-LED display may launch between September, November",
//     price: 1749,
//     category: "laptops",
//   },
//   {
//     id: 7,
//     title: "Samsung Galaxy Book",
//     description:
//       "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
//     price: 1499,
//     category: "laptops",
//   },
//   {
//     id: 8,
//     title: "Microsoft Surface Laptop 4",
//     description:
//       "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
//     price: 1499,
//     category: "laptops",
//   },
//   {
//     id: 9,
//     title: "Infinix INBOOK",
//     description:
//       "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
//     price: 1099,
//     category: "laptops",
//   },
//   {
//     id: 10,
//     title: "HP Pavilion 15-DK1056WM",
//     description:
//       "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
//     price: 1099,
//     category: "laptops",
//   },
// ];

// const total = products.reduce((prev, current) =>  prev + current.price, 0
// );

// console.log(total);

//#region homeTask 1

// function shoppingSpree(arr) {
//   const a = wishlist.reduce((prev, current) => prev + current.price, 0);
//   console.log(a);
// }

// const wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 },
// ];

// console.log(shoppingSpree(wishlist)); // 227005

// //#endregion

// //#region homeTask2
// let newArr =[]
// function flatten(arr) {
//     arr.forEach(element => {
//         element.forEach(elm => {
//             newArr.push(elm)
//         });
//     });   console.log(newArr);
//  }
//  const arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];

//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
//#endregion

//#region homeTask3

// const voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false },
// ];
// let first = [];
// let second = [];
// let third = [];
// let countOfYoung = 0;
// let countOfMidPeople = 0;
// let countOfOldPeople = 0;
// let voteYoung = 0;
// let voteOld = 0;
// let voteMid = 0;
// function voterResults(arr) {
//   voters.forEach((element) => {
//     if (element.age <= 25) {
//       first.push(element.age);
//       countOfYoung++;

//       if (element.voted === true) {
//         voteYoung++;
//       }
//     } else if (element.age <= 35) {
//       second.push(element.age);
//       countOfMidPeople++;
//       if (element.voted === true) {
//         voteMid++;
//       }
//     } else {
//       third.push(element.age);
//       countOfOldPeople++;
//       if (element.voted === true) {
//         voteOld++;
//       }
//     }
//   });
// //   console.log(voteYoung);
// //   console.log(voteMid);
// //   console.log(voteOld);
// //   console.log(countOfYoung);
// //   console.log(countOfMidPeople);
// //   console.log(countOfOldPeople);
// //   console.log(first);
// //   console.log(second);
// //   console.log(third);
//   console.log(`there are ${countOfYoung} young people of ages ${first} ,and ${voteYoung} of them have voted`);
//   console.log(`there are ${countOfMidPeople} middle age people of ages ${second} ,and ${voteMid} of them have voted`);
// console.log(`there are ${countOfOldPeople} old people of ages ${third} ,and ${voteOld} of them have voted`);
//  }voterResults(voters);
// // Returned value shown below:
// // { numYoungVotes: 1,
// //   numYoungPeople: 4,
// //   numMidVotesPeople: 3,
// //   numMidsPeople: 4,
// //   numOldVotesPeople: 3,
// //   numOldsPeople: 4 
// // }