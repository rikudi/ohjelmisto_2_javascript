// luodaan uusi lista-elementti
const listItem = document.createElement('li');

// Lisätään listaelementtiin sisältöä
listItem.innerHTML = `
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
`;

// haetaan target-elementti
const targetElement = document.getElementById('target');

// lisätään listaelementti target-elementtiin
targetElement.appendChild(listItem);