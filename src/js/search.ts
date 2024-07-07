import { server } from "./server";

const inputSearch = <HTMLInputElement> document.querySelector(".input-search");

inputSearch.addEventListener("input", function (e: any) {
  onInput(e.target.value);
});

const debounce = (fn: any, delay: number = 1000) => {
  let timerId: NodeJS.Timeout | null = null;
  return (...args: any) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
};

const onInput = debounce(server, 500);
