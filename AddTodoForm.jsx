import { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [creator, setCreator] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    onAdd({
      id: Date.now(),
      name,
      description,
      creator,
      isCompleted: false
    });
    
    setName('');
    setDescription('');
    setCreator('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        placeholder="Task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Creator"
        value={creator}
        onChange={(e) => setCreator(e.target.value)}
      />
      <button type="submit">Add To do</button>
    </form>
  );
};

export default AddTodoForm;