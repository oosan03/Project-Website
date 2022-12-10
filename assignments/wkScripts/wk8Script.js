
// Global variables
let table = document.getElementById("myTable");
let row;
let cell1;
let cell2;

// Add button
let numVal = document.getElementById("userNumber");
let btnAdd = document.querySelector("#btnAdd");

btnAdd.addEventListener('click', () => {
    if (numVal.value == "") {
        let nonvalidOutput = document.getElementById("nonvalidOutput");
        return nonvalidOutput.innerHTML = "Please enter a number";
    }

    row = table.insertRow(-1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell1.innerHTML = numVal.value;
    let date = new Date();
    cell2.innerHTML = date.toLocaleDateString();
    numVal.value = "";
    nonvalidOutput.innerHTML = "";
    msg.innerHTML = "";
})

// Clear button
let btnClear = document.querySelector("#Clear");
btnClear.addEventListener('click', () => {
    if (table.rows.length > 1) {

        for (let i = table.rows.length - 1; i > 0; i--) {
            table.rows[i].remove();
        }
    }
    msg.innerHTML = "";
    nonvalidOutput.innerHTML = "";
})

// STATs button
let btnStat = document.querySelector("#Calculate");
let msg = document.getElementById("msgCalculate");


btnStat.addEventListener('click', () => {
    let sum = 0;
    let min;
    let max;
    let arr = new Array();
    for (let i = table.rows.length - 1; i > 0; i--) {
        let data = table.rows[i].textContent.split("11");
        if (Object.is(data[0], NaN)) {
            continue;
        }
        sum += Number(data[0]);
        arr.push(data[0]);
    }
    max = Math.max(...arr);
    min = Math.min(...arr);
    console.log(max)
    console.log(min)

    if (table.rows.length <= 1) {
        return msg.innerHTML = "<br>Please enter data before calculating."
    }
    let average = sum / (table.rows.length - 1);
    console.log(average);
    if (Object.is(average, NaN)) {
        return msg.innerHTML = "<br>Invalid data entry, clear and try again!"
    }
    else {
        msg.innerHTML = `<b><br>Average: ${average.toFixed(2)}<br>Maximum: ${max}<br>Minimum: ${min}</b>`;
    }
})
