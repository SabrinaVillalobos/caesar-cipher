function caesarCipher() {
    do {
        var answer = prompt("Indique el número de lo que desea hacer: 1) Cifrar - 2) Decifar");
        if (answer !== "") {
            if (answer == "1") {
                cipher();
            } else if (answer == "2") {
                decipher();
            } else {
                alert("Ingrese una opción válida");
            }
        }
    } while (answer === "" || (answer != "1" && answer != "2")); //loop hasta que ingrese 1 o 2
}

do {
    var word = prompt("Ingrese una palabra");
    var alphaExp = /^[a-zA-Z]+$/; //expresión regular para buscar letras de la a-Z/A-Z
    if (word !== "") {
        if (this.word.match(alphaExp) || this.answer == "1") { //a prueba y error aprendí
            this.cipher; //que no funcionaba sin el this por estar fuera del scope
            if (this.word.match(alphaExp) || this.answer == "2") {
                this.decipher;
            }
        } else {
            alert("Debe ingresar una palabra, sin espacios ni números");
        }
    }
} while (word === "" || !/^[a-zA-Z]+$/.test(word)); 


function cipher() {

    var output = ""; 

    for (var i = 0; i < this.word.length; i++) { 
        var character = this.word.charCodeAt(i); // da el N° unicode de la letra
        var caesarCiphLow = ((character - 65 + 33) % 26 + 65); //formula que dio Michelle
        var caesarCiphUpp = ((character - 97 + 33) % 26 + 97);//modificada para mayus y minus
        if (character >= 65 && character <= 90) { 
            output = output + String.fromCharCode(caesarCiphLow);
            //aplica Codigo Cesar (String.fromCharCode) devuelve una cadena a partir de n° unicode
        } else if (97 <= character && character <= 122) { //si son mayus
            output = output + String.fromCharCode(caesarCiphUpp); //aplicar codigo cesar
        }
    }
    return alert(output);
    
}
 function decipher() {

        var output = ""; 
        for (var i = 0; i < this.word.length; i++) { 
            var character = this.word.charCodeAt(i); 
            var caesarCiphLow = ((character - 65 - 7 + 52) % 26 + 65);
            var caesarCiphUpp = ((character - 97 - 7 + 52) % 26 + 97);
            if (character >= 65 && character <= 90) { 
                output = output + String.fromCharCode(caesarCiphLow);
            } else if (97 <= character && character <= 122) { 
                output = output + String.fromCharCode(caesarCiphUpp); 
            }
        }
        return alert(output);
}
caesarCipher();

/* A=65, Z=90 ---> mayus
   a=97, z=122 ---> minus
   Tuve muchos problemas con las variables globales y locales, a prueba y error
   pude hacer que compilara pero en realidad no me queda claro del todo.
   String.fromCharCode = ej: "ABC" = String.fromCharCode(65,66,67)
*/