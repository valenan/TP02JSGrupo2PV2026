const colores = ["#1E3C59","#83BBF2","#BDDEFF","#DBEDFF","#14508C"];
let i = 0;

export const obtenerSiguienteColor = () => {
    const color = colores[i];
    i = (i + 1) % colores.length;
    return color;
};

export const aplicarColorFondo = () => {
    const color = obtenerSiguienteColor();
    document.body.style.backgroundColor = color;
    console.log("Color cambiado");
};