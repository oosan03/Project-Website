// Validate Card Number using Luhn Algorithm

// Validate btn event 
let cardNum = document.querySelector("#cardNum");
let btnValidate = document.querySelector("#validate");
let output = document.querySelector("#validateOutput");

btnValidate.addEventListener('click', () => {
    if (cardNum.value == "") return output.innerHTML = "Please enter a card number";

    let numArr = cardNum.value.split("").map((cardNum) => {
        return Number(cardNum);
    });

    console.log(numArr);
    let nthArr = nthChild(numArr, 1, 2).map(num => {
        return String(num);
    });

    // nth child greater than 2 digits added together
    for (let i = 0; i < nthArr.length; i++) {
        if (nthArr[i].length > 1) {
            let twoDigitsNums = Number(nthArr[i].substring(0, 1)) + Number(nthArr[i].substring(1));
            nthArr[i] = String(twoDigitsNums);
        }
        nthArr[i] = Number(nthArr[i]);
    }
    console.log(nthArr)

    // add both arrays and mod with 2 for valid of invalid card numbers
    let sumArr = [...nthArr, ...numArr];
    let sum = 0;
    sum = sumArr.reduce((el, sum) => el + sum)

    // check if sum mod 2 is even or not to return valid and invalid card numbers
    switch (sum % 2) {
        case 0:
            output.innerHTML = "Congrats! The card is valid and payment was successful.";
            break;
        default:
            output.innerHTML = "Sorry, this is not a valid card number. Try again!";
    }
    cardNum.value = "";
})

// nth child elements Function
function nthChild(params, idx, nthChild) {
    let nthChildArr = new Array;
    params.reverse();

    for (let i = idx; i < params.length; i += nthChild) {
        nthChildArr.push(params[i] * 2);
        params[i] = 0;
    }

    return nthChildArr;
}