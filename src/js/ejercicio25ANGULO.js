import { aplicarColorFondo } from '../services/service25ANGULO.js';

const boton = document.querySelector('button');

boton.addEventListener('click', () => {
    aplicarColorFondo();
});