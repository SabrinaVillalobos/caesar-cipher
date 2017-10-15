La función caesarCipher  pide al usuario por medio de un prompt que ingrese una palabra, si el usuario ingresa números o espacios se le recordará por medio de un alert que debe ingresar una palabra, sin espacios ni números.

Este filtro se logra haciendo uso de las expresiones regulares “/^[a-zA-Z]+$/” que buscan de principio a fin en la palabra ingresada, letras de a-z y  A-Z.
Cuándo el usuario ingrese una palabra valida, por medio de otro prompt se le preguntará qué es lo que desea hacer, cifrar o descifrar.

Dependiendo de la respuesta, llamará a la función cipher o decipher, que hace uso de la formula que nos mostró Michelle en el video ((character - 65 + 33) % 26 + 65).
Lo primero qué hace cipher/decipher es crear una variable output que almacenará los datos de salida, luego una variable index, que iterará por cada letra de la palabra ingresada.

 Con charCodeAt busca el número Unicode correspondiente a cada letra, para luego aplicar la formula de cifrado/decifrado en cada una de ellas. Lo siguiente es crear una cadena a partir del número Unicode con String.fromCharCode y retornar una alerta con la respuesta del cifrado/descifrado que se almacenó en la variable output.
Para poder cifrar/decifrar tanto letras minúsculas como mayúsculas, modifiqué un poco la formula agregando los rangos de números correspondientes en la tabla de códigos ASCII. (A=65, Z=90 ---> para mayúsculas y  a=97, z=122 ---> para minúsculas).

![Diagrama de Flujo](https://i.imgur.com/lrpNo29.jpg)
