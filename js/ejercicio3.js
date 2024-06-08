//EJERCICIO 3 --- DETERMINACION DE NUMEROS PRIMOS

let numeroEntero=32
let primo= 1==32

function esPrimo(numeroEntero){
    if(numeroEntero<=1)return false;
    for(let i=2; i<numeroEntero; i++){
        if(numeroEntero % i===0){
            return false;
        }
    }
    return true
}
if(esPrimo(numeroEntero)){
    console.log(numeroEntero+` es un numero primo.`)
}else{
    console.log(numeroEntero+` no es un numero primo.`)
}