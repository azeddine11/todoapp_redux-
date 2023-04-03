import { useDispatch } from 'react-redux';

function Task({ id, description, isDone }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({
      type: 'TOGGLE_TASK',
      payload: id,
    });
  };

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id,
    });
  };

  return (
    <li>
      <input type="checkbox" checked={isDone} onChange={handleToggle} />
      <span>{description}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
export default Task;