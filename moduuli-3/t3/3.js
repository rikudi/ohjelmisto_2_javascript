'use strict';
const names = ['John', 'Paul', 'Jones'];
const targetElement = document.getElementById('target');

// loopataan taulukko läpi ja luodaan jokaiselle nimele listaelementti
for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const element = document.createElement('li');
    element.textContent = name;
    targetElement.appendChild(element);
}