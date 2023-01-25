const red=document.querySelector(".red");
const green=document.querySelector(".green");
const yellow=document.querySelector(".yellow");
const center=document.querySelector(".center");
const center1=document.getElementsByClassName("center");
console.log(window.getComputedStyle(red));
const magic = (element) => {
    return element.addEventListener("click", () => {
        const color1 = window.getComputedStyle(element).backgroundColor;
        center.style.backgroundColor = color1;
    }, false)
}
const magic1 = (element) => {
    return element.addEventListener("click", () => {
        const color1 = window.getComputedStyle(element).backgroundColor;
        center[1].style.backgroundColor = color1;
    }, false)
}
magic(red);
magic(green);
magic(yellow);
magic1(red);
magic1(green);
magic1(yellow);