import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", () => {
    console.log("hello from index.js");
    let div = document.querySelector("div");
    let ex = new Example(div);

})