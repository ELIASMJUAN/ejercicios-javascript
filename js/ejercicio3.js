//EJERCICIO 3 --- DETERMINACION DE NUMEROS PRIMOS
console.log(`EJERCICIO 3.`)

let numeroEntero=32
let esPrimoSi= 1==32
console.log(`Elegimos el numero ${numeroEntero}`)

function primo(numeroEntero){
    if(numeroEntero<=1)return false;
    for(let i=2; i<numeroEntero; i++){
        if(numeroEntero % i===0){
            return false;
        }
    }
    return true
}
if(primo(numeroEntero)){
    console.log(numeroEntero+` es un numero primo.`)
}else{
    console.log(numeroEntero+` no es un numero primo.`)
}