let retornarMes = () => {
let n= parseInt(prompt('Ingrese un nro de mes'))
switch (n) {
  case 1:
    document.write('Enero');
    break;
  case 2:
    document.write('Febrero');
    break;
  case 3:
    document.write('Marzo');
    break;
  case 4:
    document.write('Abril');
    break;
  case 5:
   document.write('Mayo');
   break;
  case 6:
   document.write('Junio');
    break;
  case 7:
   document.write('Julio');
    break;
  case 8:
   document.write('Agosto');
    break;
  case 9:
   document.write('Septiembre');
    break;
  case 10:
   document.write('Octubre');
    break;
  case 11:
   document.write('Noviembre');
    break;
  case 12:
   document.write('Diciembre');
    break;
  default:
    document.write('No es un mes valido');
    break;
};
};

retornarMes();