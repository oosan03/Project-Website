let meats = 
[document.getElementById("chicken"),        
document.getElementById("Pepperoni"),
document.getElementById("Vegetarian"), 
document.getElementById("Beef")];

let vegetables = 
[document.getElementById("Spinach"),        
document.getElementById("Mushrooms"),
document.getElementById("ChilliFlakes"), 
document.getElementById("BellPeppers"),
document.getElementById("Pineapple"),
document.getElementById("Onions"),
document.getElementById("Tomatoes"),];

let sauces = 
[document.getElementById("Pesto"),        
document.getElementById("Marinara"),
document.getElementById("Hummus"), 
document.getElementById("BuffaloSauce")];

let cheeses = 
[document.getElementById("PepperJack"),        
document.getElementById("Cheddar"),
document.getElementById("Provolone"), 
document.getElementById("Parmesan")];

let size = 
[document.getElementById("Small"),        
document.getElementById("Medium"),
document.getElementById("Large")];

let crust = 
[document.getElementById("Thin"),        
document.getElementById("Thick"),
document.getElementById("Stuffed")];

const btn = document.getElementById("summarizeOrder");
const msg = document.querySelector(".output");



btn.onclick = () => 
{       
    let meatsChecked = [];
    let vegetablesChecked = [];
    let saucesChecked = [];
    let cheesesChecked = [];
    let selectedSize;
    let selectedCrust;

    size.forEach((el) =>
    {
        if (el.checked == true)
        {
            selectedSize = el.value;
        }
    });

    crust.forEach((el) =>
    {
        if (el.checked == true)
        {
            selectedCrust = el.value;
        }
    });

    if (selectedCrust === undefined || 
        selectedSize === undefined )
        {
            const invalid = document.getElementById("invalid");
            invalid.style.display = "flex";
            setTimeout(() => 
            {
                invalid.style.display = "none";
                
            }, 2000);

            return;
        };

    msg.style.height = "75vh";




    meats.forEach((meat) =>
    {
        if (meat.checked == true)
        {
            meatsChecked.push(meat);
        }
    })
    vegetables.forEach((veggie) =>
    {
        if (veggie.checked == true)
        {
            vegetablesChecked.push(veggie);
        }
    })
    sauces.forEach((sauce) =>
    {
        if (sauce.checked == true)
        {
            saucesChecked.push(sauce);
        }
    })
    cheeses.forEach((cheese) =>
    {
        if (cheese.checked == true)
        {
            cheesesChecked.push(cheese);
        }
    })



    let output = `You selected a ${selectedSize} pizza with a ${selectedCrust} crust. <br><b> Other Selections: </b><br><br>`;

let meatsOrdered = "";
let cheeseOrdered = "";
let vegetablesOrdered = "";
let saucesOrdered = "";

for (let i = 0 ; i < meatsChecked.length; i++)
{
    meatsOrdered += `( ${meatsChecked[i].value} ) `;
    if (meatsChecked === "") 
    {
        meatsOrdered = "Nothing Selected";
    }
}

for (let i = 0 ; i < vegetablesChecked.length; i++)
{
    vegetablesOrdered += `( ${vegetablesChecked[i].value} ) `;
}

for (let i = 0 ; i < cheesesChecked.length; i++)
{
    cheeseOrdered += `( ${cheesesChecked[i].value} ) `;
}

for (let i = 0 ; i < saucesChecked.length; i++)
{
    saucesOrdered += `( ${saucesChecked[i].value} ) `;
}


    msg.innerHTML = `${output} <b>Meats:</b> ${meatsOrdered} <br> <b>Vegetables:</b>  ${vegetablesOrdered} <br> <b>Sauces:</b>  ${saucesOrdered} <br> <b>Cheeses:</b> ${cheeseOrdered}`;

    

    
}




