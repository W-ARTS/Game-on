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
let btnSubmit = document.querySelector('.btn-submit');
btnSubmit.addEventListener('click', ()=>{
    
})

//Verifier si le nombre de champs est correct
const TxtControl = document.querySelectorAll('.text-control');
console.log(TxtControl);

function VerifNbrChamps() {
    if (TxtControl.value.length < 3) {
        TxtControl.style.backgroundColor = "red";
    } else {
        TxtControl.style.backgroundColor = "grey";
    }
}

VerifNbrChamps();

//Function pour valider emails



//Agir avec l'envoi du formulaire





// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));