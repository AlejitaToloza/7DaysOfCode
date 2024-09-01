![7DaysOfCode_fin](https://github.com/user-attachments/assets/d93573ed-c709-4bfe-81d6-1c2273701a7b)

<h1>¡Llegó la hora, ! Vas a comenzar tu jornada en el #7DaysOfCode ;)</h1>

| 🗨️ [Day 1/7](https://github.com/AlejitaToloza/7DaysOfCode/tree/main/Day1)  ![Day1](https://github.com/user-attachments/assets/ebbde47e-023f-42cb-a513-a4605bb6798e)
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Este primer día es muy importante. Al final de él, tendrás un nuevo conocimiento que es esencial para los próximos desafíos.

Existe una situación muy común para quienes usan Javascript: problemas con los tipos de variables al comparar los valores de dos variables entre sí. ¡A mí me ha pasado mucho!

En lenguajes de programación compilados, como Java y C#, este problema se detecta en tiempo de compilación, y tienes un aviso claro del error mientras desarrollas el código.
 
En JavaScript, estos errores pasan desapercibidos, ya que el código no pasa por un compilador. Es decir, los errores solo aparecen en tiempo de ejecución.

La parte más confusa para quienes están comenzando a aprender lógica con JavaScript es la operación de igualdad entre valores. Dependiendo de cómo escribas tu código, JavaScript hará una conversión de tipo a un tipo booleano de manera implícita (automática), y esto afectará a variables que eran Strings, Numbers, Object, etc.

 
Esto causa algunos comportamientos extraños, como todos estos ejemplos a continuación que retornan true:
 
```
console.log( false == '0' );

console.log( null == undefined );

console.log( " \t\r\n" == 0 );

console.log( ' ' == 0 );
```

Lo cual no tiene necesariamente mucho sentido.

 
_(Puedes probar todo esto yendo a tu navegador, haciendo clic con el botón derecho, eligiendo la opción “Inspeccionar” y la pestaña “Consola”. En esa pestaña, basta con copiar y pegar cada una de las líneas anteriores para confirmar que todas realmente retornan true)._
 

>Por lo tanto, **tu tarea de hoy es reescribir el código a continuación para que imprima la información de manera correcta,** que tenga sentido y sin errores:


```
let numeroUn = 1

let stringUn = '1'

let numeroTreinta = 30

let stringTreinta = '30'

let numeroDiez = 10

let stringDiez = '10'

```

```
if (COMPARAR numeroUn y stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
}
  else {
        console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
  }
```
 
```
if (COMPARAR numeroTreinta y stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
}
  else {
        console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
}
```
 
```
if (COMPARAR numeroDiez y stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
}
  else {
        console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
  }
```

<h4>CONSEJO</h4>  

**También puedes utilizar el navegador para ejecutar este programa,** si aún no tienes familiaridad con editores de código como Visual Studio Code.

Para hacerlo, como mencioné antes, basta con hacer clic con el botón derecho del mouse en cualquier página, seleccionar la opción _“Inspeccionar”,_ ir a la pestaña _“Consola”_ y escribir tu código. ¡Muy simple, verdad?

Si deseas **cambiar los nombres de las variables y los valores,** siéntete libre de hacerlo. Pero nunca imprimas algo que no sea verdadero, ¿eh?

<h4>EXTRA</h4>

He seleccionado un artículo de Alura para que [aprendas más sobre operadores de comparación](https://www.aluracursos.com/blog/como-utilizar-operadores-de-comparacion-en-javascript?utm_campaign=al_7_days_logica_javascript_-_dia_1&utm_medium=email&utm_source=RD+Station).


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|🗨️ [Day 2/7](https://github.com/AlejitaToloza/7DaysOfCode/tree/main/Day2) ![Day2](https://github.com/user-attachments/assets/8fe845fa-da70-4cff-a1e4-b1975820c615)
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


¿Sabes cuando te registras en un site y, justo después, al iniciar sesión, te llama por tu nombre? Eso es lo que harás en el desafío de hoy.

Cuando creas un sistema, site o aplicación, es común querer agregar algunos toques personalizados para hacer la **experiencia en tu aplicación más rica y dinámica.**

Hacer esto mediante programación puede no ser una tarea fácil. Dependiendo del nivel de personalización que quieras implementar, la cantidad de código que necesitarás escribir puede ser inmensa.

Pero, por supuesto, puedes comenzar de una manera más sencilla. Para ello, lo importante es **entender cómo capturar y almacenar valores dentro de variables.** ¡Y en eso te voy a ayudar hoy!

Las variables son los bloques básicos de construcción de cualquier sistema y son esenciales para procesar cualquier tipo de información, ya sea de una persona que ha iniciado sesión en el sistema o incluso para mostrar detalles de productos en un catálogo de comercio electrónico.

Por eso, hoy te voy a enseñar a **desarrollar un programa simulando una de esas aplicaciones.

Debe pedir al usuario responder 3 preguntas:**

```
- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando?
```

A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas.


Al final, **el sistema mostrará el mensaje:**

```
"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"
```

Observa que cada información entre [ ] es una de las respuestas dadas por la persona.

<h4>EJERCICIO OPCIONAL</h4>

Si deseas profundizar en el tema de hoy, tengo otro ejercicio para ti.

**Pero es 100% opcional.**

**Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:**

```
¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.
```

Y luego, dependiendo de la respuesta, debería **mostrar uno de los siguientes mensajes:**

```
1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?
```

<h4>CONSEJO</h4>

**Puedes agregar tantas preguntas como desees** y aprovechar las respuestas de los usuarios en el mensaje que se mostrará.

**Para imprimir y recibir valores,** puedes usar tanto ```console.log, prompt y alert,``` como también HTML y CSS si ya tienes conocimiento en estas dos tecnologías.

Puedes usar la estructura condicional if para resolver el **Ejercicio Opcional.** Algo como:

```
if (respuesta == 1) {
    // da la respuesta positiva
}

if (respuesta == 2) {
    // da la respuesta negativa
}
```

<h4>EXTRA</h4>

Tanto ```alert()``` como ```prompt()``` se utilizan para crear cuadros de diálogo e interactuar con el usuario, pero son diferentes entre sí.

El ```alert()``` se utiliza para mostrar un mensaje simple al usuario.


Ejemplo:
```
alert("¡Hola, todos!");
```

El ```prompt()``` requiere que el usuario ingrese algún valor, que podrás manipular.


Ejemplo:
```
const ciudad = prompt("Escribe tu ciudad:");
const msg = `¡Eres de ${ciudad}!`;
alert(msg);
```

**Prueba los códigos anteriores e intenta adaptarlos a tu programa.**


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|🗨️ [Day 3/7](https://github.com/AlejitaToloza/7DaysOfCode/tree/main/Day3) ![Day3](https://github.com/user-attachments/assets/17a3fa7e-de1d-400f-990b-3c1bf2ab42cc)
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

¿Alguna vez has jugado un **juego que te dé más de una opción** y, dependiendo de lo que elijas, el destino del personaje sea completamente diferente?

**Hoy vas a desarrollar un ejemplo así con Javascript.**

Quiero que trabajes con estructuras de control de flujo. Esta forma complicada de decirlo significa que, al igual que en los juegos, **la historia que desarrolles debe adaptarse a las respuestas dadas por quien está jugando.**

Para ello, necesitarás algunas estructuras capaces de alterar el flujo de la aplicación, como ```for, while, if y else.``` Todas estas pueden cumplir con este objetivo, dada una cierta condición.

El ```if``` y el ```else```, que ya te he mostrado en los últimos días, son capaces de crear ramificaciones dentro de la aplicación para que se tome una u otra acción, dependiendo de la condición proporcionada.

Los _*bucles*_ (como ```for``` y ```while```) son capaces de transformar una tarea repetitiva en pocas líneas de código, sin importar cuántas veces necesites repetir esa tarea.

Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:

1. Si quiere **seguir hacia el área de Front-End o seguir hacia el área de Back-End.**
2. Si está en el área de **Front-End**, si quiere **aprender React o aprender Vue**. Si está en el área de **Back-End**, podrá **aprender C# o aprender Java.**
3. Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre **seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack.** Debes mostrar en pantalla un mensaje específico para cada elección.
4. Finalmente, **pregunta en qué tecnologías le gustaría a la persona especializarse o conocer.** Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo "ok" a la pregunta: _"¿Hay alguna otra tecnología que te gustaría aprender?"_, sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.

Lo importante es que la persona que esté jugando siempre pueda **elegir qué decisión tomar para aprender** y desarrollarse en el área de programación.

Además, también es esencial que, al final del juego, pueda **ingresar tantas tecnologías como desee en la lista de aprendizaje.**

<h4>CONSEJO</h4>

Ya tienes una idea de cómo hacer que toda esta historia suceda, ¿verdad? ¡Principalmente **recordando cómo usar estructuras condicionales y bucles en Javascript!**

Si aún no sabes cómo imprimir y recibir valores en páginas web con HTML y CSS, puedes usar ```console.log, prompt y alert``` para desarrollar tu juego, como ya has visto en los últimos días.

Recuerda que siempre puedes **personalizar el juego de la forma que desees.**

<h4>EXTRA</h4>

**Ya has visto estructuras condicionales en Javascript** anteriormente, pero vamos a recapitular. El if se usa para verificar si una determinada condición es verdadera.

Ejemplo:
```
if (ciudad === "Roma") {
    // muestra la foto del "Coliseo"
}
```

Además, también puede usarse con uno o varios ```else if```, que verificará si la condición anterior era falsa y comprobará si la actual es verdadera.

Finalmente, existe el ```else``` solo, sin ninguna condición, y el código dentro de él se ejecutará siempre que todas las condiciones anteriores encadenadas sean falsas.

```
if (ciudad === "Roma") {
    // muestra la foto del "Coliseo"
}
  else if (ciudad === "París") {
  // muestra la foto de la "Torre Eiffel"
  }
    else {
    // da la respuesta "No escribiste una ciudad válida"
    }
```

**Además, para la parte 4, necesitarás una estructura de repetición (bucle)** como el ```while```. Para usarlo, es bastante fácil:

```
let edad = 0;

while (edad < 8) {
    // algún comando para imprimir la edad
    edad = edad + 1;
}
```

Este código comenzará con la edad en cero y, al entrar en el ```while```, ese valor se imprimirá y, justo después, se incrementará en 1.

Es decir, después de la primera vez que pase, el valor de la edad será igual a 1, que es menor que 8, y por eso, ***la condición del while tendrá un resultado verdadero** y continuará ejecutándose.

Solo se detendrá cuando el valor de la variable edad llegue a 8, que **no es menor que 8, y por eso la condición del while tendrá un resultado falso.**
 

También puedes aprender más sobre  `while` en [este sitio](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while).

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|🗨️ [Day 4/7](https://github.com/AlejitaToloza/7DaysOfCode/tree/main/Day4)  ![Day4](https://github.com/user-attachments/assets/40f56d90-bf10-45c7-b1f4-0a9b1e14b0b7)
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

¿Alguna vez has jugado a adivinar el número en el que tu amigo o amiga estaba pensando? Hoy volverás a tu infancia y harás exactamente eso. ¡Pero ahora, **el juego será contra la propia computadora!**

Debes crear un pequeño programa que **comience con un valor específico predefinido entre 0 y 10** para el número que vas a adivinar (por ejemplo, el 7).

A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te **felicitará**. Si te equivocas, te dará **2 intentos más.**

Al final, si no aciertas en ninguno de los intentos, **imprimirá cuál era el número inicial.**

Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.

<h4>CONSEJO</h4> 

Piensa muy bien en qué **estructura de repetición** utilizarás para hacer que tu programa se ejecute hasta que se agoten las 3 oportunidades o hasta que la persona acierte el número.

Recuerda que siempre puedes **personalizar tu programa** como desees.

No olvides compartirlo en tu GitHub y en tus redes sociales con el hashtag #7DaysOfCode.

<h4>EXTRA</h4>

Échale un vistazo a este site para <u>aprender más sobre estructuras de repetición.</u>

Para hacer que la propia máquina elija el número a adivinar, puedes utilizar algo llamado ```Math.random()```.

Para ello, utiliza el siguiente código:

``` Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)```

Donde, por supuesto, tendrás que cambiar los valores de mínimo y máximo por los límites inferior y superior, respectivamente.

Puedes leer más sobre ```Math.random()``` en [esta página](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random).

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|🗨️ [Day 5/7](https://github.com/AlejitaToloza/7DaysOfCode/tree/main/Day5)  ![Day5](https://github.com/user-attachments/assets/df6b56ad-a2bb-46cb-95e8-cb6d88769328)
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

¿Sabes cuando vas al supermercado con una lista de compras y terminas yendo y volviendo por los mismos pasillos hasta completar la lista?

Necesitas una manzana y vas al área de frutas. El siguiente ítem es una leche y te diriges a los lácteos. Pero luego anotaste una pera, y necesitas regresar de nuevo al área de frutas.

**¡Después de resolver el desafío de hoy, con certeza no harás más eso!**

Al igual que nuestra lista de compras, **es muy común que los programas trabajen con listas de string, números y objetos.**

Piensa en cada catálogo de e-commerce que has visto, en la lista de eventos de tu Google Calendar, o incluso en tu bandeja de entrada de correos electrónicos. Todos estos sitios utilizan **listas para mostrar información de una manera simple y fácil de entender.**

Además, puedes aprovechar las listas para hacer filtros, ordenaciones y otras funcionalidades muy útiles.

En este punto, ya debes haber notado que trabajar con estas colecciones es algo que necesitarás dominar, ¿verdad?

Entonces hoy, para facilitar tu visita al supermercado, debes crear un programa en Javascript que pregunte **si deseas agregar un alimento a tu lista de compras**, y debes poder responder con `"sí"` o `"no"`.

A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo `"zanahoria"`.

Después, deberá preguntar **en qué categoría se encaja ese alimento**, con algunas opciones ya predefinidas, como `frutas, lácteos, congelados, dulces` y lo que más creas interesante. Así podrás separar todo en su respectivo grupo.

Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a la primera pregunta, se mostrará una lista con todos los ítems agrupados, de la siguiente manera:

Si añades a tu lista:

`banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.`

El programa debería imprimir, por ejemplo:

```
Lista de compras:
Frutas: banana, tomate, manzana, uva, aguacate
Lácteos: leche vegetal, leche de vaca, leche en polvo
Congelados: 
Dulces: chicle y gominola
```

<h4>CONSEJO</h4>

Existe un objeto dentro del lenguaje Javascript que se usa justamente para **crear listas de elementos, llamado Array**. ¡Úsalo y abusa de él!

Recuerda que siempre puedes estilizar tu programa de la manera que desees, incluso utilizando otras tecnologías para ello, como HTML y CSS.

Sin embargo, eso **no es obligatorio en nuestra lista de lógica de programación con Javascript**. Como mencioné en los días anteriores, puedes utilizar recursos como `console.log, alert y prompt` para desarrollar tu programa. 

No olvides compartir tu código en tu GitHub y en tus redes sociales con el hashtag #7DaysOfCode.

<h4>EXTRA</h4>

**Para crear un array vacío**, puedes usar corchetes. Y luego, para insertar algo en un array, puedes usar la función `.push().` Por ejemplo:

```
let miArray = [];
miArray.push(elemento1);
```

Después de eso, el array ya no estará vacío, tendrá el `elemento 1`.

Para aprender más sobre arrays en Javascript, échale un vistazo a [este sitio](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array).


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|🗨️ [Day 6/7](https://github.com/AlejitaToloza/7DaysOfCode/tree/main/Day6)  ![Day6](https://github.com/user-attachments/assets/6153ba1f-6b51-4d69-93c8-c179a94799cf)
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

¿Recuerdas el pequeño programa que creaste ayer para hacer tu propia lista de compras? ¡Hoy tu desafío es hacerlo aún más interesante!

Ya viste cómo trabajar con arrays de forma sencilla, añadiendo elementos a tu lista de compras.

Otra operación muy común es la eliminación de elementos de la lista, y por eso es muy importante que sepas cómo hacerlo.

Pensándolo bien, existen muchas maneras de eliminar un elemento de una lista. Puedes eliminar el primer elemento, el último, o cualquier otro del medio de la lista. Cada una de estas operaciones tiene su propio método en la documentación de arrays de Javascript. Vamos a hablar más sobre estos métodos en la sección de "Consejos".

Deberás crear la opción de **eliminar algún elemento de la lista**, que se mostrará junto con la pregunta: **“¿deseas añadir un alimento a la lista de compras?”.**

A partir de ahí, si la persona elige esa opción, el programa **imprimirá los elementos presentes en la lista actual**, y la persona deberá **escribir cuál de ellos desea eliminar.**

Después de eso, el programa **eliminará el elemento de la lista e imprimirá la confirmación de que el elemento realmente ya no está allí.**

Finalmente, el programa volverá al ciclo inicial de preguntas.

Si, al intentar eliminar el elemento, este no se encuentra en la lista, deberás mostrar un mensaje advirtiendo de ello.

Por ejemplo: **“¡No fue posible encontrar el elemento en la lista!”.**

Recuerda que la opción de eliminar un elemento solo deberá estar disponible **a partir del momento en que exista al menos un elemento en la lista de compras.**

<h4>CONSEJO</h4>

Puedes buscar el elemento que la persona desea eliminar de la forma que prefieras, utilizando **métodos de Javascript para ello.**

Existe el método `.includes(elemento)`, que devuelve true o false si el array en cuestión contiene dicho elemento o no.

Existe también el método `.indexOf(elemento)`, que devuelve la posición de ese elemento dentro del array, o `-1` si no lo encuentra.

Para la eliminación en sí, existen diferentes métodos. El método `shift`, por ejemplo, elimina siempre el primer elemento de la lista; el método `pop` elimina el último; mientras que el método `splice` elimina un cierto número de elementos a partir de una determinada posición. Elige el que consideres que tiene más sentido para tu pequeño programa.

<h4>EXTRA</h4>

Para aprender más sobre métodos para arrays en Javascript, echa un vistazo a [este sitio](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Indexed_collections).

Recuerda que siempre puedes personalizar tu pequeño programa de la manera que te parezca mejor, y no olvides compartirlo en tu GitHub y en tus redes sociales con la etiqueta #7DaysOfCode.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|🗨️ [Day 7/7](https://github.com/AlejitaToloza/7DaysOfCode/tree/main/Day7)  ![Day7](https://github.com/user-attachments/assets/7939bc4a-cdfe-4e7f-aae9-318bcf2e1f73)
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Has practicado muchas cosas sobre lógica de programación con Javascript, pero aún falta algo muy importante: organizar tu código.

Y sí, esto **es algo obligatorio para aprender como desarrollador**, pues tarde o temprano en tu carrera necesitarás dar mantenimiento al código que creaste, o incluso arreglar algo en el código que escribió otra persona.

_¿Te imaginas si ese código estuviera todo desordenado?_

Una excelente práctica es siempre separar cada sección de tu código que realice una función específica en bloques de código aún más pequeños, que podrán ser reutilizados y llamados en cualquier otro momento a lo largo de tu programa. Son las llamadas funciones.

Para el ejercicio de hoy: **¿te has detenido a pensar cómo funciona una calculadora?**

Te pide que ingreses un número, luego seleccionas un tipo de operación, otro número, y ella sola realiza el cálculo para mostrarte el resultado. ¡Increíble, verdad?

En este último desafío, mi propuesta para ti es: **crea tu propia calculadora**, pero con un detalle muy importante: **cada operación debe ser una función diferente en tu código.**

Primero, la persona debe **elegir una opción de operación** impresa por el programa en la pantalla.

Luego, debe **ingresar los dos valores que desea utilizar**, y el programa **imprimirá el resultado de la operación en cuestión.**

Las opciones disponibles deben ser: **suma, resta, multiplicación, división, y salir.** En esta última, el programa debe detenerse y mostrar un mensaje _"Hasta la próxima"._

<h4>CONSEJO</h4>

**Cada operación debe tener una función diferente** en tu código, que recibirá los valores ingresados como parámetros y devolverá el resultado de la operación.

No olvides usar **estructuras de repetición** para que la calculadora imprima la elección de operación hasta que la persona desee detener el programa.

Recuerda también que, además de `if` y `else`, también tenemos `switch`, que es muy interesante de utilizar en casos como este, de múltiples opciones.

**Personaliza tu calculadora** de la manera que te parezca más adecuada, y no olvides compartirla en tu GitHub y en tus redes sociales con el hashtag #7DaysOfCode.

<h4>EXTRA</h4>

Para aprender más sobre funciones en Javascript, echa un vistazo a [este sitio](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions).

Si aún no has estudiado sobre el `switch`, también revisa [este sitio](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch).

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
![7DaysOfCode](https://github.com/user-attachments/assets/99076a7d-61af-4951-9858-20f453b606fc)

¡Felicitaciones por haber completado el #7DaysOfCode!

Fue una experiencia increíble poder desafiarte.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

| Ejercicios propuestos por:| Ejercicios realizados por: |
|----------------------------|----------------------------|
| :shipit: Jose Gonzalez | 👩‍💻 Alejandra Toloza |
|<p> _Instructor Front-End en Alura Latam_ </p>| _Estudiante de Alura Latam_ |
|<p> _Enviado por Alura Latam_ </p>| _ONE G7 - 2024_ |
| _*Esta formación forma parte del Programa ONE*_ | _*Una alianza entre Alura Latam y Oracle.*_ |


