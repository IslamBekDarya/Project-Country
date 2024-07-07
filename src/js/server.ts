import axios from "axios";
import {countryUI} from "./countryUI"
import { Country } from "./tyoesCountry";
const loading = document.querySelector(".loading");

export async function server(search?:string, select?: string) {
  try {
    loading.classList.add("active");
    const response = await axios.get<Country[]>(
      search 
      ? `https://restcountries.com/v3.1/name/${search}` 
      : select ? `https://restcountries.com/v3.1/region/${select}` 
      : "https://restcountries.com/v3.1/all" 
      );

    if(response.status === 200) {
        countryUI(response.data)
        return
    }
  } catch (error) {
    console.log(error);
  }
  finally{
    loading.classList.remove("active");
  }
}
