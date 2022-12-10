// Ride Height Check Scripts START

// Set display to none for input fields
aloneREF = document.getElementById("rideChoiceAlone");
guardianREF = document.getElementById("rideChoiceGuardian");
btnSubmit = document.getElementById("rideHeightSubmitbtn");

aloneREF.style.display = "none";
guardianREF.style.display = "none";
btnSubmit.style.display = "none";

// Grab btns and display inputs upon btn click
btnAlone = document.querySelector("#ridingAlone");
btnGuardian = document.querySelector("#ridingWGuardian");

btnAlone.addEventListener('click', () => {
    aloneREF.style.display = "block";
    guardianREF.style.display = "none";
    btnSubmit.style.display = "block";
    output.innerHTML = "";
    userHeightAlone.value = null;
    userHeight.value = null;
    guardianHeight.value = null;

})

btnGuardian.addEventListener('click', () => {
    guardianREF.style.display = "block";
    aloneREF.style.display = "none";
    btnSubmit.style.display = "block";
    output.innerHTML = "";
    userHeightAlone.value = null;
    userHeight.value = null;
    guardianHeight.value = null;
})

// Function to calculate whether they user is eligible to ride or not
function displayMessage(height) {
    if (userHeightAlone.value == "") return output.innerHTML = "Please enter a height";
    if (height >= 54) {
        return msg = `Congrats! you are able to ride!`;
    }
    else {
        return msg = "Sorry, you must be 54 inches or taller to ride this ride";
    }
}

// Function for height with guardian
function displayMessageGuardian(childHeight, guardianHeight) {
    if (userHeight.value == "") return output.innerHTML = "Please enter both heights.";
    if (childHeight >= 54) {
        return msg = "Congrats! you are able to ride!"
    }
    else if (childHeight >= 32 && guardianHeight >= 54) {
        return msg = "Congrats! you are able to ride with a guardian!";
    }
    else {
        return msg = "Sorry, you have to be 32 inches or taller and a gaurdian must be 54 inches or taller.";
    }
}

// Submit btn click event
output = document.querySelector("#displayResults");
userHeightAlone = document.querySelector("#heightAlone");
userHeight = document.querySelector("#height");
guardianHeight = document.querySelector("#Gheight");

btnSubmit.addEventListener('click', () => {
    msg = "";

    if (guardianHeight.value) {
        msg = displayMessageGuardian(userHeight.value, guardianHeight.value);
    }
    else if (userHeightAlone) {
        msg = displayMessage(userHeightAlone.value);
    }

    output.innerHTML = msg;
})

// Ride Height Check Scripts END

// Discount Day Scripts START

// Get day of week
const date = new Date();
let day = date.getDay();

// Grab subtotal and submit btn
let subtotal = document.querySelector("#subtotal");
let btnDiscount = document.querySelector("#btnDiscount");
let discountMsg = document.querySelector("#discountOutput");

// Discount btn submit event
btnDiscount.addEventListener('click', () => {
    if (subtotal.value == "") return discountMsg.innerHTML = "Please enter a subtotal value!";
    if (day === 0 || day === 6) {
        let msg = discounts(subtotal.value, day);

        discountMsg.innerHTML = msg;
    }
    else {
        let total = parseInt(subtotal.value) + (subtotal.value * .08);

        discountMsg.innerHTML = `Sorry, today is currently not a Saturday or a Sunday.<br> So no discount can be applied.<br> Your total is: <mark>$${total.toFixed(2)}</mark>`;
    }
})

// Display todays date
let dayRef = document.querySelector('#todaysDate').innerHTML = date.toDateString();

// Function to qualify for discounts
function discounts(subtotal, day) {
    let whatDay;

    switch (day) {
        case 0:
            whatDay = "Sunday";
            break;
        case 6:
            whatDay = "Saturday";
            break;
        default:
            whatDay = "Not a Sunday or a Saturday";
    }

    if (subtotal > 50) {
        tmp = subtotal - (subtotal * .10);
        total = tmp + (tmp * .08);
        msg = `Congrats!<br> Today is ${whatDay}.<br><b> You qualified for a discount.</b><br> Your new total is: <mark>$${total.toFixed(2)}</mark>`;

        return msg;
    }

    else if (subtotal <= 50) {
        difference = 51 - subtotal;
        total = parseInt(subtotal) + (subtotal * .08);
        msg = `Congrats!<br> Today is ${whatDay}!<br> <b>Add $${difference} to qualify for a discount</b><br> Your total is: <mark>$${total.toFixed(2)}</mark>`

        return msg;
    }
}

// Discount Day Scripts END
