const targetElement = document.querySelector('#target');
const triggerElement = document.querySelector('#trigger');

triggerElement.addEventListener('mouseover', () => {
    targetElement.src = './img/picB.jpg';
});

triggerElement.addEventListener('mouseout', () => {
    targetElement.src = './img/picA.jpg';
});