console.clear();

import { Kaitlente } from "./Kaitlente.js";

const kaitlenciuKiekis = 20; 

//const h1DOM = document.querySelector('h1');

const titleDOM = document.querySelector('.title');

//console.log(titleDOM);
//console.log(titleDOM.innerText);
//console.log(titleDOM.textContent);

titleDOM.innerText = `Virtuve (${kaitlenciuKiekis})`;

// titleDOM.classList[0];  
// titleDOM.classList.add('bold');  - 'bold' be tasko priekyje, nes neiesko, zino, kad tokia yra. 


//KOMENTARAS - kad h1 taptu BOLD, kai skyliu kiekis lyginis
// if (kaitleciuKiekis % 2 === 0) {
//    titleDOM.classList.add('bold');
//}

// KOMENTARAS - kad h1 taptu RED, kai bent viena skyle karsta
// if (document.querySelector('.karsta')) {
// titleDOM.classList.add('red', 'sparkle');
// titleDOM.classList.remove('red');
// titleDOM.style.fontSize = '40px'; 
// titleDOM.style['font-size'] = '40px';
// }


// skyleDOM = document.querySelector('.kaitlente .skyle:nth-child(3)) ;
// skylesDOM = document.querySelectorAll('.kaitlente .skyle) ;

document.querySelector('main').innerText = '';

console.log([document.querySelector('main')]);

for (let i = 1; i <= kaitlenciuKiekis; i++) {
    const irenginys = new Kaitlente(i);
    irenginys.render();
    irenginys.enableClicks();
}