//Functions
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function VerifNbrChamps() {
    
}

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

//Form Validation
let btnSubmit = document.querySelector('.btn-submit');
btnSubmit.addEventListener('click', ()=>{
    alert("Ok");
})

//Verifier si le nombre de champs est correct
let TxtControl = document.querySelectorAll('.text-control');




//Function pour valider emails



//Agir avec l'envoi du formulaire





// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));