import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_TASK',
      payload: {
        id: Date.now(),
        description,
        isDone: false,
      },
    });
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}


export default AddTask;