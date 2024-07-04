// console.dir((document.body.firstElementChild.computedStyleMap.backgroundColor = `${rangb}`))
// function rangb() {
//     let colourNames= ''
//     for (let i = 1; i <= 3; i++) {
//         colourNames+= `${Math.ceil(Math.random()*255)}`;
//     }
//     return`rgb${colourNames}`
// }
// console.dir((document.body.style.backgroundColor=rangb()))
// const links =document.getElementsByClassName('link')
// const navbarItems = ["Home", "Products", "About", "Contact", "Login"];
// for (let i = 0; i < links.length; i++) {
//   links[i].textContent = navbarItems[i];
// }

//#region homeTask1
// const header = document.querySelector('h1');
// const list = header.nextElementSibling;
// const firstListItem = list.querySelector('li');
// console.log(firstListItem.textContent);
//#endregion

//#region homeTask2
// document.querySelector('h1').remove();
// const newListItem = document.createElement('li');
// newListItem.textContent = 'TITAN RTX';
// const list = document.querySelector('ul');
// list.appendChild(newListItem);
//#endregion

//#region homeTask3
// document.querySelector("h1").textContent = "GeForce 20 Series";
// document.querySelectorAll(".primary").forEach((element) => {
//   element.style.backgroundColor = "#ebebeb";
// });
//#endregion

//#region homeTask4
// document.querySelectorAll('.primary').forEach(element => console.log(element));
//#endregion

//#region homeTask5
// document.querySelectorAll("ul li").forEach((element) => {
//   if (!element.classList.contains("primary")) {
//     element.classList.add("secondary");
//   }
// });
// document
//   .querySelectorAll("ul li")
//   .forEach((element) => element.classList.add("item"));
//#endregion
