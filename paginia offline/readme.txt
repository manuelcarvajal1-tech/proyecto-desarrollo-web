Este documento de texto se encargará de explicar el objetivo del sistema y otros detalles del proyecto. Para una explicación de los contenidos de JavaScript.js y las librerías utilizadas, lea el archivo explicacion_de_archivo_js


enlace público:

direcciós elastic IP utilizada:

enlace al repositorio del proyecto:

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