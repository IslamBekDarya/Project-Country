import { server } from "./server";

const selectCountry = document.querySelector(".select-country");

selectCountry.addEventListener("change", (e: any) => {
    server("", e.target.value)
    
})