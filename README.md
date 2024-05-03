# Instrucciones
Descargar el repositorio y ejecutar en la carpeta raiz el siguiente comando:
npm start
Si se muestra un mensaje diciendo ""react-scripts" no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable." ejecutar en la carpeta raiz el siguiente comando:
npm install
Luego volver a ejecutar:
npm start

## Descripcion
Este proyecto es un manejador de tareas en el que puedes registrar una tarea, ver la tarea y marcarla como completada
## Descripcion del stack
Para este proyecto utilicé las siguientes herramientas:
bootstrap icons para agregar los iconos del sidebar ya que es mas optimo que tenerlos descargados como imagenes
Axios para el consumo de la api, ya que simplifica el codigo y agiliza el tiempo de programación
Swetalert2 para las alertas en los formularios

## Estructura de carpetas

├── src/
│   ├── Components/
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.js
│   │   │   ├── SidebarFunctions.js
│   │   │   └── Sidebar.css
│   │   │ 
│   │   ├── Tasks/
│   │   │   ├── Card/
│   │   │   │   ├── Card.js
│   │   │   │   └── Card.css
│   │   │   │
│   │   │   ├── Tasks.js
│   │   │   ├── TasksFunctions.js
│   │   │   └── Tasks.css
│   │   └── ...
│   │
│   ├── Images/
│   │   └── user.png
│   │
│   ├── Models/
│   │   └── Task.js
│   │
│   ├── Services/
│   │   │   ├── DataServices.js
│   │   │   └── TasksServices.js
│   │   │ 
│   ├── Utils/
│   │   └── environment.js

