const base = 12;
const altura = 8;

const calcularArea = (b, h) => b * h;
const calcularPerimetro = (b, h) => 2 * (b + h);

const area = calcularArea(base, altura);
const perimetro = calcularPerimetro(base, altura);

console.log(`Rectangulo con base ${base} cm y altura ${altura} cm`);
console.log(`Area: ${area} cm²`);
console.log(`Perimetro: ${perimetro} cm`);