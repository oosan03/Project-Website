let btn = document.getElementById('btnSession');
let btnClearSession = document.getElementById('btnClearSession');
let names = document.getElementById('name');
let food = document.getElementById('food');
let color = document.getElementById('color');
let msg = document.getElementById('msgOutput');

btn.onclick = () => {
    if (names.value === "" || food.value === "" || color.value === "") {
        msg.innerHTML = "Please enter name, food and color";
        return;
    };
    localStorage.setItem('name', names.value);
    localStorage.setItem('food', food.value)
    localStorage.setItem('color', color.value);
    names.value = "";
    food.value = "";
    color.value = "";
    msg.innerHTML = "Great, now refresh the page!";
}

btnClearSession.onclick = () => {
    localStorage.clear();
    msg.innerHTML = "Refresh the page, localStorage cleared.";
}

window.onload = () => {
    // localStorage.clear();
    let tempName = localStorage.getItem('name')
    let tempfood = localStorage.getItem('food')
    let tempcolor = localStorage.getItem('color')
    let inclusive = typeof tempName === "string";

    if (inclusive) {
        msg.innerHTML = `Welcome back ${tempName}!<br>Your favorite food is ${tempfood}!<br>Your favorite color is ${tempcolor}!`

    }
    else {
        msg.innerHTML = "Enter user information to store into localStorage";
    }

}