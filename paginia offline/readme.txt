NOTAS DE ATRASO: Cuando iba a entregar la tarea, me fijé que no lo habia subido aún a la página de amazon. Esto me costó tiempo porque despues de subirlo me fijé que los archivos de JavaScript y CSS no funcionaban, por lo que tuve que buscar el problema, descargarlos localmente, subirlos y arreglar las líneas de código que las llamaban. El cambio entre la versión del proyecto de las 23:59 y cerca de las 1:30 (hora en la que debería estar subiendo esto) es en que en una si están llamandose los archivos correctamente y unos arreglos de texto/base de datos simulada.
enlace público:http://18.205.12.73

direcciós elastic IP utilizada:18.205.12.73

enlace al repositorio del proyecto:https://github.com/manuelcarvajal1-tech/proyecto-desarrollo-web

Estudiante: Manuel Jesús Carvajal Garrido

proyecto seleccionado:
El sitio web siendo desarrollado es un sitio de maratones para trotar. Intenta entregar información de maratones posibles siendo entregadas (en la zona centro de Chile por ahora) para que el usuario pueda encontrar una maratón cercana que se adapte a su agenda u otra necesidad. Los usuarios por supuesto serían personas interesadas en ir a maratones o trotar

estructura general de las carpetas: Las carpetas han sido creadas de una manera básica, las imágenes van a imagen, los archivos CSS van a css, los archivos script van a JavaScript y los HTML van en la carpeta principal o carpeta madre.


Quiero añadir estos detalles sobre lo que faltó y lo que se espera cambiar en futuras entregas:
por arreglar:
-Ahora mismo el buscador diferencia tildes, quiero arreglar eso porque es un problema común que la gente escriba "Maipu" en vez de "Maipú".
-Quiero modificar el filtro de fecha para que si funcione con variable de fechas y funcione con un rango en vez de una en particular.
-Algo obvio, pero siento que aún puedo jugar con el estilo de la página; no como algo gigante, solo cosas como cambio de color, posicionamiento y tamaño de divs y cambios de texto.
-Debería eventualmente separar partes del archivo JavaScript para que sea más limpio leer cada sección (la base de datos falsa si es que no ha sido remplazada, la creación de acordiones en el filtrador de maratones y él encargado de la encuesta).
-No alcanzé a crear solucionadores de valores incorrectos, cosas como RUTs que no siguen el formato de RUT (ni si quiera conozco si es que rex/regex tiene un equivalente en javascript) o que las distancias pueden ser negativas ahora mismo (problema menor). De hecho, ni si quiera hay algo que se asegure que se haya escrito un RUT en absoluto.

por añadir:
-Si la base de datos de maratones es gigante, necesito tanto optimizar para no sobrecargar el navegador del visitante y separar las maratones en páginas o algo parecido para no tener una página muy larga verticalmente.
-La encuesta obviamente tiene que conectarse con un backend para tener la información de quienes participarán en la maratón (podría volverlo un inicio de sesión quizás), esto se tendría que ver reflejado en la información del buscador de maratones.
-Adicionalmente, debería crear una manera de conectarse como un creador de maratones, no estoy nada seguro de qué lógica, de maquina y de funcionamiento, quiero que use. 
-Tengo que decidir entre un inicio de sesión o correo electrónico de contacto en el formulario para enviar un mensaje al usuario en caso de que se cancele la maratón (tendría que discutir con el profesor y ayudante para saber si mandar correos sale muy caro para el presupuesto del servidor de Amazon). Además lo que decida tendría que permitir el abandono de una maratón a la que ya se entró.
-Entre el buscador, debería añadir horas como un filtro, cosa que no he podido terminar por tiempo. Aunque no estoy muy seguro de como es que enfrentaría el problema de hora a la que comienza y horas que se demora en promedio la maratón entera.
-Debería añadir una cantidad de cupos disponibles (incluso si son por maraton en vez de por cada distancia de estas), también debería crear un filtro que permita buscar maratones que no estén llenas.