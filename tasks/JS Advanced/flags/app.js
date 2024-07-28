const URL = "https://restcountries.com/v3.1/all";
const countriesTemplate = document.getElementById("countries-template");
const container = document.getElementById("countries-container");
const search = document.getElementById("search");

let countries = [];

search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  countries.forEach((country) => {
    const isVisible =
      country.name.toLowerCase().includes(value) ||
      (country.capital && country.capital[0].toLowerCase().includes(value));
    country.element.classList.toggle("hidden", !isVisible);
  });
});

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
