const URL = "https://restcountries.com/v3.1/all";
let countries= []

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
 data.forEach(element => {
    const a =document.querySelectorAll(".cards")
    a.forEach(e => {
        e.addEventListener("click",swapPage)
        e.addEventListener("click",showDetail)
    });
  });
  
  })
function swapPage() {
    const removeElement = el => el.parentNode.removeChild(el);
    document.querySelectorAll('.cards').forEach(element => {
        removeElement(element);
    })
    }
function showDetail() {
    const value = search.value.toLowerCase();
    countries.forEach((country) => {
      const isVisible =
        country.name.toLowerCase().includes(value) ||
        (country.capital && country.capital[0].toLowerCase().includes(value));
      country.element.classList.toggle("hidden", !isVisible);
    });
}