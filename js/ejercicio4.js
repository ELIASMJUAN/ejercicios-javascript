// EJERCICIO 4 --- OPERACIONES ARITMETICAS BASICAS
console.log(`EJERCICIO 4`)

let numeroA=35
let numeroB=7
let numeroC=89

console.log(`Operaciones aritmeticass basicas entre los números ${numeroA}, ${numeroB} y ${numeroC}.`)

resultadoSuma=numeroA+numeroB+numeroC
resultadoResta=numeroA-numeroB-numeroC
resultadoMultiplicacion=numeroA*numeroB*numeroC

console.log(`El resultado de la SUMA es ${resultadoSuma}`)
console.log(`El resultado de la RESTA es ${resultadoResta}`)
console.log(`El resultado de la MULTIPLICACION es ${resultadoMultiplicacion}`)

if(resultadoSuma>resultadoResta>resultadoMultiplicacion){
    console.log(`El mayor resultado es la SUMA ${resultadoSuma}`);
}else if(resultadoResta>resultadoSuma>resultadoMultiplicacion){
    console.log(`El mayor resultado es la RESTA ${resultadoResta}`);
}else{
    console.log(`El mayor resultado es la MULTIPLICACION ${resultadoMultiplicacion}`);
}