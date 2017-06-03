
Sempli: Es un micro-framework para Node.

Esta basado en Express y orientado al desarrollo agil de Api Rest.
esta desarrollado para trabajar con MongoDB.

Instalacion:

Sempli se instala como un modulo de forma global con el comando:

$ npm install -g sempli


para crear un proyecto con sempli basta con solo correr el comando:

$ sempli init nombreDelProyecto

este comando creara la estructura del proyecto listo para trabajar.
sempli trae incorporado los modulos mas importantes para comenzar a trabarja en un proyecto node.

modulos pre-instalados:

express
body-parser
method-override
jwt-simple
moment
mongoose

entre otros.


correr nuestro servidor:

dentro del directorio del proyecto correr el comando:

$ npm start

si tiene instalado nodemon puede correr el siguiente comando para levantar el servidor.

$ npm run sempli-server

Ahora puede acceder a su servidor apuntando a un navegador la direccion http://localhost:5000.

sempli tambien cuenta con el comando create, el cual creara de forma automatica, un modelo, un controlador y las rutas para dicho controlador.

$ sempli create nombreControlador

con esto la libreria pretende hacer mas agil el desarrollo para el programador y evitar estar haciendo lo mismo varias veces.

License

Copyright (c) 2017 Luis Vilches. Sempli is licensed under the MIT License
