'use strict';
console.log('forms.js');


// nusitaikyti i forma
const formEl = document.getElementById('loginForm');
const usernameInputEl = document.getElementById('username');
const emailInputEl = document.getElementById('email');
const legalCheckboxEl = document.getElementById('legal');
const timeRadioEl = document.getElementById('timeRadio');

console.log('formEl');


// uzdeti formai issiuntimo klausikli eventListener
formEl.addEventListener('submit', function (event) {
    // event = specialus objektas su informacija apie ivykusi ivyki
    // sustabdo numatytaji veiksma - issiuntima i kita puslapi
    event.preventDefault();
    console.log('submit ivyko');
    // alert('stop');
    clearErrors();

    // surinkti input reiksmes
    // const formValues = {};
    // formValues.usernameValue = usernameInputEl.value;
    // formValues.emailValue = emailInputEl.value;
    // console.log('formValues ===', formValues);
    const usernameValue = usernameInputEl.value.trim;
    const emailValue = emailInputEl.value.trim;

    const bestTimeSelectedEl = timeRadioEl.querySelector('input:checked').value;
    // obj?.savybes nebeiesko toliau objekte
    const bestTimeValue = bestTimeSelectedEl?.value ? bestTimeSelectedEl.value : 'nepasirinkta';

    console.log('bestTimeValue ===', bestTimeValue);

    // string.prototype.trim() = nutrina tuscius tarpus is abieju pusiu

    // console.log('usernameValue ===', usernameValue);
    // console.log('emailValue ===', emailValue);

    console.log('legalCheckboxEl ===', legalCheckboxEl.value);
    if (legalCheckboxEl.checked === false) {
        // jei varnele neuzdeta = vartotojas nesutiko
        // pranesti apie klaida
        // nutraukti fn valdyma
        legalCheckboxEl.nextElementSibling.style.display ='block';
        return;
    }
    // check if empty
    // pirmine validacija
    if (usernameValue.length === 0) {
        console.log('iveskite varda');
        // nusitaikyti i usernameInputEl
        // po juo esanti elementa norim parodyti su display block
        usernameInputEl.nextElementSibling.style.display ='block';
        return;
    }
    // ar userNameValue yra trumpesnis nei 3 simboliai
    // pirmine validacija email
    if (emailValue.length === 0) {
        console.log('iveskite email');
        // nusitaikyti i emailInputEl
        // po juo esanti elementa norim parodyti su display block
        emailInputEl.nextElementSibling.style.display ='block';
        return;
    }

    // ar ivestame emaile yra @
    // if nera klaidu tai siunciam duomenis
    console.log('Sending', usernameValue, emailValue);

    const formValuesObj = {
        username: usernameValue,
        email: emailValue,
        bestTimeValue: bestTimeValue
    };
});
clearErrors();
//  su šia funkcija išvalau visas formos klaidas
function clearErrors() {
    // klaidos elementai turi klase errorFeedback
    // nusitaikyti i visus elementus, gaunu kolekcija
    // sukti cikla per kolekcija
    // slepti kiekviena el
    console.log('Clearing errors');

    const errElArr = document.querySelectorAll('.errorFeedback');
    for (let oneErrEl of errElArr) {
        oneErrEl.style.display = 'none';
    }
    

}