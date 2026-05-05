const calcularMayor=(num1, num2) => 

{

if (num1>num2) 
{
console.log(`El numero mayor es: ${num1}`);
} 
else if (num2 > num1) 
{
console.log(`El numero mayor es: ${num2}`);
} else 
{
console.log("los numeros son iguales");
}

};

const num1=20;
const num2=20;
calcularMayor(num1,num2);