
// const url = "https://api.getform.io/v1/forms/7f7553b6-fcc1-4068-8ccc-79d6973acd33?token=vpVIvnwqt8f8zIaowocADIs8n9MjaVNGfaKjSyBCaiMWsyBMsMnW0ZjyfNKS";

// let user = "";

// async function UserData( ) {
//     const respone = await fetch(url);
//     const datas = await respone.json();
//     user = await datas.data.submissions[0]?.name;
//     document.write(user);
// }


// console.log(user);

// const submitBtn = document.querySelector(".submitBtn");

// submitBtn.onclick = () => {
//     UserData();
    
// } 
// !!! Just some async code, playing around with it;

const submitBtn = document.querySelector(".submitBtn");
const formGroup = document.querySelector(".formGroup");

let username = document.querySelector('#name');
let key = document.querySelector('#key');

username.onfocus = () => {
    username.setAttribute("placeholder", "Enter Full Username");
    username.style.removeProperty("border");
    formGroup.style.setProperty("border", "5px inset #99bff5");
}
key.onfocus = () => {
    key.setAttribute("placeholder", "Can be any combo of characters");
    key.style.removeProperty("border");
    key.style.setProperty("border", "2px solid hsl(175, 100%, 35%)");
    formGroup.style.setProperty("border", "5px inset hsl(175, 100%, 35%)");
}
key.onblur = () => {
    key.style.removeProperty("border");
    formGroup.style.removeProperty("border");
}
username.onblur = () => {
    formGroup.style.removeProperty("border");
}


submitBtn.onclick = () => {

    if (username.value != "" && key.value != "") {
        localStorage.setItem('username', username.value);

        const body = document.querySelector('.body-container');
        const popUp = document.querySelector('.pop-up');
        const msg = document.querySelector('.msg');

        popUp.classList.remove("hidden");
        body.style.opacity = .4;

        setTimeout(() => {
            msg.innerHTML = "Success!";
            msg.style.setProperty("color","#4BB543");
        }, 1000)

        
        setTimeout(() => {
            username.value = "";
            key.value = "";
            
            window.location.href = "../Main.html";
        }, 1200)

    }
    else {

        formGroup.classList.add("shake-animation");
        setTimeout(() => {
        formGroup.classList.remove("shake-animation");

        }, 500)

        if (username.value === "") {
            username.style.setProperty("border", "2px solid red");
            username.setAttribute("placeholder", "Required Field");
        }
        if (key.value === "") {
            key.style.setProperty("border", "2px solid red");
            key.setAttribute("placeholder", "Required Field");
        }
        formGroup.style.setProperty("border", "5px groove orange"); 

    }
}

