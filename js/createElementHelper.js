'use strict';
console.log('createElementHelper.js');



const appEl = document.getElementById('app'); // dgi
// document.querySelector(''); // dqs
// document.querySelectorAll(''); // dqsa

// document.createElement(''); // dce

// <h2 class="subTitle">Hello Friday</h2>
// <p class="text">I am text</p>

const h2El =document.createElement('h2');
h2El.className = 'subTitle';
h2El.textContent = 'Hello Friday';
appEl.append(h2El);

const pEl =document.createElement('p');
pEl.className = 'text';
pEl.textContent = 'I am text';
appEl.append(pEl);

function crEl(tagName, dest, className, text )  {
    const el = document.createElement(tagName);
    if (className) el.className = className;
    if (text || text === 0) el.textContent = text;
    el.className = 'className'
    el.textContent = text;
    el.className = className;
    dest.append(el);
    console.log(el);
    return el;
}

// crEl('h2', 'subTitle', 'Hello Friday', appEl);
// crEl('h3', '', 'Hello Friday', appEl);
// crEl('h3', '', '0', appEl);

// console.log(crEl('h2', 'subTitle'));




const seasons = ['summer','autumn','winter','spring'];
const colors = ['red','green','blue'];
function makeList(arrToMakeListFrom, dest) {
    let ulEl = crEl('ul', dest,'card');
    // crEl ('h1',appEl,'card')
    // console.log('ulEl ===', ulEl);
    for (let item of arrToMakeListFrom) {
        crEl('li', ulEl, '', item);
        
    }
}

makeList(seasons, appEl);
makeList(colors, document.body);