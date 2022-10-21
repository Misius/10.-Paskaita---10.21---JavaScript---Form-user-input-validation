'use strict';
console.log('register.js');

const formEl = document.forms.reg;
const passwordRepeatEl = document.getElementById('psw-repeat');
const passwordEl = document.getElementById('psw');
const emailEl = document.getElementById('email');



formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('js is in control');

    // const passwordValue = passwordEl.value.trim;
    // const passwordRepeatValue = passwordRepeatEl.value.trim;
    // const emailValue = emailEl.value.trim;

    const formValuesObj  = {
        psw: passwordEl.value.trim(),
        pswRep: passwordRepeatEl.value.trim(),
        email: emailEl.value.trim()
    };

    // Validacija

    function isThereALetter(valueToCheck,needle) {
        let arYra = valueToCheck.includes(needle);
        console.log('arYra ===', arYra);
        return;
    }
    if (formValuesObj.email.length === 0) {
        console.log('Įveskite paštą');
        // nusitaikyti i emailInputEl
        // emailInputEl.nextElementSibling.style.display ='block';
        return;
    }
    if (!isThereALetter(formValuesObj.email, '@')) {
        console.log('Reikėtų @ raidės');
        return;
    } 
    if (formValuesObj.psw.length <= 3) {
        console.log('Slaptažodis per trumpas');
        return;
    } else if (formValuesObj.psw.length === 0) {
        console.log('Įveskite slaptažodį');
        
    }
    if (formValuesObj.psw === formValuesObj.pswRep) {
        console.log('Slaptažodžiai sutampa');
    } else {
         console.log('Slaptažodžiai nesutampa');
        return;
    }
    if (formValuesObj.pswRep.length === 0) {
        console.log('Pakartokite slaptažodį');
        return;
    }
});

