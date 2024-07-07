const querySearch = window.location.search;

const searchParams = new URLSearchParams(querySearch);
const res = searchParams.get("country")
console.log(res);

