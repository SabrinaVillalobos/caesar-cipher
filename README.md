La función caesarCipher  pide al usuario por medio de un prompt que indique un número (1 o 2) según lo que quiera hacer, cifrar o descifrar.
Si ingresa algo que no sea un número se iniciará un bucle while  hasta que el usuario ingrese una opción válida .
Si el usuario escoge cifrar/decifrar,  comienza la función validateCipher/Decipher que se asegura usando expresiones regulares, de que solo se ingresen letras, minúsculas o mayúsculas. 
Si el usuario no sigue las instrucciones y no ingresa una palabra que solo contenga letras, usando un alert se le vuelve a solicitar que ingrese una palabra.
Si el usuario ingresa una palabra, se llama la función cipher/decipher.
La función cipher/decipher crea un string vacio, que será la variable en la que se almacenaran los nuevos carácteres. Se inicia un bucle for que pasa por cada letra y newWord.charCodeAt(i) devuelve el unicode correspondiente al index del string.
Por medio de un if ingresó el rango de carácteres ASCII correspondientes a las letras mayúsculas, el resultado del bucle for más String.fromCharCode que convierte un numero Unicode a una letra y la formula del Código César dan como resultado la salida para un string con letras mayúsculas.
Luego con el rango que corresponde a las letras minúsculas se aplica la formula y el resultado corresponde a la salida de un string con letras minúsculas.
![Diagrama de Flujo](https://i.imgur.com/Ixh0W5j.png?raw=true
