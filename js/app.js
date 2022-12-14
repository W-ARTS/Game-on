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

//DOM CALL
const form = document.getElementById('form');
const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const modalBody = document.getElementsByClassName('modal-body')[0];
const quantity = document.getElementById('quantity');
const checkbox = document.getElementsByClassName('checkbox-input')[0];
const checkbox2 = document.getElementsByClassName('checkbox-input')[1];
const checkbox3 = document.getElementsByClassName('checkbox-input')[2];
const checkbox4 = document.getElementsByClassName('checkbox-input')[3];
const checkbox5 = document.getElementsByClassName('checkbox-input')[4];
const checkbox6 = document.getElementsByClassName('checkbox-input')[5];
const ValidationInput = document.getElementById('checkbox1');

//pour bloquer le formulaire
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

//erreur du formulaire
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

//Success du formulaire
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//Verifier si l'email est valide
const isValidEmail = email => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

//Validation du formulaire

function validateInputs() {

    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const birthValue = birthdate.value.trim();
    const quantityValue = quantity.value.trim();
    const checkboxValue = checkbox.value.trim();
    
    let Isvalid = true;

    if (firstnameValue === '') {
        setError(firstname, 'Veuillez entrer votre prenom');
        firstname.style.borderColor = 'red';
        Isvalid = false;
    } else {
        setSuccess(firstname);
        firstname.style.borderColor = 'grey';
    }

    if (lastnameValue === '') {
        setError(lastname, 'Veuillez entrer votre nom');
        lastname.style.borderColor = 'red';
        Isvalid = false;
    } else {
        setSuccess(lastname);
        lastname.style.borderColor = 'grey';
    }

    if (emailValue === '') {
        setError(email, 'Une adresse email est obligatoire');
        email.style.borderColor = 'red';
        Isvalid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Veuillez entrer un email valide');
        email.style.borderColor = 'red';
        Isvalid = false;
    } else {
        setSuccess(email);
        email.style.borderColor = 'grey';
    }

    if (birthValue === '') {
        setError(birthdate, 'Veuillez entrer votre date de naissance');
        birthdate.style.borderColor = 'red';
        Isvalid = false;
    } else {
        setSuccess(birthdate);
        birthdate.style.borderColor = 'grey';
    }

    if (quantityValue === '') {
        setError(quantity, 'Veuillez entrer un chiffre');
        quantity.style.borderColor = 'red';
        Isvalid = false;
    } else {
        setSuccess(quantity);
        quantity.style.borderColor = 'grey';
    }

    if (checkbox.checked === false && checkbox2.checked === false && checkbox3.checked === false && checkbox4.checked === false && checkbox5.checked === false && checkbox6.checked === false) {
        setError(checkbox, 'Veuillez choisir une destination');
        Isvalid = false;
    } else {
        setSuccess(checkbox);
        checkbox.style.borderColor = 'grey';
    }

    if (ValidationInput.checked === false) {
        setError(ValidationInput, 'Veuillez accepter les conditions');
        Isvalid = false;
    } else {
        setSuccess(ValidationInput);
        ValidationInput.style.borderColor = 'grey';
    }

    return Isvalid;

    };

//Bouton de fermeture
    const close = document.getElementsByClassName('close')[0];
    const content = document.getElementsByClassName('bground')[0];

    close.addEventListener('click', () => {
    modalbg.style.display = "none";
});


//Message de validation
    const btnSubmit = document.getElementsByClassName('btn-submit')[0];
    const validationMessage = document.getElementsByClassName('validationMessage')[0];


    btnSubmit.addEventListener('click', validate);

function validate() {
    if (validateInputs()) {
        ValidationMess();
    }
}

//Design du Message de validation

const btnEnd = document.getElementsByClassName('btn-end')[0];
function ValidationMess() {

    let formDel = form.remove();
    validationMessage.innerText = "Votre inscription est bien pris en compte !";
    validationMessage.style.padding = '22%';
    validationMessage.style.fontSize = '168%';
    validationMessage.style.textAlign = 'center';
    content.style.maxWidth = 'none';
    content.style.margin = 'auto';
    modalBody.style.marginTop = '116px';
    modalBody.style.marginBottom = '116px';
    btnEnd.style.visibility = 'visible';

    btnEnd.addEventListener('click', () => {
        modalbg.style.display = "none";
    });
};


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));