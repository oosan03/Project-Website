const reservationList = [];

function Reservation(
    fName,
    startDate,
    endDate,
    guests = 1,
    kingBed = false,
    twoQueen = false,
    oneQueen = false
) {
    this.fName = fName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.guests = guests;
    this.kingBed = kingBed;
    this.twoQueen = twoQueen;
    this.oneQueen = oneQueen;
}

// Add guests into the reservation list
function AddGuest(
    fName,
    startDate,
    endDate,
    guests,
    kingBed,
    twoQueen,
    oneQueen
) {
    const person = new Reservation(
        fName,
        startDate,
        endDate,
        guests,
        kingBed,
        twoQueen,
        oneQueen
    );
    reservationList.push(person);
}

// Deleting guests
function DeleteGuest(fName) {
    reservationList.forEach((person) => {
        if (person.fName === fName) {
            let idx = reservationList.indexOf(person);
            reservationList.splice(idx, 1);
        }
    });
}

let btnAddGuest = document.getElementById("AddReservation");
let fName = document.getElementById("fName");
let startDate = document.getElementById("startDate");
let endDate = document.getElementById("endDate");
let guests = document.getElementById("guests");

let msgPrice = document.getElementById("priceOut");

let roomsAvailable = 100;
msgRooms.innerHTML = roomsAvailable;

btnAddGuest.addEventListener("click", () => {
    if (
        fName.value === "" ||
        startDate.value === "" ||
        endDate.value === "" ||
        guests.value === ""
    ) {
        msgPrice.innerHTML = "Please enter all form fields";
        // roomsAvailable += 1;
    } else {
        AddGuest(
            fName.value,
            startDate.value,
            endDate.value,
            guests.value,
            kingBed.checked,
            twoQueen.checked,
            oneQueen.checked
        );

        let table = document.getElementById("myTable");
        row = table.insertRow(-1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell1.innerHTML = fName.value;
        cell2.innerHTML =
            "(" + startDate.value + ")" + "-" + "(" + endDate.value + ")";
        cell3.innerHTML = guests.value;

        let msg = "";
        let price = 0;
        if (kingBed.checked) {
            msg = "King Bed";
            if (guests.value < 2) {
                price = 100;
            } else {
                price = 100 + (Number(guests.value) - 2) * 100;
            }
        } else if (twoQueen.checked) {
            msg = "Two Queen";
            if (guests.value < 2) {
                price = 120;
            } else {
                price = 120 + (Number(guests.value) - 2) * 100;
            }
        } else if (oneQueen.checked) {
            msg = "One Queen";
            if (guests.value < 2) {
                price = 90;
            } else {
                price = 90 + (Number(guests.value) - 2) * 100;
            }
        } else {
            msg = "No beds selected";
        }
        msgPrice.innerHTML = `Total for this booking: <mark>$${price}</mark>`;

        cell4.innerHTML = msg;

        fName.value = "";
        startDate.value = "";
        endDate.value = "";
        guests.value = "";
        kingBed.checked = false;
        twoQueen.checked = false;
        oneQueen.checked = false;

        let msgRooms = document.getElementById("msgRooms");
        msgRooms.innerHTML = --roomsAvailable;

        // reservationList.forEach((person) => {
    }

    // )};

    console.log(reservationList);
});

// Reservation delete form action
let btnDelete = document.getElementById("delete");
let fNameDelete = document.getElementById("fNameDelete");
let guestsDelete = document.getElementById("guestsDelete");
let table = document.getElementById("myTable");
let outMsg = document.getElementById("msgOut");

btnDelete.addEventListener("click", () => {
    for (let i = 2; i < table.rows.length; i++) {
        if (
            table.rows[i].cells[0].textContent == fNameDelete.value &&
            table.rows[i].cells[2].textContent == guestsDelete.value
        ) {
            table.rows[i].remove();
            msgRooms.innerHTML = ++roomsAvailable;
            outMsg.innerHTML = `Successfully deleted ${fNameDelete.value} from the reservations list!`;
            fNameDelete.value = "";
            guestsDelete.value = "";
            return;
        }
    }
    if (fNameDelete.value === "") {
        outMsg.innerHTML = "Enter guest name & # of guests";
    } else {
        outMsg.innerHTML = `Uh Oh, user (${fNameDelete.value}) not found. Try again!`;
    }
});
