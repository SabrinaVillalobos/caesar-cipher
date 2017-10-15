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


function cipher() {
    do {
        word = prompt("Ingrese una palabra o frase");

        var output = "";

        if (/^[a-zA-Z\s]+$/.test(word)) {
            for (var i = 0; i < word.length; i++) {
                var character = word.charCodeAt(i);
                var caesarCiphLow = ((character - 65 + 33) % 26 + 65);
                var caesarCiphUpp = ((character - 97 + 33) % 26 + 97);
                if (character >= 65 && character <= 90) {
                    output = output + String.fromCharCode(caesarCiphLow);
                } else if (97 <= character && character <= 122) {
                    output = output + String.fromCharCode(caesarCiphUpp);
                } else
                    output = output + String.fromCharCode(character);
            }
            return prompt("Tu texto cifrado es:", output);
        } else {
            alert("No ingrese números por favor");
        }
    }
    while (word === "" || !/^[a-zA-Z\s]+$/.test(word));
}

function decipher() {
    do {
        word = prompt("Ingrese una palabra");

        var output = "";

        if (/^[a-zA-Z\s]+$/.test(word)) {
            for (var i = 0; i < word.length; i++) {
                var character = word.charCodeAt(i);
                var caesarCiphLow = ((character - 65 - 7 + 52) % 26 + 65);
                var caesarCiphUpp = ((character - 97 - 7 + 52) % 26 + 97);
                if (character >= 65 && character <= 90) {
                    output = output + String.fromCharCode(caesarCiphLow);
                } else if (97 <= character && character <= 122) {
                    output = output + String.fromCharCode(caesarCiphUpp);
                } else
                    output = output + String.fromCharCode(character);
            }
            return prompt("Tu texto cifrado es:", output);
        } else {
            alert("No ingrese números por favor");
        }
    }
    while (word === "" || !/^[a-zA-Z\s]+$/.test(word));
}