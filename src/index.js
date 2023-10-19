import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", () => {
    console.log("hello from index.js");
    let div = document.querySelector("#main");
    let ex = new Example(div);

})