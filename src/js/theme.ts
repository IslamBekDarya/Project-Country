const checkBox = <HTMLInputElement>document.getElementById("input-checkbox");
const labelTheme = document.querySelector(".label-them");
const html = document.querySelector("html");
const themeDataStorage = "data-theme"

const theme = window.localStorage.getItem(themeDataStorage);
checkBox.checked = theme === "dark" ? true : false;

if (theme === null) {
    localStorage.setItem(themeDataStorage, "light")
} 


function checkTheme() {
  if (theme === "light") {
    labelTheme.classList.add("dark");
    localStorage.setItem(themeDataStorage, "light");
    
    
  } else {
    labelTheme.classList.remove("dark");
    localStorage.setItem(themeDataStorage, "dark");
  }
}

checkTheme();

const colorVars = ["body-bg", "card-bg", "text-color", "title-color"];

checkBox.addEventListener("change", function () {
  if (this.checked) {
    window.localStorage.setItem(themeDataStorage, "dark");
    labelTheme.classList.remove("dark");
    colorVars.forEach((el) => {
      html.style.setProperty(`--${el}-default`, `var(--${el}-dark)`);
    });
  } else {
    window.localStorage.setItem(themeDataStorage, "light");
    labelTheme.classList.add("dark");
    colorVars.forEach((el) => {
      html.style.setProperty(`--${el}-default`, `var(--${el}-light)`);
    });
  }
});
