# Todo List React App

Una aplicación de lista de tareas construida con React y Vite que permite gestionar tareas diarias con persistencia de datos usando json-server.

## 🚀 Características

- ✅ Crear y visualizar tareas
- 🔄 Marcar tareas como completadas
- ❌ Eliminar tareas 
- 🎨 Interfaz de usuario intuitiva

## 🛠️ Tecnologías Utilizadas

- React
- Vite
- JSON Server
- CSS

## 📋 Prerrequisitos

- Node.js (versión 14 o superior)
- npm (viene con Node.js)

## 🔧 Instalación

1. Clona el repositorio:

git clone [URL-del-repositorio]

2. Instala las dependencias:

npm install

3. Instala JSON Server globalmente:

npm install -g json-server



## 🚀 Ejecutar el Proyecto

1. Inicia el servidor JSON (en una terminal):

```bash
json-server --watch db.json
```

2. En otra terminal, inicia la aplicación React:

```bash
npm run dev
```

3. Abre tu navegador y visita:

```
http://localhost:5173
```

## 📁 Estructura del Proyecto

```
todo-list-react/
├── src/
│   ├── components/
│   │   ├── TodoItem.jsx
│   │   ├── TodoList.jsx
│   │   └── AddTodoForm.jsx
│   ├── App.jsx
│   └── main.jsx
├── db.json
├── package.json
└── README.md
```

## 💡 Uso

- Para añadir una tarea: Completa el formulario y presiona "Add"
- Para marcar como completada: Haz click en el checkbox
- Para eliminar: Presiona el botón "Delete"
- Las tareas persisten después de recargar la página

