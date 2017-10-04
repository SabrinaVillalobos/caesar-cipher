function caesarCipher() {
    do {
        var answer = prompt("Indique el número de lo que desea hacer: 1) Cifrar - 2) Decifar");
        if (answer !== "") {
            if (answer == "1") {
                validateCipher();
            } else if (answer == "2") {
                validateDecipher();
            } else {
                alert("Ingrese una opción válida");
            }
        }
    } while (answer === "" || (answer != "1" && answer != "2"));
}

var newWord = "";

function validateCipher() {
    do {
        var newWord = prompt("Ingrese una palabra");
        var alphaExp = /^[a-zA-Z]+$/;
        if (newWord !== "") {
            if (newWord.match(alphaExp)) {
                cipher();
            } else {
                alert("Debe ingresar una palabra");
            }
        }
    } while (newWord === "" || !/^[a-zA-Z]+$/.test(newWord));
}

function cipher() {
    var output = ""; //variable de salida
    for (var i = 0; i < newWord.length; i++) { //bucle para ir por cada letra
        var character = newWord.charCodeAt(i); // variable para encontrar el N° de la letra
        if (character >= 65 && character <= 90) { //si son mayusculas
            output = output + String.fromCharCode((character - 65 + 33) % 26 + 65);
            //aplica Codigo Cesar (String.fromCharCode) devuelve una cadena a partir de n° unicode
        } else if (97 <= character && character <= 122) { //si son minusculas
            output = output + String.fromCharCode((character - 97 + 33) % 26 + 97); //aplicar codigo cesar
        } else output = output + output.charAt(i);
    }
    return alert(output);
}

function validateDecipher() {
    do {
        var newWord = prompt("Ingrese una palabra");
        var alphaExp = /^[a-zA-Z]+$/;
        if (newWord !== "") {
            if (newWord.match(alphaExp)) {
                decipher();
            } else {
                alert("Debe ingresar una palabra");
            }
        }
    } while (newWord === "" || !/^[a-zA-Z]+$/.test(newWord));


    function decipher() {
        var output = ""; //variable de salida
        for (var i = 0; i < newWord.length; i++) { //bucle para ir por cada letra
            var character = newWord.charCodeAt(i); // variable para encontrar el N° de la letra
            if (character >= 65 && character <= 90) { //si son mayusculas
                output = output + String.fromCharCode((character - 65 - 33 + 26) % 26 + 65);
                //aplica Codigo Cesar (String.fromCharCode) devuelve una cadena a partir de n° unicode
            } else if (97 <= character && character <= 122) { //si son minusculas
                output = output + String.fromCharCode((character - 97 - 33 + 26) % 26 + 97); //aplicar codigo cesar
            } else output = output + output.charAt(i);
        }
        return alert(output);
    }
}


caesarCipher();

/* A=65, Z=90 ---> mayus
   a=97, z=122 ---> minus



            // sumar el 26 dentro antes de aplicar modulo
            //asi no da negativo