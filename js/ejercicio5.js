// EJERCICIO 5 --- PRECIO FINAL

let precio=6799
console.log(`El producto tiene un valor real de $${precio}.`)

if(precio>100){
    precio -= precio*0.1
}else if(precio>=50 && precio<=100){
    precio -= precio*0.05;
}
console.log(`El precio final del producto es $${precio}`);