
// Select Div
const select = document.querySelector("#city-select");
const btn = document.querySelector("#addCitySelect");
const input = document.querySelector("#input-city-select");
const msg = document.querySelector("#msg");

btn.onclick = () => 
{
    if (input.value === "") 
    {
        msg.innerHTML = "Please enter a city name.";
        msg.style.display = "block";
        setTimeout(() => {
            msg.style.display = "none";
        }, 1500)
        return;
    }

    const child = document.createElement("option");
    child.setAttribute("value", input.value);
    child.innerHTML = input.value;
    select.appendChild(child);
    input.value = "";

    msg.innerHTML = "Successfully added city";
    msg.style.display = "block";
    setTimeout(() => 
    {
        msg.style.display = "none";
    }, 1500);

    select.selectedIndex = select.length - 1;

}

// Elimination Game Div
const randMsg = document.querySelector(".randMsg");
const randBtn = document.querySelector(".randBtn");
const list = document.querySelectorAll(".famous-list");

randBtn.onclick = () => 
{
    let childrens = list[0].children;
    const randInt = Math.floor(Math.random() * childrens.length);

    if (childrens.length == 2) randBtn.click();

    if (childrens.length <= 1) 
    {   
        
        return randMsg.innerHTML = "Game over! <b>" + childrens[0].textContent + "</b> won the game!";
    }
    
    randMsg.innerHTML = `Removed <b>${childrens[randInt].textContent}</b> from list, continue.`
    
    childrens[randInt].remove();
    
}

