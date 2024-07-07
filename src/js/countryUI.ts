import { Country } from "./tyoesCountry";
const countryBlock = document.querySelector(".country-block");


export function countryUI(data: Country[]) {
  const countryBlock = document.querySelector(".country-block");

  countryBlock.innerHTML = ""

  data.forEach((el) => {
    const name = el.name.common;
    const capital = el.capital[0];
    const region = el.region;
    const population = el.population;
    const flag = el.flags.svg;

    countryBlock.innerHTML += `
    <div class="country">
        <div class="country-img">
        <img src=${flag} alt=${name}>
        </div>
        <div class="country-info">
            <h2 class="country-name">Name: ${name}</h2>
            <h2 class="country-capital">Capital: ${capital}</h2>
            <h2 class="country-region">Region: ${region}</h2>
            <h2 class="country-population">Population: ${population}</h2>
        </div>
        <a href="./pages/detail.html?country=${name}" class="country-link"></a>
    </div>`;
  });
}
