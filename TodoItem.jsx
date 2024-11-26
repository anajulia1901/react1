const TodoItem = ({ todo, onComplete, onDelete }) => {
    return (
      <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => onComplete(todo.id)}
        />
        <div className="todo-info">
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <small>Created by: {todo.creator}</small>
        </div>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    );
  };
  
  export default TodoItem;