const red = 213;
const green = 189;
const blue = 175;

const header = document.getElementById("header");
console.log(header.innerText);

function changeColor () {
    const scrollFactor = 1 + window.scrollY / 900;
    
    const r = red / scrollFactor;
    const g = green / scrollFactor;
    const b = blue / scrollFactor;
   
    const updatedColor = `rgb(${r}, ${g}, ${b})`;

    header.style.backgroundColor = updatedColor;
    console.log(updatedColor)
}
changeColor();

window.addEventListener("scroll", changeColor);