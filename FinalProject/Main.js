
let miracleExists = false;
let googleExists = false;
let ducklingExists = false;
let lastExists = false;

let miracleCount = 0;
let googleCount = 0;
let ducklingCount = 0;
let lastCount = 0;

const miracleCost = 1500;
const googleCost = 2000;
const ducklingCost = 1700;
const lastCost = 1000;



const btnAll = document.querySelectorAll(".add");

btnAll.forEach((e) => {
    e.onclick = () => {
        // console.log(e.classList[3])

        switch(e.classList[3]) {
            case "btn-miracle":
                miracleExists = true;
            break;
            case "btn-google":
                googleExists = true;
                break;
            case "btn-duckling":
                ducklingExists = true;
            break;
            case "btn-last":
                lastExists = true;
            break;
        }

        let cartItems = document.querySelectorAll(".hidden");

        if(miracleExists) {
            cartItems.forEach((e) => {
                if (e.classList.contains("miracle")) {
                    if (e.classList.contains("hidden")) {
                        e.classList.remove("hidden")
                    }
                }
            })
        }

        if(googleExists) {
            
            cartItems.forEach((e) => {
                if (e.classList.contains("google")) {
                    if (e.classList.contains("hidden")) {
                        e.classList.remove("hidden")
                    }
                }
            })
        }

        if(ducklingExists) {
            cartItems.forEach((e) => {
                if (e.classList.contains("duckling")) {
                    if (e.classList.contains("hidden")) {
                        e.classList.remove("hidden")
                    }
                }
            })
        }

        if(lastExists) {
            cartItems.forEach((e) => {
                if (e.classList.contains("last")) {
                    if (e.classList.contains("hidden")) {
                        e.classList.remove("hidden")
                    }
                }
            })
        }
        // Function Definition on Line 72
        incrementCount(e);
        // Function Definition on Line 87
        updateItemCount();
        

    }
})


// Keeps track of item count in cart
function incrementCount(e) {
    switch (e.classList[3]) {
        case "btn-miracle":
            ++miracleCount;
        break;
        case "btn-google":
            ++googleCount
        break;
        case "btn-duckling":
            ++ducklingCount;
        break;
        case "btn-last":
            ++lastCount;
        break;
    }
}

const totalsRef = document.querySelector(".totals-display");
// Update item count in cart

const miracleCounts = document.querySelector(".miracle-count");
const googleCounts = document.querySelector(".google-count");
const ducklingCounts = document.querySelector(".duckling-count");
const lastCounts = document.querySelector(".last-count");

function updateItemCount() {
    // Function Definition on Line 106
    itemCountUpdate();

    totalsRef.innerHTML = `Total: $${calculateTotal()}`;
}

// Individual item count update
function itemCountUpdate() {
    miracleCounts.innerHTML = miracleCount;
    googleCounts.innerHTML = googleCount;
    ducklingCounts.innerHTML = ducklingCount;
    lastCounts.innerHTML = lastCount;
}



const btnDel = document.querySelectorAll(".item-del");

btnDel.forEach((e) => {
    e.onclick = () => {
        switch (e.parentElement.classList[1]) {
            case "miracle":
                e.parentElement.classList.add("hidden");
                miracleCount = 0;
                miracleExists = false;
            break;
            case "google":
                e.parentElement.classList.add("hidden");
                googleCount = 0;
                googleExists = false;
            break;
            case "duckling":
                e.parentElement.classList.add("hidden");
                ducklingCount = 0;
                ducklingExists = false;
            break;
            case "last":
                e.parentElement.classList.add("hidden");
                lastCount = 0;
                lastExists = false;
        }
        totalsRef.innerHTML = `Total: $${calculateTotal()}`;
        
    }
})

// Calculate Total
function calculateTotal() {
    let costMiracle = miracleCost * miracleCount;
    let costGoogle = googleCost * googleCount;
    let costDuckling = ducklingCost * ducklingCount;
    let costLast = lastCost * lastCount;

    let total = costMiracle + costGoogle + costDuckling + costLast;

    return total;
}

// Add btn function
    const addBtns = document.querySelectorAll(".add-cart-item");

    addBtns.forEach((e) => {
        e.onclick = () => {

            switch (e.parentElement.parentElement.classList[1]) {
                case "miracle":
                    miracleCount++;
                break;
                case "google":
                    googleCount++;
                break;
                case "duckling":
                    ducklingCount++;
                break;
                case "last":
                    lastCount++;
            }
            totalsRef.innerHTML = `Total: $${calculateTotal()}`;   
            itemCountUpdate();         
        }
    })

    // del btn function
    const delBtns = document.querySelectorAll(".del-cart-item");

    delBtns.forEach((e) => {
        e.onclick = () => {
            console.log(e.parentElement.parentElement.classList[1])
            switch (e.parentElement.parentElement.classList[1]) {
                case "miracle":
                    if (miracleCount <= 0) return
                    miracleCount--;
                break;
                case "google":
                    if (googleCount <= 0) return
                    googleCount--;
                break;
                case "duckling":
                    if (ducklingCount <= 0) return
                    ducklingCount--;
                break;
                case "last":
                    if (lastCount <= 0) return
                    lastCount--;

            }
            totalsRef.innerHTML = `Total: $${calculateTotal()}`;     
            itemCountUpdate();       
        }
    })

    const btnCheckout = document.querySelector(".btn-checkout");


    const summaryPage = document.querySelector(".summary-page");
    btnCheckout.onclick = () => {
        summaryPage.classList.remove("hidden");
        window.location.href = "#checkout";

        const h1 = document.querySelector(".pop-up-h1");

        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.textContent = `$${calculateTotal()}`;
        li.style.setProperty("list-style", "none");
        li.style.setProperty("margin-top", "2rem");
        li.style.setProperty("color", "#465353")
        ul.appendChild(li);
        h1.appendChild(ul);

        if(h1.childNodes.length >= 3) {
            h1.childNodes[1].remove();
        };


        }

        
    

