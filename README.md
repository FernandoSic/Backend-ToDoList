<p align="center">
  <img src="https://d1o422jskmy5yw.cloudfront.net/wp-content/uploads/2017/06/galileo.png" alt="Banner del proyecto" width="100%">
</p>

# To Do List

## Prerequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas y herramientas:

1. **Node.js**: [Descargar e instalar Node.js](https://nodejs.org/)
2. **npm**: npm se instala automáticamente con Node.js. Verifica la instalación con:
   ```sh
   npm -v
   ```

## Pasos para su ejecución

1. **Clonar el repositorio**  
   ```sh
   git clone https://github.com/FernandoSic/Backend-ToDoList.git
   ```

2. **Navegar a la dirección del proyecto**  
   ```sh
   cd Backend-ToDoList
   ```
3. **Instalar las dependencias**  
   ```sh
   npm install
   ```

4. **Iniciar el servidor**  
   ```sh
   npm start
   ```

5. Puedes probar la API desde **Postman** o **Thunder Client**. El servidor estará corriendo en el **puerto 3000** con.

    *Rutas agregadas para http://localhost:3000/tasks*
    - /getTasks - GET
    - /removeTask - DELETE
    - /addTask - POST
    
    *Rutas agregadas para http://localhost:3000/goals*
    - /getGoals - GET
    - /removeGoal - DELETE
    - /addGoal - POST

    *Se necesita agregar una clave de **Authorization** en los **Headers** el cual es **123456***

## Datos del autor

- **Nombre**: Fernando Sic  
- **Correo electrónico**: fernando.sic@galileo.edu  
- **Carnet**: 24000480 