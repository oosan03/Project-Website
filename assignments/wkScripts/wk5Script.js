


// Week 5 Assignment
initQuantValue = 0;
initQuantValue3 = 0;
initQuantValue5 = 0;
cost = 0;
cost3 = 0;
cost5 = 0;



function quantityChange() {
    increment = document.getElementById("incrementQuantity");
    if (increment) {
        increment.addEventListener('click', function () {
            incrementQuantity();
        })
    };

    decrement = document.getElementById("decrementQuantity");
    if (decrement) {
        decrement.addEventListener('click', function () {
            decrementQuantity();
        })
    };

    increment3 = document.getElementById("incrementQuantity3");
    if (increment3) {
        increment3.addEventListener('click', function () {
            incrementQuantity3();
        })
    };

    decrement3 = document.getElementById("decrementQuantity3");
    if (decrement3) {
        decrement3.addEventListener('click', function () {
            decrementQuantity3();
        })
    };

    increment5 = document.getElementById("incrementQuantity5");
    if (increment5) {
        increment5.addEventListener('click', function () {
            incrementQuantity5();
        })
    };

    decrement5 = document.getElementById("decrementQuantity5");
    if (decrement5) {
        decrement5.addEventListener('click', function () {
            decrementQuantity5();
        })
    };
}
// Incremting quantity count
function incrementQuantity() {
    quantityValue = document.getElementById("twoPoundBag");
    initQuantValue++;
    quantityValue.value = initQuantValue;
    cost = initQuantValue * 10;
}
// Decrementing quantity count
function decrementQuantity() {
    if (initQuantValue >= 1) {
        quantityValue = document.getElementById("twoPoundBag");
        initQuantValue--;
        quantityValue.value = initQuantValue;
    }
    cost = initQuantValue * 10;
}

function incrementQuantity3() {
    quantityValue = document.getElementById("threePoundBag");
    initQuantValue3++;
    quantityValue.value = initQuantValue3;
    cost3 = initQuantValue3 * 12;
}
// Decrementing quantity count
function decrementQuantity3() {
    if (initQuantValue3 >= 1) {
        quantityValue = document.getElementById("threePoundBag");
        initQuantValue3--;
        quantityValue.value = initQuantValue3;
    }
    cost3 = initQuantValue3 * 12;
}

function incrementQuantity5() {
    quantityValue = document.getElementById("fivePoundBag");
    initQuantValue5++;
    quantityValue.value = initQuantValue5;
    cost5 = initQuantValue5 * 20;
}
// Decrementing quantity count
function decrementQuantity5() {
    if (initQuantValue5 >= 1) {
        quantityValue = document.getElementById("fivePoundBag");
        initQuantValue5--;
        quantityValue.value = initQuantValue5;
    }
    cost5 = initQuantValue5 * 20;
}

function checkout() {
    btnCheckout = document.getElementById("checkout");
    week5Output = document.getElementById("week5Output");
    btnCheckout?.addEventListener('click', function () {
        totalCost = cost + cost3 + cost5
        week5Output.innerHTML = "Total Cost: $" + totalCost.toFixed(2);
        btnFinalCheckoutDisplay = document.getElementById("finalCheckout").style.display = 'block';
    })

}

function finalCheckout() {
    btnFinalizeCheckout = document.getElementById("finalCheckout");
    btnFinalizeCheckout?.addEventListener('click', function () {
        subtotal = cost + cost3 + cost5;
        totalWeight = (initQuantValue * 2) + (initQuantValue3 * 3) + (initQuantValue5 * 5);
        discounts = discountCheck(subtotal);
        shippingCost = shippingCosts(totalWeight);
        finalTotal = subtotal - discounts + shippingCost;
        output = document.getElementById("finalCheckoutDisplay");
        output.innerHTML = "Subtotal: $" + subtotal.toFixed(2) + "<br>Discounts: <mark>-$" + discounts.toFixed(2) + "</mark><br>" + "Shipping Costs: $" + shippingCost.toFixed(2) + "<br><b>Total: $" + finalTotal.toFixed(2) + "</b>";

        btnCheckout = document.getElementById("checkout");
        week5Output = document.getElementById("week5Output");
        totalCost = cost + cost3 + cost5
        week5Output.innerHTML = "Total Cost: $" + totalCost.toFixed(2);
    })
}

function discountCheck(totalCost) {
    if (totalCost <= 49) {
        total = 0;
    }
    else if (totalCost >= 50 && totalCost <= 99) {
        total = totalCost * .02;
    }
    else if (totalCost >= 100 && totalCost <= 499) {
        total = totalCost * .05;
    }
    else if (totalCost >= 500) {
        total = totalCost * .08;
    }
    return total;
}

function shippingCosts(totalWeight) {
    if (totalWeight <= 1.9) {
        shippingCost = 0;
    }
    else if (totalWeight <= 9.9) {
        shippingCost = 8
    }
    else if (totalWeight <= 24.9) {
        shippingCost = 15;
    }
    else if (totalWeight >= 25) {
        difference = totalWeight - 25;
        shippingCost = 15 + difference;
    }

    return shippingCost;
}


window.onload = () => {
    // Setting Date on footer START
    year = new Date();
    footer = document.querySelector("footer");
    if (footer) {
        newSpan = document.createElement("span");
        newSpanContent = document.createTextNode(", " + year.toDateString());
        newSpan.append(newSpanContent);
        footer.appendChild(newSpanContent);
        footer.setAttribute("class", "bold");
        ;
    }
    // Setting Date on footer END
}



quantityChange();
checkout();
finalCheckout();