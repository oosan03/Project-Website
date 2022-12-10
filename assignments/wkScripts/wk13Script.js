
const draggables = document.querySelectorAll('.draggable');

const containers = document.querySelectorAll('.cart');

const checkoutBtn = document.querySelector('.btn');

// Line 50
const closePopUp = document.querySelector('.close-btn');
const popUpPage = document.querySelector('.pop-up-page');

draggables.forEach(draggable => {
    
    draggable.addEventListener('dragstart', e => {
        draggable.classList.add('dragging');
    })

    draggable.addEventListener('dragend', e => {     
        draggable.classList.remove('dragging');
    });
})

containers.forEach(container => {
    container.addEventListener('dragover', e => { 
        e.preventDefault();
        const draggable = document.querySelector('.dragging');

        container.appendChild(draggable);
    });

});

const cart  = document.querySelector('.cart3');


checkoutBtn.onclick = () => {
    let length = cart.children.length;
    let content = "";

    for (let i = 0; i < length; i++) {
        content += " "+ cart.children[i].textContent.replace(/\s/g, '');
    }
        
    let finalCart = content.split(" ");
    let totalCost = 0;

    for (let i = 1; i < finalCart.length; i++) {
        switch (finalCart[i]) {
            case "McClaren":
                totalCost += 0;
            break;
            case "Ferrari":
                totalCost += 0;
            break;
            case "Mercedes":
                totalCost += 0;
            break;
            case "Eggs$6":
                totalCost += 6;
            break;
            case "Avocadoes$15":
                totalCost += 15;
            break;
            case "Onions$3":
                totalCost += 3;
            break;
            case "BellPeppers$3":
                totalCost += 3;
            break;
            case "Drinks$12":
                totalCost += 12;
            break;
            default:
                "Doesn't Match";
        }
    }

    showTotalsPage();

    const groceriesItems = new Array();
    const carItem = new Array();

    for (let i = 1; i < finalCart.length; i++) {

        switch (finalCart[i]) {
            case "Eggs$6":
                groceriesItems.push(finalCart[i]);
            break;
            case "Avocadoes$15":
                groceriesItems.push(finalCart[i]);
            break;
            case "Onions$3":
                groceriesItems.push(finalCart[i]);
            break;
            case "BellPeppers$3":
                groceriesItems.push(finalCart[i]);
            break;
            case "Drinks$12":
                groceriesItems.push(finalCart[i]);
            break;
            case "McClaren":
                carItem.push(finalCart[i])
            break;
            case "Ferrari":
                carItem.push(finalCart[i])
            break;
            case "Mercedes":
                carItem.push(finalCart[i])
            break;
            default:
                "";
        }
    }

    console.log(groceriesItems.length)
    console.log(carItem.length)
    const ulListGrocery = document.querySelector('.ul-list');
    const ulListCar = document.querySelector('.ul-list-car');

    ulListGrocery.innerHTML = "";
    ulListCar.innerHTML = "";

    groceriesItems.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = item.split("$").join(": $");
        ulListGrocery.appendChild(li);
    })
    carItem.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = item + " <b>(FREE Car!)</b>";
        ulListCar.appendChild(li);
    })

    const totalsOutput = document.querySelector('#week13Totals');

    totalsOutput.innerHTML = `$${totalCost}`;

}


// Pop up page


closePopUp.onclick = () => {
    popUpPage.classList.remove('popUp');
    popUpPage.classList.add('popAway');
}


// Show pop up on checkout-btn click
function showTotalsPage() {
    popUpPage.classList.add('popUp');
    popUpPage.classList.remove('popAway');

}
