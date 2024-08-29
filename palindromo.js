function ValidarPalindromo(frase) {
    // Eliminar espacios, signos de puntuación y convertir todo a minúsculas
    let fraseLimpia = frase.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Validar la frase en minúsculas
    let Palindromo = fraseLimpia === fraseLimpia.split('').reverse().join('');
    
    return Palindromo;
}

// Usar la frase "anita lava la tina"
let fraseUsuario = "anita lava la tina";

// Evaluar si la frase es un palíndromo
if (ValidarPalindromo(fraseUsuario)) {
    console.log("La frase es un palíndromo.");
} else {
    console.log("La frase no es un palíndromo.");
}
