//Functions
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

//Form Validation
let btn = document.getElementsByClassName('btn-submit')[0];
console.log(btn);


//Verifier si le nombre de champs est correct
let PlaceTxt = document.querySelector('.text-control');
console.log(PlaceTxt);
let FirstName = document.querySelector('#first');
let LastName = document.querySelector('#last');
let Email = document.querySelector('#email');
let NotifRefus = document.createElement('p');
document.querySelector('#first').prepend(NotifRefus);

function ValidationPrenom() {
    //alert('Merci');
    if (FirstName.value.length <= 2 || FirstName.value == '') {
        PlaceTxt.style.borderColor = 'red';
        NotifRefus.textContent = "Veuillez entrer un prénom valide";
    } else {
        PlaceTxt.style.borderColor = 'grey';
    }
}

function red() {
    if (formData.value.length <= 2) {
        
    }
}

btn.addEventListener('click', () => {
    ValidationPrenom();
})

//Function pour valider emails
const validateEmail = () => {
    if (String(Email).toLowerCase().match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ==false){

    }
};



//Agir avec l'envoi du formulaire
let Fomulaire = document.querySelector('form');

function FormValidation(e) {
    e.preventDefault();
}


Fomulaire.addEventListener('submit', FormValidation);





// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));