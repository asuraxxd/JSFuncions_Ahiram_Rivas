//1.- Passa el teu nom i cognoms com a paràmetres i els mostri per consola.

function nomCognom(nom, cognom) {
    console.log("nom: " + nom);
    console.log("cognom: " + cognom);
}

nomCognom("ahiram", "rivas");

//2.- Passa un valor per paràmetre i mostri de quin tipus és.

function mostrarValor(valor) {
    console.log("El tipus de funcio es: " + typeof valor)
}

mostrarValor(1234)
mostrarValor("hola")

//3.- Mostri la data actual

function fechaActual() {
    const fecha = new Date();
    console.log("La data actual es: " + fecha)
}

fechaActual()

//4.- Declara una variable dins d’una funció i mostra el seu valor fora d’aquesta. Què passa? Perquè?

function variableDentro() {
    let variable = "hola"
    console.log("Dins de la funcio:", variable)
}

variableDentro();
console.log("fora de la funcio:", variable)