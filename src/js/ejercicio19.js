import { actualizarTexto } from '../services/funciones19.js';

const boton = document.getElementById('btnCambiar');

boton.addEventListener('click', () => {
    actualizarTexto('textoCambiable', 'Ejercicio 19: Texto actualizado');
});