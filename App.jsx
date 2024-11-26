import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [hiddenTodos, setHiddenTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar todos al iniciar
  useEffect(() => {
    fetchTodos();
  }, []);

  // Obtener todos los todos
  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3000/todos');
      if (!response.ok) throw new Error('Error fetching todos');
      const data = await response.json();
      setTodos(data);
      setHiddenTodos([]);
      setLoading(false);
    } catch (err) {
      console.error('Error:', err);
      setError('Error loading todos');
      setLoading(false);
    }
  };

  const addTodo = async (newTodo) => {
    try {
      const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });
      if (!response.ok) throw new Error('Error adding todo');
      const data = await response.json();
      setTodos([...todos, data]);
    } catch (err) {
      console.error('Error:', err);
      setError('Error adding todo');
    }
  };

  const completeTodo = async (id) => {
    try {
      const todo = todos.find(t => t.id === id);
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isCompleted: !todo.isCompleted
        }),
      });
      if (!response.ok) throw new Error('Error updating todo');
      const updatedTodo = await response.json();
      setTodos(todos.map(todo => 
        todo.id === id ? updatedTodo : todo
      ));
    } catch (err) {
      console.error('Error:', err);
      setError('Error updating todo');
    }
  };

  // Eliminar todo
  const deleteTodo = (id) => {
    setHiddenTodos([...hiddenTodos, id]);
  };

  // Filtra los todos para mostrar solo los no ocultos
  const visibleTodos = todos.filter(todo => !hiddenTodos.includes(todo.id));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="app">
      <div className="content-wrapper">
        <h1>To do List</h1>
        <AddTodoForm onAdd={addTodo} />
        <TodoList
          todos={visibleTodos}
          onComplete={completeTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;