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
// console.log("fora de la funcio:", variable)

//5.- Passa’t un String, retorni el número de vocals que té

function comptaVocals(text) {

    let comptador = 0;
    const vocals = ["a", "e", "i", "o", "u"];

    for (let lletra of text) {
        if (vocals.includes(lletra)) {
            comptador++;
        }
    }

    return "El numero de vocals es: " + comptador;
}


console.log(comptaVocals("Hola que tal"));

//6.- Passa 3 enters com a paràmetres (el tercer ha de tenir un valor per defecte) i retorni la suma dels tres.

function sumaTres(a, b, c = 0) {
    return a + b + c;
}

console.log("La suma de los tres numeros es: " + sumaTres(3, 4, 6))

//7.- Ha de cridar la funció de l’exercici 3 i retornar el resultat de la funció de l’exercici 6.

function mostraDataActual() {
    return new Date();
}

function exercici7(a, b, c) {
    mostraDataActual();
    return sumaTres(a, b, c);
}


console.log(exercici7(2, 5));

//8.- Passa’t dos enters, retornar true si un d’ells és igual a 30 o si la seva suma és igual a 30.

function comprova30(a, b) {
    return a === 30 || b === 30 || (a + b) === 30;
}


console.log(comprova30(30, 5));
console.log(comprova30(10, 20));
console.log(comprova30(15, 15));
console.log(comprova30(7, 4));

// 9.- Repeteix l’exercici anterior però com a funció anònima.

const comprova30Anonima = function(a, b) {
    return a === 30 || b === 30 || (a + b) === 30;
};


console.log(comprova30Anonima(10, 20));

//10.- Passa’t dos valors, retorni cert o fals si el valor i el tipus de dades són el mateix.

const mateixValorTipus = (a, b) => a === b;


console.log(mateixValorTipus(5, 5));
console.log(mateixValorTipus(5, "5"));

//11.- Passa’t un valor, realitzi l’arrel quadrada i retorni el valor amb dos decimals.

const arrelQuadrada = x => Number(Math.sqrt(x).toFixed(2));

console.log(arrelQuadrada(10));

//12.- Passa’t un String, el retorni en minúscules.

const aMinuscules = text => text.toLowerCase();


console.log(aMinuscules("HOLA QUE TAL"));



