const mostrarBienvenida = () => {
    let apellido = prompt("Ingrese su apellido:");
    let nombre = prompt("Ingrese su nombre:");

    document.write(`¡Hola ${nombre} ${apellido}.<br>
    Bienvenido a Programación Visual!`);
};

mostrarBienvenida();
