la tecnología usada desde la entrega 1 está detallada en README, no README2

Alpine
	Alpine principalmente solo da "atajos" para la creación de código, por ejemplo -show tiene funcionamiento parecido a los modales usados en la entrega 1

fetch y JSON
	el archivo JSON simula una base de datos, se añadió a una carpeta llamada data por eso mismo. El flujo de carga es primero el HTML que llama JavaScript.JS, luego el archivo JavaScript pide los datos de el JSON con la información de maratones. El filtrado de datos viene hecho desde la entrega 1, aunque admito que no arreglé que el filtro de fechas no utiliza rango.

regex
	cuando el RUT no cumple la expresión regular (7 dígitos y 1 dígito o K), al utilizar submit se cambiará una variable de error que mostrará un texto hasta que el usuario cambie algo en el formulario de RUT (no tiene porque mandarlo). No siento que sea buena idea algo como console.log para este tipo de cosas porque los errores de rut son comunes de hacer accidentalmente y deberían ser rápidos de arreglar por parte del usuario.

Lamentablemente no tengo pruebas de error de cargas de datos. Vi que no funcionaba ciertas veces la primera vez que abria un servidor local, arreglado por recargar la página (probablemente solo que se demora en realizar el fetch al servidor), por lo que asumo que si funciona cuando no hay datos. No he visto información perdida al recargar pero como dicho antes, la comprobación de la página se realizo casi siempre en un servidor local



Adicionalmente aún no funciona la página en móvil, no entendí muy bien el uso de responsive sin arruinar otras partes de las páginas.
Tengo que cambiar el uso de RUTs a usuarios con contraseña eventualmente, aunque preferiria esperar a que se pueda tener una cuenta iniciada para esto.
