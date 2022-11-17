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

//pour bloquer le formulaire
form.addEventListener('submit', e =>{
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
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLocaleLowerCase());
}

//Validation du formulaire
const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();

    if (firstnameValue === '') {
        setError(firstname, 'Veuillez entrer votre prenom !');
        firstname.style.borderColor = 'red';
    }else {
        setSuccess(firstname);
        firstname.style.borderColor = 'grey';
    }

    if (lastnameValue === '') {
        setError(lastname, 'Veuillez entrer votre nom !');
        lastname.style.borderColor = 'red';
    } else {
        setSuccess(lastname);
        lastname.style.borderColor = 'grey';
    }

    if (emailValue === '') {
        setError(email, 'Une adresse email est obligatoire !');
        email.style.borderColor = 'red';
    }else if (!isValidEmail(emailValue)) {
        setError(email, 'Veuillez entrer un email valide !');
        email.style.borderColor = 'red';
    }else {
        setSuccess(email);
        email.style.borderColor = 'grey';
    }

};

//Bouton de fermeture
const close = document.getElementsByClassName('close')[0];
const content = document.getElementsByClassName('content')[0];
console.log(content);

close.addEventListener('click', () => {
    content.remove();
    modalbg.remove();
});


//Message de validation
const btnSubmit = document.getElementsByClassName('btn-submit')[0];
const validationMessage = document.getElementsByClassName('validationMessage')[0];


btnSubmit.addEventListener('click', () => {
    let formDel = form.remove();
    validationMessage.innerText = "Votre message est bien pris en compte !";
    validationMessage.style.padding = '22%';
    validationMessage.style.fontSize = '174%';
    content.style.maxWidth = 'none';
    content.style.margin = 'auto';
} );


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));