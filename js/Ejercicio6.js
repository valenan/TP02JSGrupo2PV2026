let edades = [13,18,22,35,82,44,56,4];
let cont=0;
console.log("Array de edades:")
for(let i=0;i<=7;i++){
console.log(edades[i]);
cont=cont + edades[i];
};
cont=Math.trunc(cont/8);
console.log("Promedio de edades: ",cont);