const URL = "https://restcountries.com/v3.1/all";
const countriesTemplate = document.getElementById("countries-template");
const container = document.getElementById("countries-container");
const search = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const dropdownRegion = document.querySelectorAll(".dropdown-region");
const darkModeBtn = document.getElementById("dark-mode-btn");

const lightModeBtn = document.getElementById("light-mode-btn");
const switchMode = document.getElementById("switch");

let countries = [];
document.getElementById("search-form").addEventListener("submit", (a) => {
  a.preventDefault();
});
//#region fetch data
fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    countries = data.map((country) => {
      const card = countriesTemplate.content.cloneNode(true).children[0];
      const flag = card.querySelector(".flag");
      const countryName = card.querySelector(".name");
      const region = card.querySelector(".region");
      const population = card.querySelector(".population");
      const capital = card.querySelector(".capital");
      flag.src = country.flags.png;
      flag.alt = `${country.name.common} Flag`;
      countryName.textContent = country.name.common;
      region.innerHTML = `Region: <span class="font-medium">${country.region}</span>`;
      population.innerHTML = `Population: <span class="font-medium">${country.population.toLocaleString()}</span>`;
      capital.innerHTML = `Capital: <span class="font-medium">${
        country.capital ? country.capital[0] : "N/A"
      }</span>`;
      container.appendChild(card);
      return {
        flag: country.flags.png,
        name: country.name.common,
        region: country.region,
        population: country.population,
        capital: country.capital,
        element: card,
      };
    });
  })
  .catch((error) => {
    console.error("Error fetching country data:", error);
  });


//#endregion
//#region search
searchBtn.addEventListener("click", (e) => {
  const value = search.value.toLowerCase();
  countries.forEach((country) => {
    const isVisible =
      country.name.toLowerCase().includes(value) ||
      (country.capital && country.capital[0].toLowerCase().includes(value));
    country.element.classList.toggle("hidden", !isVisible);
  });
});
dropdownRegion.forEach((dropdownRegions) => {
  dropdownRegions.addEventListener("click", filterRegions);
  function filterRegions() {
    countries.forEach((country) => {
      const isVisible = country.region.includes(dropdownRegions.innerText);
      country.element.classList.toggle("hidden", !isVisible);
    });
  }
});
//#endregion
//#region dark mode
// if (
//   localStorage.theme === "dark" ||
//   (!("theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   document.documentElement.classList.add("dark");
// } else {
//   document.documentElement.classList.remove("dark");
// }

// darkModeBtn.addEventListener("click", darkMode);
// lightModeBtn.addEventListener("click", lightMode);
// function darkMode() {
//   body.classList.toggle("dark");
//   darkModeBtn.classList.add("hidden");
//   lightModeBtn.classList.remove("hidden");
//   console.log();
//   localStorage.setItem("status", true);
// }
// function lightMode() {
//   body.classList.toggle("dark");
//   lightModeBtn.classList.add("hidden");
//   darkModeBtn.classList.remove("hidden");
//   console.log();
//   localStorage.setItem("status", true);
// }

document.addEventListener("DOMContentLoaded", () => {
  const mode = localStorage.getItem("mode") || "light";
  document.querySelector("html").classList.add(mode);
  const btn = document.querySelector("#dark-mode-btn");
  btn.innerHTML = mode === "light" ? "Dark Mode" : "Light Mode";
});
const btn = document.querySelector("#dark-mode-btn");
btn.addEventListener("click", () => {
  const currentMode = localStorage.getItem("mode") || "light";
  const newMode = currentMode === "light" ? "dark" : "light";
  localStorage.setItem("mode", newMode);
  document.querySelector("html").classList.remove(currentMode);
  document.querySelector("html").classList.add(newMode);
  btn.innerHTML = newMode === "light" ? " Dark Mode" : "Light Mode";
});
//#endregion
