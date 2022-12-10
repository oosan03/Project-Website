const root = document.querySelector(":root");

const fonts = ["Arial", "Times New Roman", "Helvetica", "Verdana", "Tahoma", "Geneva", "Trebuchet MS", "Courier New", "Lucida Console", "Lucida Sans Unicode", "Brush Script M7", "Copperplate", "Papyrus", "Garamond", "Lucida Handwriting"];

// paragraph one random styles
const paragraphOne = document.querySelector('.paragraph-one');

const paragraphOneBtn = document.querySelector('.btn-one');

paragraphOneBtn.onclick = () => 
{
    root.style.setProperty('--color', randomColor());
    root.style.setProperty('--bg-color', randomColor());
    root.style.setProperty('--px-values', randomNumber(80, 0) + "px");
    root.style.setProperty('--font-family', fonts[randomNumber(14, 0)]);
    root.style.setProperty('--btn-color', randomColor());
    root.style.setProperty('--btn-text', randomColor())
}

const paragraphTwo = document.querySelector('.paragraph-two');
const paragraphTwoBtn = document.querySelector('.btn-two');

paragraphTwoBtn.onclick = () => 
{
    root.style.setProperty('--color1', randomColor());
    root.style.setProperty('--bg-color1', randomColor());
    root.style.setProperty('--px-values1', randomNumber(80, 0) + "px");
    root.style.setProperty('--font-family1', fonts[randomNumber(14, 0)]);
    root.style.setProperty('--btn-color1', randomColor());
    root.style.setProperty('--btn-text1', randomColor())
}

const paragraphThree = document.querySelector('.paragraph-three');
const paragraphThreeBtn = document.querySelector('.btn-three');

paragraphThreeBtn.onclick = () => 
{
    root.style.setProperty('--color2', randomColor());
    root.style.setProperty('--bg-color2', randomColor());
    root.style.setProperty('--px-values2', randomNumber(80, 0) + "px");
    root.style.setProperty('--font-family2', fonts[randomNumber(14, 0)]);
    root.style.setProperty('--btn-color2', randomColor());
    root.style.setProperty('--btn-text2', randomColor());
}

// click all button;
const allButton = document.querySelector('.all-button');
const week14Body = document.querySelector('#week14-body');

allButton.onclick = () => {
    paragraphOneBtn.click();
    paragraphTwoBtn.click();
    paragraphThreeBtn.click();
    root.style.setProperty('--bg-body', randomHSL());
}


// Pass in a range and get a random number back between the given range;
function randomNumber(range, min) {
    num = Math.floor(Math.random() * (range + 1));
    while (num < min) {
        num += Math.floor(Math.random() * 10)
    }
    while (num > range) {
        num -= Math.floor(Math.random() * 10);
    }
    return num;
}

// Generate a random hex code
function randomColor() {
    let code = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + code.slice(0, 6);
}

// Random HSL generator
function randomHSL() {
    return `
    hsl(${randomNumber(360, 0)}, 30%, 30%)
    `
}

